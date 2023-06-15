package com.pinklemon.pinklemon.controllers;


import com.pinklemon.pinklemon.models.Utente;
import com.pinklemon.pinklemon.services.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Elaborazione delle operazioni di informazioni di Utentu
 */
@RestController
@RequestMapping("/api/utente")
public class UtenteController {
    @Autowired
    private UtenteService utenteService;
    /**
     * Query the list of Utentus
     */
    @GetMapping
    public List<Utente> findAll() {
        return utenteService.findAll();
    }
}
