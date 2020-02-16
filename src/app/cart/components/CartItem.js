//https://bit.ly/2SrNIms

// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import ThemeContext from '../../components/ThemeContext';


class CartItem extends PureComponent {
    // inject this.context which value is "success"
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    render() {
        let {item, 
            removeItem, 
            updateItem } = this.props;

        console.log("CartItem Render ", item.id);
        console.log('color ', this.context);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => updateItem(item.id, item.qty - 1) }>
                        -1
                </button>    
                <button onClick={ () => removeItem(item.id) }
                        className={this.context}
                >
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;

