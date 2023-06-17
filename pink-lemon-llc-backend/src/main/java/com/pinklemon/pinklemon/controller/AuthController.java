package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.model.AuthenticationResponse;
import com.pinklemon.pinklemon.model.LoginBody;
import com.pinklemon.pinklemon.model.SignupBody;
import com.pinklemon.pinklemon.service.AuthService;
import com.pinklemon.pinklemon.service.JwtTokenService;
import com.pinklemon.pinklemon.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
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
    private AuthService authService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;
    @Autowired
    private JwtTokenService jwtTokenService;
    /**
     * Login Method
     *
     * @param loginBody Login Information
     * @return Result
     */
    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody final LoginBody loginBody) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginBody.getEmail(), loginBody.getPassword()));
        } catch(final BadCredentialsException ex) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }
        final UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(loginBody.getEmail());
        final AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setAccessToken(jwtTokenService.generateToken(userDetails));
        return authenticationResponse;
    }
    /**
     * Login Method
     *
     * @param signupBody Signup Information
     * @return Result
     */
    @PostMapping("/signup")
    public String signup(@RequestBody SignupBody signupBody) {
        System.out.println(signupBody.toString());
        return "Registered Successfully!";
    }
}
