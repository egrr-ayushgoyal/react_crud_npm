import axios from 'axios';
import store from '../store';
import { getAllEmployeesSuccess } from '../actions/employee-actions';

export function getAllEmployees(){
     axios.get('http://localhost:8080/employees')
        .then(function(response) {
            console.log("SUCCEDDED  Emp ",response)
            store.dispatch(getAllEmployeesSuccess(response.data));
        })
        .catch(function(error) {
            var emp=[];
            store.dispatch(getAllEmployeesSuccess(emp));
            console.log("FAILED ")
        })

}


export function addEmployee(employeeData) {

    const config = { headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json' } };
    var message='';

     axios.post('http://localhost:8080/employees', JSON.stringify(employeeData), config)
        .then(function() {
            message="Employee Added Successfully ";;
            // return "Employee Added Successfully ";
        })
        .catch(function(error) {
            message="Problem Adding Employee";
            // return "Problem Adding Employee";
        })
console.log('message',message);

    return message;
   /* return axios.get('http://localhost:8080/addEmployee/',employeeData)
        .then(response => {
            // store.dispatch(actionCreaters.addEmployeeSuccess('successfully added'));
             return response;
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                // store.dispatch(actionCreaters.addEmployeeFailure(error.response.data));
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                // store.dispatch(actionCreaters.addEmployeeFailure(error.message));
            }
            console.log(error.config);
            return error;
        });*/

}

