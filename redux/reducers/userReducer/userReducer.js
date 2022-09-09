import * as userauth from "../../actions/actionTypes"
const initialstate = {
    data: {},
    loading: true,
}
export const userAuthenticationReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case userauth.REG_CHECK_START:
            return {
                ...state,
                loading: true,
            };
        case userauth.REG_CHECK_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.REG_CHECK_FAIL:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.REG_OTP_START:
            return {
                ...state,
                loading: true,
            };
        case userauth.REG_OTP_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.REG_OTP_FAIL:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.REG_USER_START:
            return {
                ...state,
                loading: true,
            };
        case userauth.REG_USER_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.REG_USER_FAIL:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.LOGIN_OTP_START:
            return {
                ...state,
                loading: true,
            };
        case userauth.LOGIN_OTP_SUCCESS:
            return {
                ...state,
                data: payload,
                msg: "for login",
                loading: false,
            };
        case userauth.LOGIN_OTP_FAIL:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.LOGIN_USER_START:
            return {
                ...state,
                loading: true,
            };
        case userauth.LOGIN_USER_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.LOGIN_USER_FAIL:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case userauth.USER_CLEAR:
            return {
                ...state,
                data: payload,
                loading: false
            }
        default:
            return state;
    }
}