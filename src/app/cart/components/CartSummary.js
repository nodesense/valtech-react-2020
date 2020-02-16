// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    recalculate = (prevState, props) => {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        return {
            discount, 
            grandTotal
        };
    }
     
    /*
    UNSAFE_componentWillMount() {
        this.setState(this.recalculate);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('summary receive props');
        console.log('current props', this.props);
        console.log('nextPRops', nextProps);

        this.setState(this.recalculate);
    }
    */


    // return a new state
    // called during creation/update cycle
    // called before render
    static getDerivedStateFromProps(props, state) {
        console.log('Summary getDerivedStateFromProps', props, state)
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        return {
            discount, 
            grandTotal
        };
    }


    // called when parent render called on update cycle
    // called when this.setState on update cycle
    // return true -- render shall be called
    // return false - render shall not be called
    shouldComponentUpdate(nextProps, nextState) {
        console.log('summary shouldComponentUpdate');
        console.log('current props', this.props, 
                    'state', this.state);
        console.log('nextProps', nextProps, 
                    'nextState', nextState);

        
        // return if any diff in state or props
        return this.props.amount !== nextProps.amount ||
               this.props.count !== nextProps.count ||
               this.state.discount !== nextState.discount ||
               this.state.grandTotal !== nextState.grandTotal;
    }

    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;