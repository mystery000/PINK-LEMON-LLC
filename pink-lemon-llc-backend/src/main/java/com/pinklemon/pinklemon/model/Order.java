package com.pinklemon.pinklemon.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.hibernate.annotations.Comment;

import com.pinklemon.pinklemon.enums.Currency;
import com.pinklemon.pinklemon.enums.OrderState;
import com.pinklemon.pinklemon.enums.OrderType;

import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String orderId;

    @Size(max = 30)
    private String email;

    @Enumerated(EnumType.STRING)
    private OrderType type;
    
    private Date date;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    private int tokens;

    @Enumerated(EnumType.STRING)
    private OrderState state;

    @Comment("Stripe price id")
    private String priceId;

    private Date modified;

    public Order() {

    }

    public Order(String orderId, String email, OrderType type, Currency currency, int tokens, OrderState state, String priceId) {
        this.orderId = orderId;
        this.email = email;
        this.type = type;
        this.currency = currency;
        this.tokens = tokens;
        this.date = new Date();
        this.state = state;
        this.priceId = priceId;
        this.modified = new Date();
    }

    public void setId(long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setCreatedDate(Date date) {
        this.date = date;
    }

    public Date getDate() {
        return date;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setTokens(int tokens) {
        this.tokens = tokens;
    }

    public int getTokens() {
        return tokens;
    }

    public void setType(OrderType type) {
        this.type = type;
    }

    public OrderType getType() {
        return type;
    }

    public void setState(OrderState state) {
        this.state = state;
    }

    public OrderState getState() {
        return state;
    }

    public void setPriceId(String priceId) {
        this.priceId = priceId;
    }

    public String getPriceId() {
        return priceId;
    }

    public void setModified(Date modified) {
        this.modified = modified;
    }

    public Date getModified() {
        return modified;
    }
    
    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("orderId", getOrderId())
                .append("email", getEmail())
                .append("type", getType())
                .append("ordered_date", getDate())
                .append("password", getCurrency())
                .append("tokens", getTokens())
                .append("order state", getState())
                .append("price id", getPriceId())
                .append("modified", getModified())
                .toString();
    }
}
