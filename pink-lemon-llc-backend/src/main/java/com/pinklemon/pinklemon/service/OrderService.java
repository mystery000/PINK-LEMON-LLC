package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.enums.OrderState;
import com.pinklemon.pinklemon.model.Order;
import com.pinklemon.pinklemon.repository.OrderRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;

@Service
public class OrderService {
    @Value("${domain}")
    private String domain;

    @Autowired
    private OrderRepository orderRepository;

    public OrderService(@Value("${stripe.apiKey}") String apiKey) {
        Stripe.apiKey = apiKey;
    }

    public List<Order> findOrdersByEmail(String email) {
        return orderRepository.findOrdersByEmailIgnoreCase(email);
    }

    public Session createSession(String priceId, boolean isSubscription, int tokens) throws StripeException {

        // supply success and failure url for stripe
        String successURL = domain + "/Confirmpay";
        String cancelURL = domain + "/Prices";

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
        if (isSubscription) {
            paramsBuilder.setMode(SessionCreateParams.Mode.SUBSCRIPTION);
        } else {
            paramsBuilder.setMode(SessionCreateParams.Mode.PAYMENT);
        }

        return Session.create(paramsBuilder.build());
    }

    public void save(Order order) {
        orderRepository.save(order);
    }

    public void updateState(String orderId, OrderState state) {
        Order order = orderRepository.findOrderByOrderId(orderId);
        order.setState(state);
        order.setModified(new Date());
        orderRepository.save(order);
    }
}
