import React from 'react'; //  from node_modules
import ReactDOM from 'react-dom';
import App from './app/App';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';

// Uni-directional flow
// Virtual dom ==> Real DOM
// virtual dom
ReactDOM.render ( <Router> 
                        <App />
                  </Router> ,  
                 document.getElementById('root') // real dom
                 );