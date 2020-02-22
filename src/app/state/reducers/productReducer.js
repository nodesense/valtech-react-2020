import * as ActionTypes from '../action-types';

const INITIAL_STATE = {
    products: [],
    loading: false
}

export const productReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.INIT_PRODUCTS:
                return {...state, products: action.products};

        case ActionTypes.LOADING_PRODUCTS:
                return {...state, loading: action.loading}

        default: 
                return state;
    }
}