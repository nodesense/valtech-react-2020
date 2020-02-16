import React from 'react';

const Home = (props) => {
    console.log('Home func component', props);
    return (
        <React.Fragment>
            <h2>Home</h2>
            <p>Welcome to store</p>

            <button onClick={ () => props.history.push('/cart') }>
                Cart
            </button>
            
        </React.Fragment>
    )
}

export default Home;