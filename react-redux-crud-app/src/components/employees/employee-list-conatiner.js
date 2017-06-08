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
           <EmployeeList {...this.props.employees} />
        );
    }
}

const mapStateToProps = function() {
    return {
        employees: store.getState().employees
    };
};

export default connect(mapStateToProps)(EmployeeListContainer);