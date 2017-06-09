import React,{Component} from 'react';
import { connect } from 'react-redux';
import  store from '../../store'
import * as employeeApi from '../../api-call/employee-api'
import EmployeeList from '../views/employee-list';

class EmployeeListContainer extends Component{

    componentWillMount(){
        employeeApi.getAllEmployees();
    }

    render(){
        return (
           <EmployeeList {...this.props.employees} {...this.props.deleteEmployeeMessage} {...this.props.isDeleteEmployeeError}  />
        );
    }
}

const mapStateToProps = function(store){
    var message=store.employees.deleteEmployeeMessage;
    var isError=store.employees.isDeleteEmployeeError;

    if(store.employees.isDeleteEmployeeError == undefined){

    }else{
        store.employees.deleteEmployeeMessage='';
        store.employees.isDeleteEmployeeError=undefined;
    }

    console.log(message , '  ',isError);

    return {
        employees: store.employees,
        deleteEmployeeMessage: message,
        isDeleteEmployeeError: isError

    };
};

export default connect(mapStateToProps)(EmployeeListContainer);