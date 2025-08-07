package com.icon.project.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.*;

@Entity
@Table(name="MY_CONTACTS")
public class Contact {
	
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="FIRST_NAME")
	@NotBlank(message = "First Name is required")
	private String firstName;
	
	@Column(name="LAST_NAME")
	@NotBlank(message = "Last Name is required")
	private String lastName;
	
	@Column(name="EMAIL")
	@NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
	private String email;
	
	@Column(name="CONTACT_NUMBER")
	@NotBlank(message = "Contact no is required")
	private String contactNo;
	
	@Column(name="ADDRESS")
	@NotBlank(message = "Address is required")
	private String address;
	
	@Column(name="ORGANIZATION")
	@NotBlank(message = "Organization is required")
	private String organization;
	
	public Contact() {
		
	}

	public Contact(int id, String firstName, String lastName, String email, String contactNo, String address, String organization) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contactNo = contactNo;
		this.address = address;
		this.organization = organization;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", contactNo=" + contactNo + ", address=" + address + ", organization=" + organization + "]";
	}

	
}
