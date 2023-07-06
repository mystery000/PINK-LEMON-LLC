package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Processing of User information operations
 */
@RestController
@RequestMapping("/api/utente")
public class UserController {
    @Autowired
    private UserService userService;
    /**
     * Query the Utente
     */
    @GetMapping
    public ResponseEntity<?> getUtenteByEmailIgnoreCase() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return new ResponseEntity<>(userService.getUserByEmailIgnoreCase(userDetails.getUsername()), HttpStatus.OK);
    }

    /**
     * Query the list of Utentes
     */
    @GetMapping("/all")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }
}