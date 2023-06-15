package com.pinklemon.pinklemon.repositories;

import com.pinklemon.pinklemon.models.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface UtenteRepository extends JpaRepository<Utente, Integer> {

}
