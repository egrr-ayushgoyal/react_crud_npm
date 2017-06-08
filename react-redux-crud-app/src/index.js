import { BrowserRouter } from 'react-router-dom'
import  App from './components/app'
import { Provider } from 'react-redux';
import store from './store';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))