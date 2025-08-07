package com.icon.project.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icon.project.backend.model.Contact;
import com.icon.project.backend.repository.ModelRepository;

@Service
public class ModelServiceImpl implements ModelService {
	
	@Autowired
	ModelRepository modelrepo;

	@Override
	public boolean addContact(Contact con) {
		// TODO Auto-generated method stub
		if(modelrepo.save(con)!=null)
			return true;
		return false;
	}

	@Override
	public List<Contact> showContacts() {
		// TODO Auto-generated method stub
		return (List<Contact>) modelrepo.findAll();
	}
	
	@Override
	public Contact getContactByid(int id) {
		// TODO Auto-generated method stub
		Optional<Contact> conop =  modelrepo.findById(id);
		return conop.get();
	}

	@Override
	public Contact updateContact(int id, Contact con) {
		// TODO Auto-generated method stub
		Optional<Contact> conop = modelrepo.findById(id);
		Contact c = conop.get();
		//set the update values
		c.setFirstName(con.getFirstName());
		c.setLastName(con.getLastName());
		c.setEmail(con.getEmail());
		c.setContactNo(con.getContactNo());
		c.setAddress(con.getAddress());
		c.setOrganization(con.getOrganization());
		
		Contact updatedcontact = modelrepo.save(c); 
		return updatedcontact;
	}

	@Override
	public Map<String, Boolean> deleteContact(int id) {
		// TODO Auto-generated method stub
		Optional<Contact> conop = modelrepo.findById(id);
		Contact c = conop.get();
		modelrepo.delete(c);
		Map<String,Boolean> response = new HashMap<>();
		response.put("Deleted",Boolean.TRUE);
		return response;
	}

	

}
