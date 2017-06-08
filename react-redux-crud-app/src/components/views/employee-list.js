import React,{Component} from 'react';

export default function(props){
    console.log(props);
        if(props.employees == null || props.employees == undefined)
            var emps=[];
        else
            var emps=props.employees;
        console.log(emps);
        var employees=emps.map(employee => {

        return (
            <tr>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td><button className="btn btn-primary" >Edit</button>   /  <button className="btn btn-danger">Delete</button> </td>
            </tr>
        );
    });

    return (
        <div className="overflow" >
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
