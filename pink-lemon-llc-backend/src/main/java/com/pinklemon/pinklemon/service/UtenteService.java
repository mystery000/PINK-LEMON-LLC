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

    public void saveUtente(Utente utente) {
        utenteRepository.save(utente);
    }

    public boolean checkIfUtenteExist(String email) {
        return utenteRepository.findByEmail(email) != null;
    }
}
