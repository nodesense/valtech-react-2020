// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
import Checkout from './Checkout';

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 1}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:
        this.setState( (prevState) => {
            return {
                items: [...prevState.items, item]
            }
        })

        this.setState(this.recalculate); // update total
 
    }
    
    // invoked by cartItem comp
    removeItem = (id) => {
        console.log('removeItem called', id);
        //TODO: functional setstate with state.items.filter
        //tODO: recalcuate
    }

    updateItem = (id, qty) => {
        console.log('updateItem called', id, qty);
        //TODO: functional setState
        // two level of immutablity
        //   for items array []
        //      item object within array
        // use map, visit each item, 
            // if id == item.id, then clone the object
    }

    empty = () => {
        //TODO
         this.setState(() => {
             return {
                 items: []
             }
         })

         this.setState(this.recalculate);
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate = (prevState) => {
        const items = prevState.items;
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        return {
            amount,
            count
        }
    }

    //TODO:
    //componentWillMount
    UNSAFE_componentWillMount() {
        console.log('Cart UNSAFE_componentWillMount')
        this.setState(this.recalculate);
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 

            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh} className="success">
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
                       
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            <Checkout />
                
            </div>
        )
    }
} 




export default Cart;