package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class CheckoutRequest {
    private String priceId;
    private int tokens;
    private boolean isSubscription;

    public CheckoutRequest() {

    }
    public CheckoutRequest(String priceId, boolean isSubscription, int tokens) {
        this.tokens = tokens;
        this.priceId = priceId;
        this.isSubscription = isSubscription;
    }
    public void setSubscription(boolean isSubscription) {
        this.isSubscription = isSubscription;
    }

    public boolean getIsSubscription() {
        return isSubscription;
    }

    public void setPriceId(String priceId) {
        this.priceId = priceId;
    }
    public String getPriceId(){
        return priceId;
    }
    public void setTokens(int tokens) {
        this.tokens = tokens;
    }
    public int getTokens(){
        return tokens;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("priceId", getPriceId())
                .append("Token", getTokens())
                .append("isSubscription", getIsSubscription())
                .toString();
    }
}
