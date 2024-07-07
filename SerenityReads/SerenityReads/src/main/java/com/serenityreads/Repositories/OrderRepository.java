package com.serenityreads.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.serenityreads.Model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
