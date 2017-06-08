package com.yash.rest_url;

public interface EmployeeRelatedURLs {
	// GET REQUEST
	String GET_ALL_EMPLOYEES = "http://localhost:8080/employees";

	// POST REQUEST
	String SAVE_EMPLOYEE = "http://localhost:8080/employees";

	// PUT REQUEST
	String UPDATE_EMPLOYEE = "http://localhost:8080/employees/{id}";

	// DELETE REQUEST
	String DELETE_EMPLOYEE = "http://localhost:8080/employees/{id}";
}
