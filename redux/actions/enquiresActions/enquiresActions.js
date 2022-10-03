import { GetEnqApi, PostEnqApi } from "api/enquireAPI"
import * as enq from "../actionTypes"


export const fetchEnqStart = () => {
    return {
        type: enq.FETCH_ENQ_START,
        loading: true,
    }
}
export const fetchEnqSuccess = (data) => {
    return {
        type: enq.FETCH_ENQ_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const fetchEnqFail = (err) => {
    return {
        type: enq.FETCH_ENQ_FAIL,
        payload: err,
        loading: false,
    }
}

export const addEnqStart = () => {
    return {
        type: enq.ADD_ENQ_START,
        loading: true,
    }
}
export const addEnqSuccess = (data) => {
    return {
        type: enq.ADD_ENQ_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const addEnqFail = (err) => {
    return {
        type: enq.ADD_ENQ_FAIL,
        payload: err,
        loading: false,
    }
}

// enquires api calling
export const callFetchEnq = (token) => {
    return async function (dispatch) {
        dispatch(fetchEnqStart())
        await GetEnqApi(token)
            .then((res) => dispatch(fetchEnqSuccess(res.data)))
            .catch((e) => dispatch(fetchEnqFail(e)))
    }
}
export const callAddEnq = (token, data) => {
    return async function (dispatch) {
        dispatch(addEnqStart())
        await PostEnqApi(token, data)
            .then((res) => dispatch(addEnqSuccess(res.data)))
            .catch((e) => dispatch(addEnqFail(e)))
    }
}