package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * User Register Object
 *
 * @author Mohamed
 */
public class SignupBody {
    /**
     * Firstname
     */
    private String name;
    /**
     * Lastname
     */
    private String surname;
    /**
     * Email
     */
    private String email;
    /**
     * Password
     */
    private String password;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("name", getName())
                .append("surname", getSurname())
                .append("email", getEmail())
                .append("password", getPassword())
                .toString();
    }
}
