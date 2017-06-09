import React,{Component} from 'react';
import EmployeeListContainer from './employee-list-conatiner'
import store from '../../store'


class ViewEmployee extends Component{

    render(){
        console.log('printing store ',store.getState());
        return (
            <div>
                <EmployeeListContainer />
            </div>
        );
    }
}

export default ViewEmployee;