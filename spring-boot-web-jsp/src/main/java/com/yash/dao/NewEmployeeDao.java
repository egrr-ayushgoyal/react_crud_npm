package com.yash.dao;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.yash.domain.Employee;

@Repository
@Transactional
public interface NewEmployeeDao extends CrudRepository<Employee, Long> {
	
}
