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

import com.medicare.entity.Admin;
import com.medicare.entity.Category;
import com.medicare.entity.Medicine;
import com.medicare.web.service.AdminService;
import com.medicare.web.service.MedicineService;

@RestController
public class AdminController {

	@Autowired
	private AdminService service;
	@Autowired
	private MedicineService medicineservice;
	
	@CrossOrigin
	@PostMapping("/admin/login")
	public Admin login(@RequestBody Admin admin) throws Exception {
		if(admin.getEmail() == null && admin.getPassword() == null) {
			throw new Exception("Enter valid credentials");
		}
		else {
			return service.login(admin);
		}
	}
	@CrossOrigin
	@PostMapping("/admin/register")
	public Admin register(@RequestBody Admin admin ) throws Exception {
		if(admin.getEmail() == null && admin.getPassword() == null) {
			throw new Exception("Enter valid credentials");
		}
		else {
			return service.register(admin);
		}
	}
	@CrossOrigin
	@GetMapping("/admins")
	public List<Admin> findAll(){
		return service.findAll();
	}
	@CrossOrigin
	@GetMapping("/admins/count")
	public long count(){
		return service.findCount();
	}
	@CrossOrigin
	@PutMapping("/admin/category/offer/{id}")
	public void setOffer(@PathVariable int id,@RequestBody float offer) throws Exception {
		service.setOffer(offer,id);
	}
	@CrossOrigin
	@PostMapping("/admin/categories/add")
	public Category addCategory(@RequestBody Category category) throws Exception {
		return service.addCategory(category);
	}
	
	@CrossOrigin
	@PostMapping("admin/medicine/add")
	public Medicine addMedicine(@RequestBody Medicine medicine){
		return medicineservice.addMedicine(medicine);
	}
	@CrossOrigin
	@PutMapping("admin/medicine/update/{id}")
	public void updateMedicine(@RequestBody Medicine medicine,@PathVariable int id){
		medicineservice.updateMedicine(medicine);
	}
	@CrossOrigin
	@DeleteMapping("admin/medicine/{id}")
	public void deleteMedicine(@PathVariable int id) {
		medicineservice.deleteMedicine(id);
	}
	@CrossOrigin
	@DeleteMapping("admin/{id}")
	public void deleteAdmin(@PathVariable int id) {
		service.deleteMedicine(id);
	}
	@CrossOrigin
	@GetMapping("admin/medicines")
	public List<Medicine> getAll() {
		return medicineservice.getAll();
	}
	@CrossOrigin
	@PostMapping("/admin/add")
	public Admin addAdmin(@RequestBody Admin admin) throws Exception {
		return service.addAdmin(admin);
	}
	@CrossOrigin
	@PutMapping("admin/update/{id}")
	public void updateAdmin(@RequestBody Admin admin,@PathVariable int id){
		service.updateAdmin(admin);
	}
}

