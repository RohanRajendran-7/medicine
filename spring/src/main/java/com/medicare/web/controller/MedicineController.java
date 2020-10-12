package com.medicare.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Category;
import com.medicare.entity.Medicine;
import com.medicare.web.service.MedicineService;

@RestController
public class MedicineController {
	@Autowired
	private MedicineService service;
	
	@CrossOrigin
	@GetMapping("/medicines")
	public List<Medicine> getAll() {
		return service.getAll();
	}
	@CrossOrigin
	@GetMapping("/medicines/{id}")
	public Medicine getById(@PathVariable int id) {
		return service.getById(id);
	}
	@CrossOrigin
	@GetMapping("medicines/filter/{category}")
	public List<Medicine> getAllFiltered(@PathVariable String category){
		return service.getAllSorted(category);
	}
	@CrossOrigin
	@GetMapping("medicines/categories")
	public List<String> getAllCategories(){
		return service.getAllCategories();
	}

	@CrossOrigin
	@GetMapping("medicines/sort/name/{category}")
	public List<Medicine> getAllSorted(@PathVariable String category){
		return service.getSortedMedicines(category);
		
	}
	@CrossOrigin
	@GetMapping("medicines/sort/price/{category}")
	public List<Medicine> getAllSorted1(@PathVariable String category){
		return service.getSortedPrices(category);
		
	}
	@CrossOrigin
	@GetMapping("/medicine/{name}")
	public Medicine	getProduct(@PathVariable String name) {
		return service.getProduct(name);
	}
	@CrossOrigin
	@GetMapping("/medicines/total/{id}")
	public long getTotal(@PathVariable int id) {
		return service.getTotal(id);
	}
	@CrossOrigin
	@GetMapping("/medicines/price")
	public long getPrice() {
		return service.getPrice();
	}
	@CrossOrigin
	@GetMapping("/medicines/discount")
	public long getDiscount() {
		return service.getAmount();
	}

	

}
