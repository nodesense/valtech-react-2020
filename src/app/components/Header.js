import React from 'react';

import {NavLink} from 'react-router-dom';

// HoC, inject history, location, match into props
import {withRouter} from 'react-router-dom';

import store from '../store';

// props are passed as first argument
const Header = (props) => {
     console.log('Header func props', props);
    // const title =  props.title;
    // destruct
    const {title, children} = props;
    return (
        <div>
            <h2>{title}</h2>
            {children}

            <NavLink to="/" exact className="button" 
                            activeClassName="success">
                Home
            </NavLink>

            <NavLink to="/products" className="button"
                                    activeClassName="success"
            >
                Products
            </NavLink>

            <NavLink to="/cart" className="button"
                                activeClassName="success"
            >
                Cart
            </NavLink>
            
            <NavLink to="/counter" className="button"
                                   activeClassName="success">
                Counter
            </NavLink>


            <NavLink to="/product-detail" className="button"
                                   activeClassName="success">
                Detail
            </NavLink>
 

            <NavLink to="/redux-counter" className="button"
                                   activeClassName="success">
                Redux Counter
            </NavLink>
 
            <button onClick={ () => props.history.push('/cart') }>
                Cart thro code
            </button>

            <button onClick={ () => store.dispatch({type: 'AUTH.LOGGED_OUT'}) }>
                Logout
            </button>
            
            <hr />
        </div>
    )
}

// RoutedHeader is container component,
// contains Header as child, 
// RouterHeader pass props to child
const RoutedHeader = withRouter(Header);

export default RoutedHeader;