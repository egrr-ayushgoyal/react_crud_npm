package com.yash.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.yash.domain.Employee;

@Repository
public interface EmployeeDao {

	List<Employee> getAllEmployees();

	void saveEmployee(Employee employee);

	void updateEmployee(Employee employee, int id);

	void deleteEmployee(int id);

}
