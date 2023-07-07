package com.pinklemon.pinklemon.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(max = 30)
    private String email;
    private String type;
    private Date created_date;
    private String currency;
    private double amount;

    public Order() {

    }
    public Order(String email, String type, String currency, double amount) {
        this.email = email;
        this.type = type;
        this.currency = currency;
        this.amount = amount;
        this.created_date = new Date();
    }
    public void setId(long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getEmail() {
        return email;
    }
    public void setCreatedDate(Date created_date) {
        this.created_date = created_date;
    }
    public Date getCreatedDate() {
        return created_date;
    }
    public void setCurrency(String currency) {
        this.currency = currency;
    }
    public String getCurrency() {
        return currency;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }
    public double getAmount(){
        return amount;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getType(){
        return type;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("email", getEmail())
                .append("type", getType())
                .append("created_date", getCreatedDate())
                .append("password", getCurrency())
                .append("amount", getAmount())
                .toString();
    }
}
