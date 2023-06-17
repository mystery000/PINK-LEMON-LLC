package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.Utente;
import com.pinklemon.pinklemon.repository.UtenteRepository;
import com.pinklemon.pinklemon.utills.JwtUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Autowired
    private UtenteRepository utenteRepository;
    @Override
    public JwtUserDetails loadUserByUsername(final String email) {
        final Utente utente = utenteRepository.findByEmail(email);
        final List<SimpleGrantedAuthority> roles = Collections.singletonList(new SimpleGrantedAuthority(utente.getRole()));
        return new JwtUserDetails(utente.getId(), utente.getUsername(), utente.getPassword(), roles);
    }
}
