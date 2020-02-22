import { call, put,fork, delay, takeEvery } from 'redux-saga/effects'

import * as ActionTypes from './action-types';
import * as service from './service';
import * as actions from './actions'; 

function* requestProducts(action) {
    console.log('requestProducts called', action)
 
    try {
        //dispatch loading to store
        yield put(actions.loading_products(true));
        const products = yield call(service.getProducts);
        yield put(actions.init_products(products));
    }catch(ex) {

    }
    
    yield put(actions.loading_products(false));
}

// to be used within midleware, called by run method
export function* requestProductSaga() {
    // shall listen for Product Request action.type
    // for every ActionTypes.REQUEST_PRODUCTS, it invokes requestProducts func
    yield takeEvery(ActionTypes.REQUEST_PRODUCTS, requestProducts)
}


// delete workflow

// id = action.id
function* deleteProduct({id}) {
    console.log('deleteProduct', id)
    yield call(service.deleteProduct, id)
}

export function* deleteSaga() {
    yield takeEvery(ActionTypes.DELETE_PRODUCT, deleteProduct);
}

function* deleteAndReloadProducts({id}) {
  // yield put( {type: ActionTypes.DELETE_PRODUCT, id});
   // not a good solution
  // yield delay(2000)
  // yield put ( {type: ActionTypes.REQUEST_PRODUCTS});
  // Sequencing Yields  yield*
  const result1 =  yield*  deleteProduct({id})
  const result2 = yield* requestProducts()
}
 

export function* deleteAndReloadProductsSaga() {
    yield takeEvery(ActionTypes.DELETE_RELOAD_PRODUCTS, deleteAndReloadProducts)
}