import { Link } from 'react-router-dom'
import React,{Component} from 'react';

const Header = () => (
    <header>
        <nav>
            <ul className="header">
                <li><Link to='/' className="headerLink" >Home</Link></li>
                <li><Link to='/addEmployee' className="headerLink" >Add Employee</Link></li>
                <li><Link to='/viewEmployee' className="headerLink">View Employees</Link></li>
            </ul>
        </nav>
    </header>
)

export  default Header;