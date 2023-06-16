package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.model.LoginBody;
import com.pinklemon.pinklemon.model.SignupBody;
import com.pinklemon.pinklemon.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    /**
     * Login Method
     *
     * @param loginBody Login Information
     * @return Result
     */
    @PostMapping("/login")
    public String login(@RequestBody LoginBody loginBody) {
        System.out.println(loginBody.toString());
        return "Logged in Successfully.";
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
