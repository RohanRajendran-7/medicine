package com.medicare.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Cart;
import com.medicare.web.service.CartService;

@RestController
public class CartController {

	@Autowired
	private CartService service;
	
	@CrossOrigin
	@GetMapping("/cart/{id}")
	public List<Cart> getCart(@PathVariable int id) {
		return service.findAll(id);
	}
	@CrossOrigin
	@GetMapping("/cart/count/{id}")
	public long getCartCount(@PathVariable int id) {
		return service.findCount(id);
	}
	@CrossOrigin
	@PostMapping("/cart/add")
	public Cart addItem(@RequestBody Cart cart) {
		return service.addItem(cart);
	}
	@CrossOrigin
	@DeleteMapping("/cart/delete/{id}")
	public void deleteItem(@PathVariable int id) {
		service.delete(id);
	}
	@CrossOrigin
	@GetMapping("/cart/category")
	public List<String> getCategory() {
		return service.getCategory();
	}
}
