package com.pinklemon.pinklemon.models;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

@Entity
@Table(name="Utentes")
public class Utente {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String surname;

    @Column
    private String username;

    @Column
    private String password;
    @Column (unique = true)
    private String email;

    @Column
    private int credito;

    @Column
    private int credito_mensile;

    @Column
    private int credito_annuale;
}
