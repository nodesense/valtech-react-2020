//cacheMiddleware.js
//es6 

import {LOGGED_OUT, LOGGED_IN} from '../action-types';

export const cacheMiddleware = (store) => next => action => {
    console.log('Cache Middleware', action);
    if (action.type === LOGGED_IN) {
        window.localStorage
                .setItem("user", 
                        JSON.stringify(action.payload.user))
    }

    if (action.type === LOGGED_OUT) {
        window.localStorage
              .removeItem("user");
    }

    return next(action);
}