package com.pinklemon.pinklemon.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import org.springframework.data.annotation.Id;

@Entity
@Table(name="Utentes")
public class Utente {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = true)
    private String name;

    @Column(nullable = true)
    private String surname;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;
    @Column (unique = true, nullable = false)
    private String email;

    @Column(nullable = true)
    private int credito;

    @Column(nullable = true)
    private int credito_mensile;

    @Column(nullable = true)
    private int credito_annuale;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
