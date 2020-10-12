package com.medicare.web.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Admin;
import com.medicare.entity.Category;
import com.medicare.web.model.AdminDao;
import com.medicare.web.model.CategoryDao;

@Service
public class AdminService {

	@Autowired
	private AdminDao dao;
	@Autowired 
	private CategoryDao categorydao;
	
	public Admin login(Admin admin) throws Exception {
		// TODO Auto-generated method stub
		Admin adminobj = dao.findByEmail(admin.getEmail());
		if((!(adminobj.getEmail().equals(admin.getEmail())))&&(!(adminobj.getPassword().equals(admin.getPassword())))) {
			throw new Exception("Invalid Credentials");
		}
		else {
			return adminobj;
		}
	}

	public Admin register(Admin admin) throws Exception {
		// TODO Auto-generated method stub
		Admin adminobj = dao.findByEmail(admin.getEmail());
		if(adminobj != null) {
			throw new Exception("Already Registered");
		}
		else {
			return dao.save(admin);
		}	
	}

	public List<Admin> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Transactional
	public void setOffer(float offer, int id) throws Exception {
		// TODO Auto-generated method stub
		Category categoryobj = categorydao.findById(id);
		if(categoryobj == null) {
			throw new Exception("id not found");
		}
		else {
			categorydao.update(offer, id);
		}
		
	}

	public Category addCategory(Category category) throws Exception {
		// TODO Auto-generated method stub
		Category categoryobj = categorydao.findByName(category.getName());
		if(categoryobj != null) {
			throw new Exception("already exists");
		}
		else {
			return categorydao.save(category);
		}
	}

	public long findCount() {
		// TODO Auto-generated method stub
		return dao.findCount();
	}

	public Admin addAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return dao.save(admin);
	}

	public void deleteMedicine(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	public void updateAdmin(Admin admin) {
		// TODO Auto-generated method stub
		dao.save(admin);
	}

}
