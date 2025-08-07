package com.icon.project.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.icon.project.backend.model.Contact;
import com.icon.project.backend.service.ModelService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ModelController {

	@Autowired
	ModelService modelservice;
	
	@RequestMapping(value="/contact",method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE )
	public ResponseEntity<Map<String,Object>> addProduct(@RequestBody @Valid Contact con, BindingResult result) {
		Map<String, Object> response = new HashMap<>();
//		System.out.println(con);
//		String resbody = "Error";
//		System.out.println(result.hasErrors());
		if(result.hasErrors())
		{
			Map<String, Object> errorMap = new HashMap<>();
	        for (FieldError error : result.getFieldErrors()) {
	            errorMap.put(error.getField() + "Error", error.getDefaultMessage());
	        }
	        response.put("status", "error");
	        response.put("errors", errorMap);

			return new ResponseEntity<Map<String,Object>>(errorMap,HttpStatus.BAD_REQUEST);
		}
		boolean status = modelservice.addContact(con);
		if(status) {
//			resbody =  "{\"status\" : \"sucess\"}";
			ResponseEntity<Map<String,Object>> resentity = new ResponseEntity<Map<String,Object>>(HttpStatus.CREATED);
			return resentity;
			
		}
		else {
//			resbody = "{\"status\" : \"failure\"}";
			ResponseEntity<Map<String,Object>> resentity = new ResponseEntity<Map<String,Object>>(HttpStatus.NOT_MODIFIED);
			return resentity;
		}	
	}
	
	@RequestMapping(value="/contact", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Contact> showContact(){
		return modelservice.showContacts();
	}
	
	@GetMapping("/contact/{id}")
	public ResponseEntity<Contact> getContactByID(@PathVariable int id){
		Contact c = modelservice.getContactByid(id);
		return ResponseEntity.ok(c);
	}
	
	@PutMapping("/contact/{id}")
	public ResponseEntity<Contact> updateContact(@PathVariable int id, @RequestBody Contact condetails){
		Contact con = modelservice.updateContact(id, condetails);
		return ResponseEntity.ok(con);
	}
	
	@DeleteMapping("/contact/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteContact(@PathVariable int id){
		Map<String, Boolean> res = modelservice.deleteContact(id);
		return ResponseEntity.ok(res);
	}
}
