package com.pinklemon.pinklemon.repository;

import com.pinklemon.pinklemon.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {

    Boolean existsByEmail(String email);

    Utente findUtenteByEmail(String email);

    Utente getUtenteByEmail(String email);

}