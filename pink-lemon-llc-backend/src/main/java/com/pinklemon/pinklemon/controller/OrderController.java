package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.model.CheckoutResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.pinklemon.pinklemon.model.CheckoutRequest;
import com.pinklemon.pinklemon.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<?> findOrdersByEmail() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return new ResponseEntity<>(orderService.findOrdersByEmail(userDetails.getUsername()), HttpStatus.OK);
    }

    @PostMapping("/create-checkout-session")
    public ResponseEntity<CheckoutResponse> createCheckout(@RequestBody CheckoutRequest checkoutRequest) throws StripeException {
        Session session = orderService.createSession(checkoutRequest.getPriceId(), checkoutRequest.getIsSubscription());
        return new ResponseEntity<>(new CheckoutResponse(session.getId()), HttpStatus.OK);
    }
}
