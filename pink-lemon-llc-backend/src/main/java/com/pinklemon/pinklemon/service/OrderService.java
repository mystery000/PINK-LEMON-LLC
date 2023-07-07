package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.CheckoutRequest;
import com.pinklemon.pinklemon.model.Order;
import com.pinklemon.pinklemon.repository.OrderRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Price;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public OrderService() {
        Stripe.apiKey = "sk_test_51NQSChCNXWohRZKPQSGT3skasW9Rz6cwqWvGHwxxaZiH6wNKmmNMz05akIclMfaE22bH7Om0LS2g8amxSsGya89l00OS8sqGXk";
    }

    public List<Order> findOrdersByEmail(String email) {
        return orderRepository.findOrdersByEmailIgnoreCase(email);
    }

    public Session createSession(String priceId, boolean isSubscription, int tokens) throws StripeException {
        // supply success and failure url for stripe
        String successURL = "http://localhost:5173/Pinkpic";
        String cancelURL = "http://localhost:5173/Prices";

       SessionCreateParams.Builder paramsBuilder = SessionCreateParams.builder()
               .addLineItem(
                       SessionCreateParams.LineItem.builder()
                               .setQuantity(1L)
                               .setPrice(priceId)
                               .build())
               .setSuccessUrl(successURL)
               .setCancelUrl(cancelURL)
               .putMetadata("tokens", String.valueOf(tokens))
               .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD);
       if(isSubscription) {
           paramsBuilder.setMode(SessionCreateParams.Mode.SUBSCRIPTION);
       } else {
           paramsBuilder.setMode(SessionCreateParams.Mode.PAYMENT);
       }

       return Session.create(paramsBuilder.build());
    }
}
