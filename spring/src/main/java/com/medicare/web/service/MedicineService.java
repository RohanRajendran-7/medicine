package com.medicare.web.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Medicine;
import com.medicare.web.model.MedicineDao;

@Service
public class MedicineService {

	@Autowired
	private MedicineDao dao;

	public List<Medicine> getAll() {
		return dao.findAll();
	}

	public Medicine addMedicine(Medicine medicine) {
		// TODO Auto-generated method stub
		return dao.save(medicine);
	}

	@Transactional
	public void updateMedicine(Medicine medicine) {
		// TODO Auto-generated method stub
		dao.save(medicine);
	}

	@Transactional
	public void deleteMedicine(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	public List<Medicine> getAllSorted(String Category) {
		// TODO Auto-generated method stub
		return dao.getAllSorted(Category);
	}

	public List<String> getAllCategories() {
		// TODO Auto-generated method stub
		return dao.getAllCategories();
	}

	public List<Medicine> getSortedMedicines(String category) {
		// TODO Auto-generated method stub
		return dao.getSortedMedicines(category);
	}

	public List<Medicine> getSortedPrices(String category) {
		// TODO Auto-generated method stub
		return dao.getSortedPrices(category);
	}

	public Medicine getById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

	public Medicine getProduct(String name) {
		// TODO Auto-generated method stub
		return dao.findByMed_Name(name);
	}

	public long getTotal(int id) {
		// TODO Auto-generated method stub
		return dao.getTotal(id);
	}

	public long getPrice() {
		// TODO Auto-generated method stub
		return dao.getPrice();
	}

	public long getAmount() {
		// TODO Auto-generated method stub
		return dao.getAmount();
	}



}
