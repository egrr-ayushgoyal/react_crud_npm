import React,{Component} from 'react';
import store from '../../store'
import  * as actionCreaters from '../../actions/employee-actions';

class AddEmployee extends Component{

    render(){
        return (
                <div>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        var self=this;
                        var emp={
                            name : self.inputName.value,
                            age : self.inputAge.value,
                            email : self.inputEmail.value,
                            password : self.inputPassword.value
                        };
                        store.dispatch(actionCreaters.addEmployee(emp));

                      self.inputName.value='';
                      self.inputAge.value='';
                      self.inputEmail.value='';
                      self.inputPassword.value='';

                    }} >
                        <p> {store.getState().addEmployeeMessage} </p>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" ref={ (node) => {this.inputName = node;} } id="name" placeholder="Enter name" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input type="number" className="form-control" ref={ (node) => {this.inputAge = node;} } id="age" placeholder="Enter age" name="age" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" ref={ (node) => {this.inputEmail = node;} } id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" ref={ (node) => {this.inputPassword = node;} } id="pwd" placeholder="Enter password" name="pwd" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
        );
    }

}

export default AddEmployee;