package com.serenityreads.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.serenityreads.Model.Order;
import com.serenityreads.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	@Autowired
	 private OrderService orderService;

	    @GetMapping
	    public List<Order> getAllOrders() {
	        return orderService.getAllOrders();
	    }

	    @PostMapping
	    public Order placeOrder(@RequestBody Order order) {
	        return orderService.placeOrder(order);
	    }
}
