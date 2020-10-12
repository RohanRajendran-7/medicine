package com.medicare.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.User;
import com.medicare.web.model.UserDao;

@Service
public class UserService {

	@Autowired
	private UserDao dao;

	public User login(User user) throws Exception {
		// TODO Auto-generated method stub
		User userobj = dao.findByEmail(user.getEmail());
		return userobj;
	}

	public void register(User user) throws Exception {
		// TODO Auto-generated method stub
		User userobj = dao.findByEmail(user.getEmail());
		if (userobj == null) {
			dao.save(user);
		}
		else {
			throw new Exception("Exists");
		}
	}

	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	public List<User> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	public long findCount() {
		// TODO Auto-generated method stub
		return dao.findCount();
	}

	public String findUser(String address) {
		// TODO Auto-generated method stub
		return dao.findUser(address);
	}

	public User getUserByEmail(String email) {
		// TODO Auto-generated method stub
		return dao.findByEmail(email);
	}
	
}
