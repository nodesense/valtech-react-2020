import axios from 'axios';

import config from '../config';


// .env.** are exposed in process.env.REACT_APP_TITLE
// process.env.REACT_APP_API_END_POINT

// console.log("API end point in config ", process.env.REACT_APP_API_END_POINT)

// options ==> {cancelToken, ......}
export const getProducts = ( options = {} ) => {
    return axios.get(`${config.apiEndPoint}/api/products`, 
                    {...options})
                .then (response => {
                    console.log('response ', response);
                    return response.data;
                })
}

// DELETE /api/products/1231
export const deleteProduct = (id, options = {}) => {
    return axios.delete(`${config.apiEndPoint}/api/products/${id}`, 
                        {...options})
                .then (response => {
                    return response.data;
                });
}