package com.pinklemon.pinklemon.repository;

import com.pinklemon.pinklemon.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {

    Boolean existsByEmail(String email);

    Utente findUtenteByEmail(String email);

}