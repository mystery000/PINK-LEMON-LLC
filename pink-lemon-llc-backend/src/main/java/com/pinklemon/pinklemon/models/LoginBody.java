package com.pinklemon.pinklemon.models;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
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
    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("email", getEmail())
                .append("password", getPassword())
                .toString();
    }
}
