package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.constant.Role;
import com.pinklemon.pinklemon.model.*;
import com.pinklemon.pinklemon.service.ConfirmationTokenService;
import com.pinklemon.pinklemon.service.EmailService;
import com.pinklemon.pinklemon.service.JwtTokenService;
import com.pinklemon.pinklemon.service.UtenteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

/**
 * Authentication Controller
 *
 * @author Mohamed
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenService jwtTokenService;

    @Autowired
    private UtenteService utenteService;

    @Autowired
    private ConfirmationTokenService confirmationTokenService;

    @Autowired
    private EmailService emailService;

    /**
     * Login Method
     *
     * @param loginBody Login Information
     * @return Result
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody final LoginBody loginBody) {
        Authentication authentication = null;
        try {
            Utente utente = utenteService.getUtenteByEmailIgnoreCase(loginBody.getEmail());
            UsernamePasswordAuthenticationToken authenticationToken= new UsernamePasswordAuthenticationToken(loginBody.getEmail(), loginBody.getPassword());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            // This method will call JwtUserDetailService.loadUserByUsername
            authentication = authenticationManager.authenticate(authenticationToken);
            if(!utente.getEnabled()) return new ResponseEntity<>("Verify your email to proceed. We just sent to an email to the address: " + utente.getEmail(), HttpStatus.UNAUTHORIZED);
        } catch(final BadCredentialsException ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.UNAUTHORIZED);
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        final AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setAccessToken(jwtTokenService.generateToken(userDetails));
        return new ResponseEntity<>(authenticationResponse, HttpStatus.OK);
    }

    final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupBody signupBody) {
        if(utenteService.existsByEmailIgnoreCase(signupBody.getEmail())) {
            return new ResponseEntity<>("Error: Email is already in use!", HttpStatus.BAD_REQUEST);
        }
        final String encodePassword = bCryptPasswordEncoder.encode(signupBody.getPassword());
        final Utente utente = new Utente(signupBody.getName(), signupBody.getSurname(), signupBody.getEmail(), encodePassword,
                Role.ROLE_USER);
        utenteService.save(utente);
        ConfirmationToken confirmationToken = confirmationTokenService.createConfirmationToken(utente.getEmail());
        System.out.println(confirmationToken.getConfirmationToken());
        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(utente.getEmail());
            simpleMailMessage.setSubject("Verify your email address to complete registration");
            simpleMailMessage.setText("To confirm your account, please click here: " + "http://localhost:5173/verify-email/" + confirmationToken.getConfirmationToken());
            emailService.sendEmail(simpleMailMessage);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("Verify email by the link sent on your email address", HttpStatus.OK);
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@Valid @RequestBody ForgotPasswordRequest forgotPasswordRequest) {
        System.out.println(forgotPasswordRequest.getEmail());
        String email = forgotPasswordRequest.getEmail();
        if(!utenteService.existsByEmailIgnoreCase(email)) {
            return new ResponseEntity<>("Error: Unregistered Email", HttpStatus.BAD_REQUEST);
        }
        ConfirmationToken confirmationToken = confirmationTokenService.createConfirmationToken(email);

        System.out.println(confirmationToken.getConfirmationToken());
        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(email);
            simpleMailMessage.setSubject("Password Recovery");
            simpleMailMessage.setText("To reset your password, please click here: " + "http://localhost:5173/reset-password/" + confirmationToken.getConfirmationToken());
            emailService.sendEmail(simpleMailMessage);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("We sent you link to reset password.", HttpStatus.OK);
    }

    @PostMapping("/signup/resend-email")
    public ResponseEntity<?> resendVerificationLink(@Valid @RequestBody ResendVerificationLinkRequest resendVerificationLinkRequest)
    {
        String email = resendVerificationLinkRequest.getEmail();
        if(!utenteService.existsByEmailIgnoreCase(email)) {
            return new ResponseEntity<>("Error: Unregistered Email", HttpStatus.BAD_REQUEST);
        }
        Utente utente = utenteService.getUtenteByEmailIgnoreCase(email);

        if(utente.getVerificationLimit() < 1) {
            return new ResponseEntity<>("The Verification Limit has been exceeded", HttpStatus.NOT_ACCEPTABLE);
        }

        ConfirmationToken confirmationToken = confirmationTokenService.createConfirmationToken(email);

        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(email);
            simpleMailMessage.setSubject("Verify your email address to complete registration");
            simpleMailMessage.setText("To confirm your account, please click here: " + "http://localhost:5173/verify-email/" + confirmationToken.getConfirmationToken());
            emailService.sendEmail(simpleMailMessage);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        utenteService.updateVerificationLimit(email, utente.getVerificationLimit() - 1);
        return new ResponseEntity<>("New verification email is successfully sen. Please check your email...", HttpStatus.OK);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest resetPasswordRequest) {
        ConfirmationToken token = confirmationTokenService.findByConfirmationToken(resetPasswordRequest.getToken());

        if(token == null) {
            return ResponseEntity.badRequest().body("Error:  Invalid token.");
        }

        if(confirmationTokenService.isExpired(token)) {
            return new ResponseEntity<>("Token is expired", HttpStatus.FORBIDDEN);
        }

        if(!utenteService.existsByEmailIgnoreCase(token.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Unregistered user");
        }

        utenteService.updatePassword(token.getEmail(), resetPasswordRequest.getPassword());
        confirmationTokenService.updateExpired(token.getConfirmationToken(), true);

        return ResponseEntity.ok("Updated password successfully!");
    }

    @GetMapping("/signup/verify-email")
    public ResponseEntity<?> confirmEmail(@RequestParam("token") String token) {

        if(token == null) {
            return ResponseEntity.badRequest().body("Error:  Couldn't verify email");
        }

        if(!confirmationTokenService.existConfirmationToken(token)) {
            return new ResponseEntity<>("Invalid Token", HttpStatus.FORBIDDEN);
        }

        ConfirmationToken confirmationToken = confirmationTokenService.findByConfirmationToken(token);

        if(confirmationTokenService.isExpired(confirmationToken)) {
            return new ResponseEntity<>("Token is expired", HttpStatus.FORBIDDEN);
        }

        utenteService.updateEnabled(confirmationToken.getEmail(), true);
        confirmationTokenService.updateExpired(confirmationToken.getConfirmationToken(), true);

        return ResponseEntity.ok("Email verified successfully!");
    }
    @PostMapping("/signout")
    public ResponseEntity<?> singout() {
        return new ResponseEntity<>("Signout!", HttpStatus.OK);
    }
}
