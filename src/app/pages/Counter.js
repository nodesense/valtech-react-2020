import React from 'react';
import PropTypes from 'prop-types';

// Props are passed in constructor as initial argument
// then props are passed to this.props
class Counter extends React.Component {

    //ES.NEXT [Stage 2, Stage 3]
    // static values inside class
    static propTypes = {
        start: PropTypes.number
    }

    static defaultProps = {
        start: 0
    }

    constructor(props) {
        super(props); // initialize this.props = props
        console.log('Counter cons Props ', this.props)

        // react state/keyword
        // class component
        // mutable/change the state
        // state per component instance
        // when comp destroyed, state also destroyed
        this.state = {
            counter: this.props.start
        }

        // overwrite default this.increment method with bind
        //ES5/bind
        this.increment = this.increment.bind(this);
    }

    // event handler
     //ES5/bind
    increment() {
        console.log("Counter state", this.state);

        //BAD, mutation
        this.state.counter++;
        //BAD, use less
        // let react calls render function
        this.forceUpdate(); 
    }

    // this handling
    // ES6 way,  () => this.decrement()
    //  to solve in render function
    // inner functions created for every render call
    decrement() {
        console.log('decrement state before ', this.state);

        // keyword
        //setState, accept new state
        // merge with this.state later
        // calls render function
        // GOOD
        // async method, state change is defered
        this.setState({
            counter: this.state.counter - 1
        })

        // will not work, as state is not changed yet
        this.setState({
            counter: this.state.counter - 1
        })

        console.log('decrement state after', this.state);

    }

    //ES.NEXT way to solve this context
    // resolve this in context
    // create function only once
    // recommended
    multiply = () => {
        console.log('multiply called', this.state);

        // functional setState
        // GOOD
        this.setState(function(prevState) {
            // should return nextState
            console.log('functional setState 1', prevState)
            return {
                counter: prevState.counter * 2
            }
        })

        this.setState(function(prevState) {
            // should return nextState
            console.log('functional setState 2', prevState)
            return {
                counter: prevState.counter * 2
            }
        })

    }

    divide = () => {
        // setState callback 
        this.setState({
            counter: this.state.counter / 2
        }, () => { //callback called after render
            console.log('divide setstate callback');
            // this again calls render
            this.setState({
                counter: this.state.counter / 2
            });
        })
    }

    componentDidMount() {
        this.handle = setInterval(() => {
                console.log('timer running', this.state);
                this.decrement();
        }, 5000);
    }

    // called when componnent getting destroyed
    componentWillUnmount() {
        // stop the timer
        console.log('Coutner will unmount');
        clearInterval(this.handle);
    }

    render() {
       
        console.log('Counter render props', this.props);
        console.log('Counter render state', this.state);


        // create and returns vir. dom
        return (
            <div>
                <h2>Counter</h2>
                <p>Start Value {this.props.start}</p>
                <p>Counter {this.state.counter}</p>
                <button onClick={this.increment}>
                    +1
                </button>

                <button onClick={ () => this.decrement() }>
                    -1
                </button>
                <button onClick={this.multiply}>
                    *2
                </button>
                <button onClick={this.divide}>
                    /
                </button>
            </div>
        )
    }
}

//static/es6
// Counter.propTypes = {
//     counter: PropTypes.number.isRequired
// }

export default Counter;