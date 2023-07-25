package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.Order;
import com.pinklemon.pinklemon.repository.OrderRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public OrderService() {
        Stripe.apiKey = "sk_test_51NNWGsESB7Q1Fa6gEyPI3tDWsRhEKDot5AWYfWrsShejLJ8LuXMFILhaLa58qAcKMdeVHpnSEuLh3cbCVbYOMW2Z00ZB2UTzKg";
    }

    public List<Order> findOrdersByEmail(String email) {
        return orderRepository.findOrdersByEmailIgnoreCase(email);
    }

    public Session createSession(String priceId, boolean isSubscription, int tokens) throws StripeException {
        // supply success and failure url for stripe
        String successURL = "http://localhost:4000/Pinkpic";
        String cancelURL = "http://localhost:4000/Prices";

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
