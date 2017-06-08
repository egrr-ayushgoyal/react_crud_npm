import * as types from './action-types'

export function addEmployee(employeeData){
    return {
        type : types.ADD_EMPLOYEE,
        employeeData : employeeData
    };
}
/*


export function getAllEmployees(){
    return {
        type : types.GET_EMPLOYEES
    };
}
*/


export function getAllEmployeesSuccess(employees){
    return {
        type : types.GET_EMPLOYEES_SUCCESS,
        employees
    };
}

/*

export function addEmployeeSuccess(message){
    return {
        type : types.ADD_EMPLOYEE_SUCCESS,
        message
    };
}

export function addEmployeeFailure(message){
    return {
        type : types.ADD_EMPLOYEE_FAILURE,
        message
    };
}

export function getEmployeesSuccess(employees){
    return {
        type : types.GET_EMPLOYEES_SUCCESS,
        employees
    };
}

export function getEmployeesFailure(message){
    return {
        type : types.GET_EMPLOYEES_FAILURE,
        message
    };
}*/
