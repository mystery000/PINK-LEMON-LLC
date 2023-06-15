package com.pinklemon.pinklemon.controllers;

import com.pinklemon.pinklemon.services.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
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
    private UtenteService utenteService;

    /**
     * Login Method
     *
     * @param loginBody LoginInfo
     * @return Result
     */
    @PostMapping("/login")
    public String login() {
        return "Logged in Successfully.";
    }
}
