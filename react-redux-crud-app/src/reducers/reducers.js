import * as employeeApi from '../api-call/employee-api';
import * as types from '../actions/action-types';


const employees = (state={},action) =>{
    switch(action.type){
        case types.ADD_EMPLOYEE_SUCCESS :
            return  Object.assign({}, state, { addEmployeeMessage : action.message ,isAddEmployeeError : false});
        case types.ADD_EMPLOYEE_FAILURE :
            return  Object.assign({}, state, { addEmployeeMessage : action.message ,isAddEmployeeError : true});
        case types.DELETE_EMPLOYEE_SUCCESS :
            console.log(action.message);
            return  Object.assign({}, state, { deleteEmployeeMessage : action.message ,isDeleteEmployeeError : false});
        case types.DELETE_EMPLOYEE_FAILURE :
            console.log(action.message);
            return  Object.assign({}, state, { deleteEmployeeMessage : action.message ,isDeleteEmployeeError : true});
        case types.GET_EMPLOYEES_SUCCESS :
            return Object.assign({}, state, { employees: action.employees });
        default :
            return state;
    }

};


const testReducer = (state={},action) =>{
    switch(action.type) {
        default :
            return state;
    }

};



const initialModalState = {
    modalType: null,
    modalProps: {}
}

function modal(state = initialModalState, action) {
    switch (action.type) {
        case types.SHOW_MODAL:
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case types.HIDE_MODAL:
            return initialModalState
        default:
            return state
    }
}




const reducers = {
    employees : employees,
    testReducer : testReducer,
    modal
}




export default reducers;