package com.medicare.web.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Cart;
import com.medicare.web.model.CartDao;

@Service
public class CartService {

	@Autowired
	private CartDao dao;
	public List<Cart> findAll(int id) {
		// TODO Auto-generated method stub
		return dao.findAll(id);
	}
	public long findCount(int id) {
		// TODO Auto-generated method stub
		return dao.count(id);
	}
	@Transactional
	public Cart addItem(Cart cart) {
		// TODO Auto-generated method stub
		return dao.save(cart);
	}
	public void delete(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}
	public List<String> getCategory() {
		// TODO Auto-generated method stub
		return dao.getCategory();
	}

}
