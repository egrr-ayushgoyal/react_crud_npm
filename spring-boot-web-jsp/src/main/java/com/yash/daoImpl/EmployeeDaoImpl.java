package com.yash.daoImpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;
import javax.swing.tree.RowMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.yash.dao.EmployeeDao;
import com.yash.domain.Employee;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {

	private DataSource dataSource;

	private JdbcTemplate jdbcTemplate;

	public EmployeeDaoImpl() {
		System.out.println("dao object ceated");
	}

	public DataSource getDataSource() {
		return dataSource;
	}

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	/*
	 * private static final class EmployeeRowMapper implements
	 * RowMapper<Employee> {
	 * 
	 * public Employee mapRow(ResultSet resultSet, int rowNum) throws
	 * SQLException { Employee employee = new Employee();
	 * employee.setId(resultSet.getInt("id"));
	 * employee.setName(resultSet.getString("name"));
	 * employee.setAge(resultSet.getInt("age"));
	 * employee.setCountry(resultSet.getString("country")); return employee; } }
	 * 
	 * public List<Employee> getAllEmployees() { return
	 * jdbcTemplate.query("select * from employees", new EmployeeRowMapper()); }
	 */

	public void saveEmployee(Employee employee) {
		jdbcTemplate
				.update("insert into employees(name,age,email,password) values(?,?,?,?)",
						new Object[] { employee.getName(), employee.getAge(),
								employee.getEmail(), employee.getPassword() });
		System.out.println("Data saved in database");

	}

	/*
	 * public void updateEmployee(Employee employee, int id) {
	 * jdbcTemplate.update(
	 * "update employees set name=?,age=?,country=? where id=? ", new Object[] {
	 * employee.getName(), employee.getAge(), employee.getCountry(), id });
	 * System.out .println(
	 * "*******************************************Data UPDATED in database"); }
	 */
	/*
	 * public void deleteEmployee(int id) {
	 * jdbcTemplate.update("delete from employees where id=?", new Object[] { id
	 * }); System.out.println("***********************DELETE SUCCESSFULLY"); }
	 */

	@Override
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateEmployee(Employee employee, int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteEmployee(int id) {
		// TODO Auto-generated method stub

	}
}
