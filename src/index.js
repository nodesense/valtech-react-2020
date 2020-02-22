import React from 'react'; //  from node_modules
import ReactDOM from 'react-dom';
import App from './app/App';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';

import store from './app/store';

// Provider expose store as React Context, for container components
import {Provider} from 'react-redux';

// Uni-directional flow
// Virtual dom ==> Real DOM
// virtual dom
ReactDOM.render ( <Provider store={store}>
                        <Router> 
                              <App />
                        </Router> 
                  </Provider>
                  ,
                 document.getElementById('root') // real dom
                 );