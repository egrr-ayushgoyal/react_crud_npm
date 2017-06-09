import axios from 'axios';
import store from '../store';
import { getAllEmployeesSuccess , addEmployeeSuccess , addEmployeeFailure ,deleteEmployeeSuccess ,deleteEmployeeFailure } from '../actions/employee-actions';

export function getAllEmployees(){
     axios.get('http://localhost:8080/employees')
        .then(function(response) {
            store.dispatch(getAllEmployeesSuccess(response.data));
        })
        .catch(function(error) {
            var emp=[];
            store.dispatch(getAllEmployeesSuccess(emp));
        })
}

export function addEmployee(employeeData) {

    const config = { headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json' } };
    return axios.post('http://localhost:8080/employees', JSON.stringify(employeeData), config)
        .then(function () {
            store.dispatch(addEmployeeSuccess("Employee Added Successfully "));
        })
        .catch(function (error) {
            store.dispatch(addEmployeeFailure("Problem Adding Employee"));
        })
}

export function deleteEmployee(employeeData) {
    return axios.delete('http://localhost:8080/employees/'+employeeData.id)
        .then(function () {
            getAllEmployees();
            store.dispatch(deleteEmployeeSuccess("Employee Deleted Successfully "));
        })
        .catch(function (error) {
            store.dispatch(deleteEmployeeFailure("Problem Deleting Employee"));
        })
}


