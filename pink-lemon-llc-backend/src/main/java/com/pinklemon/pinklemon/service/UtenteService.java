package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.Utente;
import com.pinklemon.pinklemon.repository.UtenteRepository;
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

    public void save(Utente utente) {
        utenteRepository.save(utente);
    }

    public boolean existsByEmail(String email) {
        return utenteRepository.existsByEmail(email);
    }
}
