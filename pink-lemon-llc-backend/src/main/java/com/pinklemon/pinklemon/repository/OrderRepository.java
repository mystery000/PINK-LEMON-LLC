package com.pinklemon.pinklemon.repository;

import com.pinklemon.pinklemon.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findOrdersByEmailIgnoreCase(String email);
}
