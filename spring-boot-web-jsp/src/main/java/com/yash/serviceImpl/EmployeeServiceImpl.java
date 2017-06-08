package com.yash.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yash.dao.EmployeeDao;
import com.yash.daoImpl.EmployeeDaoImpl;
import com.yash.domain.Employee;
import com.yash.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeDao employeeDao = new EmployeeDaoImpl();

	public List<Employee> getAllEmployees() {
		return employeeDao.getAllEmployees();
	}

	public void saveEmployee(Employee employee) {
		employeeDao.saveEmployee(employee);
	}

	public void updateEmployee(Employee employee, int id) {
		employeeDao.updateEmployee(employee, id);
	}

	public void deleteEmployee(int id) {
		employeeDao.deleteEmployee(id);
	}

}
