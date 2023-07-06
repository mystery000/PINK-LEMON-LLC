package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.Order;
import com.pinklemon.pinklemon.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> findOrdersByEmail(String email) {
        return orderRepository.findOrdersByEmailIgnoreCase(email);
    }
}
