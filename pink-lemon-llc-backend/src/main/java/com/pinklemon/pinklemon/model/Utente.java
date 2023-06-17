package com.pinklemon.pinklemon.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import java.util.Date;
@Entity
@Table(name="Utentes")
public class Utente {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String name;

    @Column
    private String surname;

    @Column
    private String username;

    @Column
    private String password;
    @Column (unique = true, nullable = false)
    private String email;

    @Column
    private boolean deleted;

    @Column
    private String role;

    @Column
    private Date created_time;

    @Column
    private int credit;

    @Column
    private int credit_monthly;

    @Column
    private int credit_annual;

    /**
     * Avoid this "No default constructor for entity"
     */
    public Utente() {

    }
    public Utente(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public Date getCreated_time() {
        return created_time;
    }

    public void setCreated_time(Date created_time) {
        this.created_time = created_time;
    }
    public int getCredit() {
        return credit;
    }

    public void setCredit(int credit) {
        this.credit = credit;
    }
    public int getCredit_monthly() {
        return credit_monthly;
    }

    public void setCredit_monthly(int credit_monthly) {
        this.credit_monthly = credit_monthly;
    }
    public int getCredit_annual() {
        return credit_annual;
    }

    public void setCredit_annual(int credit_annual) {
        this.credit_annual = credit_annual;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("name", getName())
                .append("surname", getSurname())
                .append("userName", getUsername())
                .append("email", getEmail())
                .append("password", getPassword())
                .append("deleted", getDeleted())
                .append("role", getRole())
                .append("createTime", getCreated_time())
                .append("credit", getCredit())
                .append("role", getCredit_monthly())
                .append("createTime", getCredit_annual())
                .toString();
    }
}
