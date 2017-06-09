import React,{Component} from 'react';
import * as employeeApi from '../../api-call/employee-api';
import {openModal} from '../../actions/modal-actions';
import store from '../../store';


export default function(props){
        if(props.employees == null || props.employees == undefined)
            var emps=[];
        else
            var emps=props.employees;
        var employees=emps.map(employee => <EmployeeList_Item employee={employee} key={employee.id} />);

    return (
        <div className="overflow" >

            {props.isDeleteEmployeeError == undefined ? null :
                (props.isDeleteEmployeeError ?
                        <p className="error" > {props.deleteEmployeeMessage} </p> :
                        <p className="success" > {props.deleteEmployeeMessage} </p>
                )}

            <table className="col-md-12 table table-striped table-bordered table-hover" >
                <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {employees}
                </tbody>
            </table>
        </div>
    );

}

class EmployeeList_Item extends  Component{

    render(){

        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.email}</td>
                <td>{this.props.employee.password}</td>
                <td><button className="btn btn-default"  onClick={()=>{
                   store.dispatch(openModal('EDIT_EMPLOYEE',this.props.employee));
                }} >Edit</button>   /  <button className="btn btn-danger" onClick={()=>{
                    employeeApi.deleteEmployee(this.props.employee);
                }}>Delete</button> </td>
            </tr>
        );
    }
}
