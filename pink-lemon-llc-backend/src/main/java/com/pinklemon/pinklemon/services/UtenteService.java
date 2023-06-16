package com.pinklemon.pinklemon.services;

import com.pinklemon.pinklemon.models.Utente;
import com.pinklemon.pinklemon.repositories.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtenteService {
    @Autowired
    private UtenteRepository utenteRepository;

    public List<Utente> findAll() {
        return utenteRepository.findAll();
    }

}
