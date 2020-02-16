// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //  PureComponent: Derived from Component
 // Purecomponent implements shouldComponentUpdate method
 // it compare nextProps with current props
 // and nextState with current State
 // if any diff, return true else false

 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }

                    {
                        items.map( item => (
                            <CartItem item={item} 
                                     key={item.id} 
                                     updateItem={this.props.updateItem}
                                     removeItem={this.props.removeItem}
                                     
                                     />
                        ))
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;
