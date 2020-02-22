import React from 'react';

import protectedContentWrapper from './ProtectedContent';

const MyComp = () => (
    <div>
        <p>special offer...</p>
    </div>
)

const MyCompProtected = protectedContentWrapper(MyComp);


const Home = (props) => {
    console.log('Home func component', props);
    return (
        <React.Fragment>
            <h2>Home</h2>
            <p>Welcome to store</p>

            <button onClick={ () => props.history.push('/cart') }>
                Cart
            </button>

            <MyCompProtected />
            
        </React.Fragment>
    )
}

export default Home;