package com.pinklemon.pinklemon.model;

public class CheckoutResponse {
    private String sessionId;

    public void setSessionId(String sessionId){
        this.sessionId = sessionId;
    }
    public String getSessionId(){
        return sessionId;
    }
    public CheckoutResponse() {

    }
    public CheckoutResponse(String sessionId){
        this.sessionId = sessionId;
    }
}
