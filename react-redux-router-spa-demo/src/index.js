import { BrowserRouter } from 'react-router-dom'
import  App from './components/app'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))