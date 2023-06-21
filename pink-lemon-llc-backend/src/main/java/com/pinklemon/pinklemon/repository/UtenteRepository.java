package com.pinklemon.pinklemon.repository;

import com.pinklemon.pinklemon.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {

    Boolean existsByEmailIgnoreCase(String email);

    Utente findUtenteByEmailIgnoreCase(String email);

    Utente getUtenteByEmailIgnoreCase(String email);

}