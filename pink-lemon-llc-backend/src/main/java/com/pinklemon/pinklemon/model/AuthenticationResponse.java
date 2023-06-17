package com.pinklemon.pinklemon.model;

public class AuthenticationResponse {
    private String accessToken;

    public void setAccessToken(String token) {
        this.accessToken = token;
    }

    public String getAccessToken() {
        return this.accessToken;
    }
}
