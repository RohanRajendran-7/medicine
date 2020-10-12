package com.medicare.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.User;
import com.medicare.web.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@CrossOrigin
	@PostMapping("/login")
	public User login(@RequestBody User user) throws Exception {
		if(user.getEmail() != null && user.getPassword() != null) {
			return service.login(user);
		}
		else {
			throw new Exception("Enter Valid Credentials");
		}
	}
	@CrossOrigin
	@PostMapping("/register")
	public void register(@RequestBody User user) throws Exception {
		if(user.getEmail() != null && user.getPassword() != null) {
			service.register(user);
		}
		else {
			throw new Exception("Enter Valid Credentials");
		}
	}
	@CrossOrigin
	@GetMapping("/user/{id}")
	public User GetUserById(@PathVariable int id) throws Exception {
		User userobj =  service.getUserById(id);
		if(userobj == null) {
			throw new Exception ("Does not exist");
		}
		else {
			return userobj;
		}
	}
	@CrossOrigin
	@GetMapping("/user/search/{email}")
	public User GetUserByEmail(@PathVariable String email) throws Exception {
		User userobj =  service.getUserByEmail(email);
		return userobj;
	}
	@CrossOrigin
	@GetMapping("/users")
	public List<User> GetUsers() {
		return service.findAll();
	}
	@CrossOrigin
	@GetMapping("/users/count")
	public long UsersCount() {
		return service.findCount();
	}
	@CrossOrigin
	@GetMapping("/user/name/{address}")
	public String userName(@PathVariable String address) {
		return service.findUser(address);
	}
}
