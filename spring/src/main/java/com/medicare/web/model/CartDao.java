package com.medicare.web.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medicare.entity.Cart;

public interface CartDao extends JpaRepository<Cart, Integer>{

	@Query(value = "SELECT DISTINCT Category from cart",nativeQuery = true)
	public List<String> getCategory();

	@Query(value = "Select * from cart where userid=?1",nativeQuery = true)
	public List<Cart> findAll(int id);

	@Query(value = "select count(id) from cart where userid=?1",nativeQuery = true)
	public long count(int id);


}
