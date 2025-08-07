package com.icon.project.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.icon.project.backend.model.Contact;

@Repository
public interface ModelRepository extends CrudRepository<Contact, Integer> {
	//implementing CRUD operations in the services
}
