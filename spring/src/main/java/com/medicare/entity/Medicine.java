package com.medicare.entity;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="medicine")
public class Medicine {
	@Column
	@Id
	private int id;
	private String med_name;
	private String Description;
	private String Directions;
	private float amount;
	private String Category;
	private float price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMed_name() {
		return med_name;
	}
	public void setMed_name(String med_name) {
		this.med_name = med_name;
	}

	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getDirections() {
		return Directions;
	}
	public void setDirections(String directions) {
		Directions = directions;
	}

	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}

}
