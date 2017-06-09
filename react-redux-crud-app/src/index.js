import { BrowserRouter,Router } from 'react-router-dom'
import  App from './components/app'
import { Provider } from 'react-redux';
import store from './store';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
history.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
})

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <App />

        </Router>
    </Provider>
), document.getElementById('root'))