import * as employeeApi from '../api-call/employee-api';
import * as types from '../actions/action-types';


const employees = (state=[],action) =>{
    switch(action.type){
        case types.ADD_EMPLOYEE :
            var responseMessage = employeeApi.addEmployee(action.employeeData);
            console.log(responseMessage);
            console.log(responseMessage);

            return Object.assign({}, state, { addEmployeeMessage : responseMessage });
        case types.GET_EMPLOYEES_SUCCESS :
            return Object.assign({}, state, { employees: action.employees });
        default :
            return state;
    }

};

const reducers = {
    employees : employees
}

export default reducers;