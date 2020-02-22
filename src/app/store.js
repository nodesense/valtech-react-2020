import {createStore, 
        combineReducers,
        applyMiddleware} from 'redux';

import {authReducer}  from './state/reducers/authReducer';
import {counterReducer} from './state/reducers/counterReducer';

import {loggerMiddleware} from  './state/middlewares/loggerMiddleware';
import {cacheMiddleware} from './state/middlewares/cacheMiddleware';

console.log('store initialize');

//store.js

const rootReducer = combineReducers({
    // state : reducer func
    auth: authReducer,
    counter: counterReducer

    // cartItems: cartReducer,
})

// very first time, store calls reducer to initialize 
// default state value
const store = createStore(rootReducer, 
                          applyMiddleware(loggerMiddleware, 
                                          cacheMiddleware));


export default store;

/*
console.log('AUTH State ', store.getState());

const action = LoggedIn({username: 'krish', 
                        email: 'krish@example.com'});

console.log('Dispatching action ', action);
// dispatch will call reducer with prevState, action
store.dispatch(action);
console.log('AUTH State ', store.getState());

// LoggedOut returns an action object
// store.dispatch(LoggedOut()); 
console.log('AUTH State ', store.getState());

*/