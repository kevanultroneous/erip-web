import * as profile from "../../actions/actionTypes"
const profileInitstate = {
    profile: null,
    loading: true,
    usernameaction: null,
    usernameError: "",
    altemail: null,
    altemailError: "",
    altnum: null,
    altnumError: "",
    error: "",
}
export const profileReducer = (state = profileInitstate, { type, payload }) => {
    switch (type) {
        case profile.PROFILE_FETCH_START:
            return {
                ...state,
                loading: true,
            }
        case profile.PROFILE_FETCH_SUCCESS:
            return {
                ...state,
                profile: payload,
                loading: false,
            }
        case profile.PROFILE_FETCH_FAIL:
            return {
                ...state,
                profile: null,
                error: payload,
                loading: false,
            }
        case profile.ADD_USERNAME_START:
            return {
                ...state,
                loading: true,
            }
        case profile.ADD_USERNAME_SUCCESS:
            return {
                ...state,
                usernameaction: payload,
                loading: false,
            }
        case profile.ADD_USERNAME_FAIL:
            return {
                ...state,
                usernameError: payload,
                loading: false,
            }
        case profile.ADD_ALT_EMAIL_START:
            return {
                ...state,
                loading: true,
            }
        case profile.ADD_ALT_EMAIL_SUCCESS:
            return {
                ...state,
                altemail: payload,
                loading: false,
            }
        case profile.ADD_ALT_EMAIL_FAIL:
            return {
                ...state,
                altemailError: payload,
                loading: false,
            }
        case profile.ADD_ALT_NUM_START:
            return {
                ...state,
                loading: true,
            }
        case profile.ADD_ALT_NUM_SUCCESS:
            return {
                ...state,
                altnum: payload,
                loading: false,
            }
        case profile.ADD_ALT_NUM_FAIL:
            return {
                ...state,
                altnumError: payload,
                loading: false,
            }
        default:
            return state;
    }
}