import { AddAltEmail, AddAltNumber, AddUserName, MyProfile } from "api/profileApi"
import * as profile from "../actionTypes"
export const getProfileStart = () => {
    return {
        type: profile.PROFILE_FETCH_START,
        loading: true,
    }
}
export const getProfileSuccess = (data) => {
    return {
        type: profile.PROFILE_FETCH_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const getProfileFail = (msg) => {
    return {
        type: profile.PROFILE_FETCH_START,
        payload: msg,
        loading: false,
    }
}

export const setUsernameUpdStart = () => {
    return {
        type: profile.ADD_USERNAME_START,
        loading: true,
    }
}
export const setUsernameUpdSuccess = (data) => {
    return {
        type: profile.ADD_USERNAME_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const setUsernameUpdFail = (msg) => {
    return {
        type: profile.ADD_USERNAME_FAIL,
        payload: msg,
        loading: false,
    }
}

export const setAltEmailStart = () => {
    return {
        type: profile.ADD_ALT_EMAIL_START,
        loading: true,
    }
}
export const setAltEmailSuccess = (data) => {
    return {
        type: profile.ADD_ALT_EMAIL_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const setAltEmailFail = (msg) => {
    return {
        type: profile.ADD_ALT_EMAIL_FAIL,
        payload: msg,
        loading: false,
    }
}

export const setAltNumberStart = () => {
    return {
        type: profile.ADD_ALT_NUM_START,
        loading: true,
    }
}
export const setAltNumberSuccess = (data) => {
    return {
        type: profile.ADD_ALT_NUM_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const setAltNumberFail = (msg) => {
    return {
        type: profile.ADD_ALT_NUM_FAIL,
        payload: msg,
        loading: false,
    }
}

export const callFetchProfile = (token) => {
    return async function (dispatch) {
        dispatch(getProfileStart())
        MyProfile(token)
            .then((response) => dispatch(getProfileSuccess(response.data)))
            .catch(e => dispatch(getProfileFail(e)))
    }
}
export const callUpdateName = (token, name) => {
    return async function (dispatch) {
        dispatch(setUsernameUpdStart())
        AddUserName(token, name)
            .then((response) => dispatch(setUsernameUpdSuccess(response.data)))
            .catch(e => dispatch(setUsernameUpdFail(e)))
    }
}
export const callUpdateEmail = (token, email) => {
    return async function (dispatch) {
        dispatch(setAltEmailStart())
        AddAltEmail(token, email)
            .then((response) => dispatch(setAltEmailSuccess(response.data)))
            .catch(e => dispatch(setAltEmailFail(e)))
    }
}
export const callUpdateNumber = (token, number) => {
    return async function (dispatch) {
        dispatch(setAltNumberStart())
        AddAltNumber(token, number)
            .then((response) => dispatch(setAltNumberSuccess(response.data)))
            .catch(e => dispatch(setAltNumberFail(e)))
    }
}