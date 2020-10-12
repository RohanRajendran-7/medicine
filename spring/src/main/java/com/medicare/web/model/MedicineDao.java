package com.medicare.web.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import com.medicare.entity.Category;
import com.medicare.entity.Medicine;

@Repository
public interface MedicineDao extends JpaRepository<Medicine, Integer> {

	@Modifying
	@Query(value="UPDATE medicine SET amount=?1,med_name=?2,description=?3,price=?4,directions=?5,category=?6, WHERE id=?7",nativeQuery = true)
	public void update(float amount,String name,String description,float price,String directions, String category, int id);

	@Query(value="Select * from medicine where id =?1",nativeQuery = true)
	public Medicine getById(int id);
	
	@Query(value = "SELECT * from medicine where category = ?1",nativeQuery = true)
	public List<Medicine> getAllSorted(String category);

	@Query(value="SELECT DISTINCT Category from medicine",nativeQuery = true)
	public List<String> getAllCategories();

	@Query(value = "SELECT * from medicine where category=?1 ORDER BY med_name",nativeQuery = true)
	public List<Medicine> getSortedMedicines(String category);
	
	@Query(value = "SELECT * from medicine where category=?1 ORDER BY price",nativeQuery = true)
	public List<Medicine> getSortedPrices(String category);

	@Query(value="SELECT * from medicine where med_name=?1",nativeQuery = true)
	public Medicine findByMed_Name(String name);

	@Query(value = "SELECT sum(total) from cart where userid=?1",nativeQuery = true)
	public long getTotal(int id);

	@Query(value = "Select sum(price) from cart",nativeQuery = true)
	public long getPrice();

	@Query(value = "Select sum(amount) from cart",nativeQuery = true)
	public long getAmount();


}
