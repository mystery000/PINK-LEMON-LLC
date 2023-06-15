package com.pinklemon.pinklemon.controllers;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UtenteController {
    @RequestMapping("/")
    public String index() {
        return "This is Utente API interface for pink lemon";
    }
}
