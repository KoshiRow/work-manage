package com.example.servingwebcontent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user1")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="name")
	private String name;

	// getter, setter
	public Integer getID() {return id;}
	public void setId(Integer no) {this.id = no;}
	public String getName() {return name;}
	public void setName(String name) {this.name = name;}
	
}