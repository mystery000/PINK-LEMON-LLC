package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.service.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/stripe")
public class StripeController {
    @Autowired
    private StripeService stripeService;

    @GetMapping("/test")
    public ResponseEntity<?> test() throws StripeException {
        stripeService.run();
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }
}
