import {createStore, combineReducers} from 'redux'
import reducers from './reducers/employee-reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;