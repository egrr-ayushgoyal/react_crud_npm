import * as types from './action-types'

export function getAllEmployeesSuccess(employees){
    return {
        type : types.GET_EMPLOYEES_SUCCESS,
        employees
    };
}

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

export function deleteEmployeeSuccess(message){
    return {
        type : types.DELETE_EMPLOYEE_SUCCESS,
        message
    };
}

export function deleteEmployeeFailure(message){
    return {
        type : types.DELETE_EMPLOYEE_FAILURE,
        message
    };
}



