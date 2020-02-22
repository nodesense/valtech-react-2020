import React from 'react';

// not a best practice to use store directly, 
// instead use react-redux container
import store from '../store';

class ProtectedContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            console.log('susbcribe called in protected content');
            this.forceUpdate(); // calls render
        })
    }

    componentWillUnmount() {
        this.unsubscribe(); // stop subscription
    }

    render() {
        // const Component = this.props.component;
        console.log("props from parent ", this.props);
        const state = store.getState();

        let {component:Component, ...props} = this.props;
        return (state.auth.authenticated?
                          <Component {...props} /> :
                          ( <div> <p>Login First</p> </div>)
               );
    }
}

function protectedContentWrapper(component) {
    return function WrapperComponent(props) {
        return (
            <ProtectedContent component={component} 
                              {...props} />
        )
    }
}

export default protectedContentWrapper;