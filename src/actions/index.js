import * as Types from './../constants/actionTypes';
import callApi from './../utils/apiCaller';
 
export const actFetchProducts = (products) => {
        return {
            type: Types.FETCH_PRODUCTS,
            products, // payload : products
        }
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi(`products`, 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id,
    }
}