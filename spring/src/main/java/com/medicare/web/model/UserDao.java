package com.medicare.web.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medicare.entity.User;

public interface UserDao extends JpaRepository<User, Integer> {

	public User findByEmail(String email);
	public User findById(int id);
	@Query(value = "Select count(id) from user", nativeQuery = true)
	public long findCount();
	@Query(value = "Select name from user where address = ?1",nativeQuery = true)
	public String findUser(String address);

}
