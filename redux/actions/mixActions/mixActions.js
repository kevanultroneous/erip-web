import { AddressTypesApi, NavSearchApi, PincodeByCityApi, TimeSloatAPIs } from "api/mixApi"

import * as mix from "../actionTypes"

export const getTimeSloatStart = () => {
    return {
        type: mix.GET_TIMESLOAT_START,
        loading: true,
    }
}
export const getTimeSloatSuccess = (data) => {
    return {
        type: mix.GET_TIMESLOAT_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const getTimeSloatFail = (err) => {
    return {
        type: mix.GET_TIMESLOAT_FAIL,
        payload: err,
        loading: false,
    }
}

export const getPincodeByCityStart = () => {
    return {
        type: mix.GET_PINCODEBY_CITY_START,
        loading: true,
    }
}
export const getPincodeByCitySuccess = (data) => {
    return {
        type: mix.GET_PINCODEBY_CITY_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const getPincodeByCityFail = (err) => {
    return {
        type: mix.GET_PINCODEBY_CITY_FAIL,
        payload: err,
        loading: false,
    }
}

export const getAddressTypeStart = () => {
    return {
        type: mix.GET_PINCODEBY_CITY_START,
        loading: true,
    }
}
export const getAddressTypeSuccess = (data) => {
    return {
        type: mix.GET_ADDRESS_TYPE_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const getAddressTypeFail = (err) => {
    return {
        type: mix.GET_ADDRESS_TYPE_FAIL,
        payload: err,
        loading: false,
    }
}

export const getNavSearchStart = () => {
    return {
        type: mix.NAV_SEARCH_START,
        loading: true,
    }
}
export const getNavSearchSuccess = (data) => {
    return {
        type: mix.NAV_SEARCH_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const getNavSearchFail = (err) => {
    return {
        type: mix.NAV_SEARCH_FAIL,
        payload: err,
        loading: false,
    }
}


export const callTimeSloatApi = () => {
    return async function (dispatch) {
        dispatch(getTimeSloatStart())
        TimeSloatAPIs()
            .then((response) => dispatch(getTimeSloatSuccess(response.data)))
            .catch(e => dispatch(getTimeSloatFail(e)))
    }
}

export const callPincodeByCity = (cityid) => {
    return async function (dispatch) {
        dispatch(getPincodeByCityStart())
        PincodeByCityApi(cityid)
            .then((response) => dispatch(getPincodeByCitySuccess(response.data)))
            .catch(e => dispatch(getPincodeByCityFail(e)))
    }
}

export const callAddressTypes = () => {
    return async function (dispatch) {
        dispatch(getAddressTypeStart())
        AddressTypesApi()
            .then((response) => dispatch(getAddressTypeSuccess(response.data)))
            .catch(e => dispatch(getAddressTypeFail(e)))
    }
}

export const callNavsearch = (city, keyword) => {
    return async function (dispatch) {
        dispatch(getNavSearchStart())
        NavSearchApi(city, keyword)
            .then((response) => dispatch(getNavSearchSuccess(response.data)))
            .catch(e => dispatch(getNavSearchFail(e)))
    }
}