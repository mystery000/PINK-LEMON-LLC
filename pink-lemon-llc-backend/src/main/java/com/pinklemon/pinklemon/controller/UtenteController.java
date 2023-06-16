package com.pinklemon.pinklemon.controller;


import com.pinklemon.pinklemon.model.Utente;
import com.pinklemon.pinklemon.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
/**
 * Processing of User information operations
 */
@RestController
@RequestMapping("/api/utente")
public class UtenteController {
    @Autowired
    private UtenteService utenteService;

    /**
     * Query the list of Utentes
     */
    @GetMapping
    public List<Utente> findAll() {
        return utenteService.findAll();
    }
}