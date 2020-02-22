// take products, loading from reducer state, pass to component

import {connect} from 'react-redux';
import ProductList from '../components/ProductList';

import {bindActionCreators} from 'redux';
import * as actions from '../state/actions';

import * as ActionTypes from '../state/action-types';


// export const mapStateToProps = (state) => {
//     return {
//         products: state.products,
//         loading: state.loading
//     }
// }

//shorter version
// destruct
//TODO {products, loading}
export const mapStateToProps = ( state ) => ({
        products:  state.productReducer.products,
        loading:  state.productReducer.loading
    })

export const mapDispatchToProps = (dispatch) => ({
    fetchAllProducts: function(options) {
            // returns a function as action
            const actionFn = actions.fetchProducts(options);
            dispatch(actionFn)
    },

    reloadProducts: function() {
        dispatch({type: ActionTypes.REQUEST_PRODUCTS})
    },

    deleteProduct : function(id) {
        // dispatch({type: ActionTypes.DELETE_PRODUCT, id})
        dispatch({type: ActionTypes.DELETE_RELOAD_PRODUCTS, id})
        
    },
    // dispatchers.fetchProducts wrapped, automatically dispatch a function
    dispatchers: bindActionCreators(actions, dispatch)
})

// create and returns a container
export default connect(mapStateToProps, mapDispatchToProps) (ProductList);
