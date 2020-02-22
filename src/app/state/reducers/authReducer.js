// reducer/callback, implementation for actions
// authReducer.js

import {LOGGED_IN, LOGGED_OUT} from '../action-types';


const INITIAL_STATE = {
    authenticated: false,
    user: undefined
}

export const authReducer = (state = INITIAL_STATE, action) => {
    console.log('authReducer called', state, action);
    switch(action.type) {
        case LOGGED_IN: return {
                            ...state,
                            authenticated: true,
                            user: action.payload.user
                        }
        case LOGGED_OUT: return {
                                ...state,
                                authenticated: false,
                                user: undefined
                            }
        default: return state;
    }
}
