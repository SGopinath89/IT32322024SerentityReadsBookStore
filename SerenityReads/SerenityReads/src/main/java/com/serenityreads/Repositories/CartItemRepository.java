package com.serenityreads.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.serenityreads.Model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
