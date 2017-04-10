import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import clients from './clients'
import accounts from './accounts'

export default combineReducers({
    routing: routerReducer,
    clients,
    accounts
});