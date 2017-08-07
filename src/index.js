import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Login from './components/login';
import Admin from './components/admin';
import reducers from './reducers';
import AuthServices from './utils/AuthServices';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            {
                AuthServices.isLoggedIn() ?
                    <Switch>
                        <Route path='/' component={Admin}/>
                    </Switch> 
                    :
                    
                    <Switch>
                        <Route path='/' component={Login}/>
                    </Switch>
            }
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
