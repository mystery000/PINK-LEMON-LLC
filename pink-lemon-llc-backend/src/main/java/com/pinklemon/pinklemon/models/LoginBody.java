package com.pinklemon.pinklemon.models;

/**
 * User Register Object
 *
 * @author Mohamed
 */
public class LoginBody {
    /**
     * Email
     */
    private String email;
    /**
     * Password
     */
    private String password;

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
}
