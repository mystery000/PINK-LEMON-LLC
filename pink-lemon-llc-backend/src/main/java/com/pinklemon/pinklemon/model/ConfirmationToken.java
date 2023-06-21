package com.pinklemon.pinklemon.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.util.Date;

@Entity
@Table(name = "confirm_tokens")
public class ConfirmationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="token_id")
    private Long tokenId;

    @Comment("Email")
    @Column(name = "email")
    private String email;

    @Comment("confirmation token")
    @Column(name="confirmation_token")
    private String confirmationToken;

    @Temporal(TemporalType.TIMESTAMP)
    @Comment("Created Time")
    private Date createdDate;

    public ConfirmationToken() {

    }

    public ConfirmationToken(String email, String confirmationToken) {
        this.confirmationToken = confirmationToken;
        this.email = email;
        this.createdDate = new Date();
    }

    public void setTokenId(Long tokenId) {
        this.tokenId = tokenId;
    }

    public Long getTokenId() {
        return tokenId;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}
