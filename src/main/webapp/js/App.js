import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';
import {Router,Route,hashHistory,Redirect} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';
import ClientsManager from './components/Clients/ClientsManager';
import AccountsManager from './components/Accounts/AccountsManager';
import MainLayout from './components/MainLayout';


class App{
    constructor(){
        this.layout = new MainLayout();
        this.initialRequest();
    }

    initialRequest(){
        axios.get('/clients',)
            .then(function (response) {
                this.initial(response.data);
            }.bind(this))
            .catch(function(error){
                console.error(error);
                this.initial([]);
            }.bind(this));
    }

    initial(clients){
        let initialState={clients:clients,accounts:[]};
        let store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)));
        let history = syncHistoryWithStore(hashHistory,store);
        console.log(history);


        ReactDOM.render(
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/clients" component={ClientsManager}/>
                    <Route path="/clients/:id/accounts" component={AccountsManager}/>
                    <Redirect from="/" to="/clients" />
                </Router>
            </Provider>
            ,document.getElementById('root'));
    }

}

export default App;
