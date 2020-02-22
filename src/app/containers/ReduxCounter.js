// container component
import {connect} from 'react-redux';

import ReduxCounter from '../components/ReduxCounter';
import {increment, reset} from '../state/actions';

import * as actions from '../state/actions';

// bind the dispatch with action creator functions
import {bindActionCreators} from 'redux';


// state = store.getState() ==> {counter: 0, auth: {authne..user...}}
// should return props from state, those shall be passed to component as props
// container shall call this function
// when? during first time when component initialize
// when? during state change, after dispatch
export const mapStateToProps = (state) => {
    console.log('ReduxCounter mapStateToProps', state);
    return {
        counter: state.counter
    }
}

// dispatch = store.dispatch
// getState = store.getState
// invoked by container
// when? only once whenever the component instance created
// should return props, those are functions
export const mapDispatchToProps = (dispatch, getState) => {
    console.log('counter container mapDispatchToProps');
    return {
        increment: function () {
            const action = increment(1);
            dispatch(action);
        },

        //return a wrapper function that automatically dispatch reset
        reset: bindActionCreators(reset, dispatch),

        //wrap all the action methods in actions, return wrapper functions
        //dispatchers.increment, dispatchers.reset
        dispatchers : bindActionCreators(actions, dispatch)

        // reset: function() {
        //     dispatch(reset());
        // }
    
    }
}

// create container component

const connectDecoratorFn = connect(mapStateToProps, mapDispatchToProps);

// container component, that wraps the ReduxCounter
// Container is a pure component
// only when props for Counter changed props:  {counter: 1}
// where is store? store is taken by container using Context from Provider
const ReduxCounterContainer = connectDecoratorFn(ReduxCounter);

export default ReduxCounterContainer;


// export default connect(mapStateToProps, mapDispatchToProps) (ReduxCounter)