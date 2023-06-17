package com.pinklemon.pinklemon.repository;

import com.pinklemon.pinklemon.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {
    public Utente findByEmail(String email);
}