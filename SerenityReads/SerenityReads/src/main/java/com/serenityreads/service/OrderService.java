package com.serenityreads.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.serenityreads.Model.Order;
import com.serenityreads.Repositories.OrderRepository;

@Service
public class OrderService {
	 private OrderRepository orderRepository;

	    public List<Order> getAllOrders() {
	        return orderRepository.findAll();
	    }

	    public Order placeOrder(Order order) {
	        return orderRepository.save(order);
	    }
}
