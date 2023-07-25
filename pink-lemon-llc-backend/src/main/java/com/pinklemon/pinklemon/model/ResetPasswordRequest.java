package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class ResetPasswordRequest {
    private String token;
    private String password;

    public void setToken(String token) {
        this.token = token;
    }
    public String getToken() {
        return token;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getPassword() {
        return password;
    }

    public ResetPasswordRequest() {

    }
    public ResetPasswordRequest(String token, String password) {
        this.password = password;
        this.token = token;
    }
    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("Token", getToken())
                .append("Password", getPassword())
                .toString();
    }
}
