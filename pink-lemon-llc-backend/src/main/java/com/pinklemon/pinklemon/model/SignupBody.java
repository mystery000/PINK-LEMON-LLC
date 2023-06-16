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
     * Username
     */
    private String username;
    /**
     * Email
     */
    private String email;
    /**
     * Password
     */
    private String password;
    /**
     * Credit
     */
    private int credit;
    /**
     * Monthly Credit
     */
    private int credit_monthly;
    /**
     * Annual Credit
     */
    private int credit_annual;

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
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("name", getName())
                .append("surname", getSurname())
                .append("username", getUsername())
                .append("email", getEmail())
                .append("password", getPassword())
                .append("credit", getCredit())
                .append("credit_monthly", getCredit_monthly())
                .append("credit_annual", getCredit_annual())
                .toString();
    }
}
