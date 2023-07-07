package com.pinklemon.pinklemon.controller;

import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebhookController {
    private static final String WEBHOOK_SECRET = "whsec_oQpHTYpRtC6V4miJuSKpPvdv70G7K7k3";

    @PostMapping("/api/webhook")
    public ResponseEntity<String> handleWebhook(@RequestHeader("Stripe-Signature") String sigHeader, @RequestBody String payload) {
        System.out.println("##########################");
        Event event = null;

        try {
            event = Webhook.constructEvent(payload, sigHeader, WEBHOOK_SECRET);
        } catch (SignatureVerificationException e) {
            // Invalid signature
            return ResponseEntity.badRequest().build();
        }

        // Handle the event
        if (event.getType().equals("checkout.session.completed")) {
            Session session = (Session) event.getData().getObject();
            // Payment was successful!
            // You can find more details about the payment in the session object,
            // and you can fulfill the purchase here.
        }

        return ResponseEntity.ok().build();
    }
}
