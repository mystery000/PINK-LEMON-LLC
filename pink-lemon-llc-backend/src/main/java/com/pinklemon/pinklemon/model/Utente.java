package com.pinklemon.pinklemon.model;

import jakarta.persistence.*;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.hibernate.annotations.Comment;

import java.util.Date;
@Entity
@Table(name="utentes")
public class Utente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Comment("First Name")
    @Size(max = 30)
    private String name;
    @Comment("Last Name")
    @Size(max = 30)
    private String surname;
    @NotNull
    @Comment("Password")
    @Size(max = 120)
    private String password;
    @NotNull
    @Comment("Email")
    @Email
    @Size(max = 50)
    private String email;
    @Comment("True: Deleted User")
    private boolean deleted;
    @Comment("Role (Types: ROLE_USER, ROLE_ADMIN)")
    private String role;
    @Comment("Created Time")
    private Date created_time;
    @Comment("Credit")
    private int credit;
    @Comment("Email Confirmation")
    private boolean isEnabled;
    /**
     * Avoid this "No default constructor for entity"
     */
    public Utente() {

    }

    public Utente(String name, String surname, @NotNull String email, @NotNull String password, String role) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.credit = 10;
        this.created_time = new Date();
        this.isEnabled = false;
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

    public @NotNull String getPassword() {
        return password;
    }

    public void setPassword(@NotNull String password) {
        this.password = password;
    }
    public @NotNull String getEmail() {
        return email;
    }

    public void setEmail(@NotNull String email) {
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

    public boolean getEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean isEnabled) {
        this.isEnabled = isEnabled;
    }
    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("name", getName())
                .append("surname", getSurname())
                .append("email", getEmail())
                .append("password", getPassword())
                .append("deleted", getDeleted())
                .append("role", getRole())
                .append("createTime", getCreated_time())
                .append("credit", getCredit())
                .append("isEnabled", getEnabled())
                .toString();
    }
}
