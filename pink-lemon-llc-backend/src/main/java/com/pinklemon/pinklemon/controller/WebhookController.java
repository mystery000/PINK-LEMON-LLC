package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.model.User;
import com.pinklemon.pinklemon.service.UserService;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebhookController {
    private static final String WEBHOOK_SECRET = "whsec_oQpHTYpRtC6V4miJuSKpPvdv70G7K7k3";

    @Autowired
    private UserService userService;

    @PostMapping("/api/webhook")
    public ResponseEntity<String> handleWebhook(@RequestHeader("Stripe-Signature") String sigHeader, @RequestBody String payload) {
        Event event = null;

        try {
            event = Webhook.constructEvent(payload, sigHeader, WEBHOOK_SECRET);
        } catch (SignatureVerificationException e) {
            // Invalid signature
            return ResponseEntity.badRequest().build();
        }

        // Handle the event
        switch (event.getType()) {
            case "checkout.session.completed":
                Session session = (Session) event.getData().getObject();
                int tokens = Integer.parseInt(session.getMetadata().get("tokens"));
                String email = session.getCustomerDetails().getEmail();
                userService.addCredit(email, tokens);
                break;
            case "checkout.session.expired":
                break;
            default:
                System.out.println("Unhandled event type:" + event.getType());
        }

        return ResponseEntity.ok().build();
    }
}
