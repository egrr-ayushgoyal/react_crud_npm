package com.yash.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.yash.domain.Employee;

@Service
public interface EmployeeService {

	List<Employee> getAllEmployees();

	void saveEmployee(Employee employee);

	void updateEmployee(Employee employee, int id);

	void deleteEmployee(int id);

}
