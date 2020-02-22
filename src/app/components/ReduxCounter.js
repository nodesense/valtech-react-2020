import React from 'react';

//dumb component
// presentation component

const ReduxCounter = (props) => {
    console.log('ReduxCounter render', props);
    return (
        <div>
            <h2>Redux Counter</h2>
            <p>Counter {props.counter}</p>

            <button onClick={props.increment}> +1 </button>
            <button onClick={props.reset}> Reset </button>


            <button onClick={ () => props.dispatchers.increment(2)}>
                +2/BindAction
            </button>

            <button onClick={props.dispatchers.reset}>
                Reset/BindAction
            </button>
            

        </div>
    )
}

export default ReduxCounter;