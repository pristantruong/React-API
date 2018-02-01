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