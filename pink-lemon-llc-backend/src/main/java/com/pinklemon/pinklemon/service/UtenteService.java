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

    public boolean existsByEmailIgnoreCase(String email) {
        return utenteRepository.existsByEmailIgnoreCase(email);
    }

    public Utente getUtenteByEmailIgnoreCase(String email) {
        return utenteRepository.getUtenteByEmailIgnoreCase(email);
    }

    public void updateCredit(String email, int credits) {
        Utente utente = utenteRepository.getUtenteByEmailIgnoreCase(email);
        utente.setCredit(credits);
        utenteRepository.save(utente);
    }

    public void updateVerificationLimit(String email, int limits) {
        Utente utente = utenteRepository.getUtenteByEmailIgnoreCase(email);
        utente.setVerificationLimit(limits);
        utenteRepository.save(utente);
    }
}
