package com.medicare.web.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medicare.entity.Admin;

public interface AdminDao extends JpaRepository<Admin, Integer> {

	public Admin findByEmail(String email);

	@Query(value = "Select count(id) from admin ",nativeQuery = true)
	public long findCount();
	
}
