//actions.js
// all action creators

import {LOGGED_IN,
        LOGGED_OUT,
        INCREMENT, RESET } from './action-types';

export const LoggedIn = (user) => {
    // returns an action object 
    return {
        type: LOGGED_IN,
        payload: {user}, // user: user
    }
}

export const LoggedOut = () => ({
                                    type: LOGGED_OUT
                                });

export const increment = (value) => ({
    type: INCREMENT,
    payload: {value}
})

export const reset = () => ({type: RESET});
