import { Switch, Route } from 'react-router-dom'
import AddEmployee from './components/employees/add-employee-container'
import ViewEmployee from './components/employees/view-employee-container'
import React,{Component} from 'react';
import ModalRoot from './components/common/root-modal';


const Home = () => (
    <div>
        <h1>Welcome to the Employees Website!</h1>
    </div>
)



const MainRoutes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/addEmployee' component={AddEmployee}/>
            <Route path='/viewEmployee' component={ViewEmployee}/>
        </Switch>
        <ModalRoot/>
    </main>
)

export  default  MainRoutes;