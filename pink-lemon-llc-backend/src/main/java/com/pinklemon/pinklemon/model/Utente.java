package com.pinklemon.pinklemon.model;

import com.pinklemon.pinklemon.constant.Role;
import jakarta.persistence.*;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.Date;
@Entity
@Table(name="utentes")
public class Utente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column ( columnDefinition = "varchar(30) default '' comment 'firstname'")
    private String name;
    @Column ( columnDefinition = "varchar(30) default '' comment 'lastname'" )
    private String surname;
    @Column ( columnDefinition = "varchar(30) not null comment 'username'" )
    private String username;
    @Column ( columnDefinition = "varchar(200) not null comment 'password'" )
    private String password;
    @Column ( columnDefinition = "varchar(50) not null comment 'email'")
    private String email;
    @Column ( columnDefinition = "boolean default false comment 'True: Deleted user'" )
    private boolean deleted;
    @Column ( columnDefinition = "varchar(30) default 'ROLE_USER' comment 'role (Types: ROLE_USER, ROLE_ADMIN)'")
    private String role;
    @Column ( columnDefinition = "datetime default CURRENT_TIMESTAMP comment 'Created Time'")
    private Date created_time;
    @Column ( columnDefinition = "integer default 0 comment 'Credit'")
    private int credit;
    /**
     * Avoid this "No default constructor for entity"
     */
    public Utente() {

    }

    public Utente(String name, String surname, String username, String email, String password, String role) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.credit = 0;
        this.created_time = new Date();
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
                .toString();
    }
}
