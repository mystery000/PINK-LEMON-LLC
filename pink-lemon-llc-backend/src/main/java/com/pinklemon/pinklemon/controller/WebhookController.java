package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.enums.OrderState;
import com.pinklemon.pinklemon.service.OrderService;
import com.pinklemon.pinklemon.service.UserService;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebhookController {

    @Value("${webhook.secretKey}")
    private String WEBHOOK_SECRET;

    @Autowired
    private UserService userService;

    @Autowired
    private OrderService orderService;

    @PostMapping("/api/webhook")
    public ResponseEntity<String> handleWebhook(@RequestHeader("Stripe-Signature") String sigHeader, @RequestBody String payload) {
        Event event = null;
        Session session = null;

        try {
            event = Webhook.constructEvent(payload, sigHeader, WEBHOOK_SECRET);
            session = (Session) event.getData().getObject();
        } catch (SignatureVerificationException e) {
            // Invalid signature
            return ResponseEntity.badRequest().build();
        }

        // Handle the event
        switch (event.getType()) {
            case "checkout.session.completed":
                int tokens = Integer.parseInt(session.getMetadata().get("tokens"));
                String email = session.getCustomerDetails().getEmail();
                userService.addCredit(email, tokens);
                orderService.updateState(session.getId(), OrderState.Completed);
                break;
            case "checkout.session.expired":
                orderService.updateState(session.getId(), OrderState.Failed);
                break;
            default:
                System.out.println("Unhandled event type:" + event.getType());
        }

        return ResponseEntity.ok().build();
    }
}
