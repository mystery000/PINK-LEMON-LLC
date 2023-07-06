package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class ForgotPasswordRequest {
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    ForgotPasswordRequest() {

    }

    ForgotPasswordRequest(String email) {
        this.email = email;
    }
    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("Email", getEmail())
                .toString();
    }
}
