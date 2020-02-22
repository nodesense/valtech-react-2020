import React from 'react';

import axios from 'axios';

const CancelToken = axios.CancelToken;

class ProductList extends React.Component {

    componentDidMount() {
        //from container fetchAllProducts 
        this.source = CancelToken.source();
        this.props.fetchAllProducts({ cancelToken: this.source.token});
    }

    componentWillUnmount() {
        this.source.cancel('Operation canceled on unload');
    }

    reload = () => {
        // refresh products using saga
        // reloadProducts is from container 
        this.props.reloadProducts(); 
    }

    deleteProduct = (id) => {
        //delete product using saga
        // deleteProduct is from container 
        this.props.deleteProduct(id);
    }

    render() {
        const {loading, products} = this.props;

        if (loading) {
            return (
                <div>
                    <h2> Product List</h2>
                    <p>Loading products....</p>
                </div>
            )
        }

        return (
            <div>
                <h2>Product List</h2>
                <button onClick={this.reload}>Reload</button>
                <ul>
                    {
                        products.map (product => (
                            <li key={product.id}>
                                {product.name} [id: {product.id}]

                                <button onClick={ () => this.deleteProduct(product.id)}>
                                    X
                                </button>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ProductList;