package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.constant.Role;
import com.pinklemon.pinklemon.model.AuthenticationResponse;
import com.pinklemon.pinklemon.model.LoginBody;
import com.pinklemon.pinklemon.model.SignupBody;
import com.pinklemon.pinklemon.model.Utente;
import com.pinklemon.pinklemon.service.JwtTokenService;
import com.pinklemon.pinklemon.service.JwtUserDetailsService;
import com.pinklemon.pinklemon.service.UtenteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

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
    private JwtUserDetailsService jwtUserDetailsService;
    @Autowired
    private JwtTokenService jwtTokenService;
    @Autowired
    private UtenteService utenteService;
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
            UsernamePasswordAuthenticationToken authenticationToken= new UsernamePasswordAuthenticationToken(loginBody.getEmail(), loginBody.getPassword());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            // This method will call JwtUserDetailService.loadUserByUsername
            authentication = authenticationManager.authenticate(authenticationToken);
        } catch(final BadCredentialsException ex) {
            return new ResponseEntity<>("Wrong password or email", HttpStatus.UNAUTHORIZED);
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        final AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setAccessToken(jwtTokenService.generateToken(userDetails));
        return new ResponseEntity<>(authenticationResponse, HttpStatus.OK);
    }

    final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupBody signupBody) {
        if(utenteService.existsByEmail(signupBody.getEmail())) {
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }
        final String encodePassword = bCryptPasswordEncoder.encode(signupBody.getPassword());
        final Utente utente = new Utente(signupBody.getName(), signupBody.getSurname(), signupBody.getUsername(), signupBody.getEmail(), encodePassword,
                Role.ROLE_USER);
        utenteService.save(utente);
        return new ResponseEntity<>("User registered Successfully!", HttpStatus.OK);
    }

    @PostMapping("/signout")
    public ResponseEntity<?> singout(@RequestBody String username) {
        return new ResponseEntity<>("Signout!", HttpStatus.OK);
    }
}
