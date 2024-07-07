package com.serenityreads.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.serenityreads.Model.CartItem;
import com.serenityreads.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
	private CartService cartService;

    @GetMapping
    public List<CartItem> getAllCartItems() {
        return cartService.getAllCartItems();
    }

    @PostMapping
    public CartItem addCartItem(@RequestBody CartItem cartItem) {
        return cartService.addCartItem(cartItem);
    }

    @DeleteMapping("/{id}")
    public void removeCartItem(@PathVariable Long id) {
        cartService.removeCartItem(id);
    }
}
