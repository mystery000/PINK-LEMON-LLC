package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.Utente;
import com.pinklemon.pinklemon.repository.UtenteRepository;
import com.pinklemon.pinklemon.utills.JwtUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Autowired
    private UtenteRepository utenteRepository;
    @Override
    public JwtUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Utente utente = utenteRepository.getUtenteByEmailIgnoreCase(email);
        if(utente == null || utente.getDeleted()) throw new UsernameNotFoundException("Your email doesn't exist");
        final List<SimpleGrantedAuthority> roles = Collections.singletonList(new SimpleGrantedAuthority(utente.getRole()));
        return new JwtUserDetails(utente.getId(), utente.getEmail(), utente.getPassword(), roles);
    }
}
