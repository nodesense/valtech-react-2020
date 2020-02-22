import {INCREMENT, RESET} from '../action-types';
const INITIAL_STATE = 0;

export const counterReducer = (state = INITIAL_STATE, action) => {
    console.log('counter reducer called', state, action);

    switch(action.type) {
        case INCREMENT: return state + action.payload.value;
        case RESET: return 0;
        default: return state;
    }
}