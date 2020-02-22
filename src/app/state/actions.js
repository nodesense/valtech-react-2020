//actions.js
// all action creators

import {LOGGED_IN,
        LOGGED_OUT,
        INCREMENT, RESET } from './action-types';

import * as service from './service';        

import * as ActionTypes from './action-types';

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

export const init_products = (products) => ({ type: ActionTypes.INIT_PRODUCTS, 
                                              products});

export const loading_products = (loading) => ({ 
                                        type: ActionTypes.LOADING_PRODUCTS,
                                        loading});
                                        

//  returns a FUNCTION as an action NOT OBJECT
export function fetchProducts(options) {
    console.log('fetchProducts, returning a function');

    // this returned function shall be dispatched
    return async function(dispatch, getState) {
        console.log('called by thunk middleware');
        // all async code goes here

        /*
        const state = getState()
        if (state.productReducer.products.length > 0) {
            // data in cache
            console.log('data in cache, not fetching')
            return;
        }
        */

        dispatch(loading_products(true));

        try {
            // await automatically write a then function
            const products = await service.getProducts(options)
            // put the products data into store
            dispatch(init_products(products));
        }catch(e) {
            // promise error
        }

        dispatch(loading_products(false));
    }
}