import { CartByCity } from "api/cartbyCity";
import { AddToCart } from "pages/api/api";
import * as cart from "../actionTypes";
// 
export const getMyCartByCityStart = () => {
    return {
        type: cart.FETCH_FROM_CART_START,
        loading: true
    }
}

export const getMyCartByCityFetch = (data) => {
    return {
        type: cart.FETCH_FROM_CART_COMPLETE,
        payload: data,
        loading: false,
    }
}

export const getMyCartByCityFail = (err) => {
    return {
        type: cart.FETCH_FROM_CART_FAIL,
        payload: err,
        loading: false,
    }
}

export const setAddorRemoveCartStart = () => {
    return {
        type: cart.ADD_OR_REMOVE_CART_START,
        loading: true,
    }
}
export const setAddorRemoveCartSuccess = (status) => {
    return {
        type: cart.ADD_OR_REMOVE_CART_SUCCESS,
        payload: status,
        loading: true,
    }
}
export const setAddorRemoveCartFail = (error) => {
    return {
        type: cart.ADD_OR_REMOVE_CART_FAIL,
        payload: error,
        loading: false,
    }
}
// apis

export const callMyCartBycity = (token, city) => {
    return async function (dispatch) {
        getMyCartByCityStart()
        await CartByCity(token, city).then((response) => {
            dispatch(getMyCartByCityFetch(response.data))
        }).catch((err) => dispatch(getMyCartByCityFail(err)))
    }
}

export const callAddorRemoveCart = (token, issueId) => {
    return async function (dispatch) {
        setAddorRemoveCartStart()
        await AddToCart(token, issueId).then((response) => {
            dispatch(setAddorRemoveCartSuccess(response.data))
        }).catch((err) => dispatch(setAddorRemoveCartFail(err)))
    }
}