package com.icon.project.backend.service;

import java.util.List;
import java.util.Map;

import com.icon.project.backend.model.Contact;

public interface ModelService {
	public boolean addContact(Contact con);
	public List<Contact> showContacts();
	public Contact getContactByid(int id);
	public Contact updateContact(int id, Contact con);
	public Map<String, Boolean> deleteContact(int id);
}
