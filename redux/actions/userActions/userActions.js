import { CheckRegistrationAPI, FinalLoginAPI, SendLoginOtpAPI, SendRegistrationOtpAPI } from "pages/api/api";
import * as user from "../../actions/actionTypes"

// check reg
export const CheckRegActionStart = () => {
    return {
        type: user.REG_CHECK_START,
        loading: true,
    }
}
export const CheckRegActionSuccess = (data) => {
    return {
        type: user.REG_CHECK_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const CheckRegActionFail = (msg) => {
    return {
        type: user.REG_CHECK_FAIL,
        payload: msg,
        loading: false,
    }
}

// reg otp
export const RegotpStart = () => {
    return {
        type: user.REG_OTP_START,
        loading: true,
    }
}
export const RegotpSuccess = (data) => {
    return {
        type: user.REG_OTP_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const RegotpFail = (msg) => {
    return {
        type: user.REG_OTP_FAIL,
        payload: msg,
        loading: false,
    }
}

// user reg
export const UserRegStart = () => {
    return {
        type: user.REG_USER_START,
        loading: true,
    }
}
export const UserRegSuccess = (data) => {
    return {
        type: user.REG_USER_SUCCESS,
        payload: data,
        loading: true,
    }
}
export const UserRegFail = (msg) => {
    return {
        type: user.REG_USER_FAIL,
        payload: msg,
        loading: true,
    }
}

// login otp
export const LoginotpStart = () => {
    return {
        type: user.LOGIN_OTP_START,
        loading: true,
    }
}
export const LoginotpSuccess = (msg) => {
    return {
        type: user.LOGIN_OTP_SUCCESS,
        payload: msg,
        loading: false,
    }
}
export const LoginotpFail = (msg) => {
    return {
        type: user.LOGIN_OTP_FAIL,
        payload: msg,
        loading: false,
    }
}

// login

export const UserLoginStart = () => {
    return {
        type: user.LOGIN_USER_START,
        loading: true,
    }
}
export const UserLoginSuccess = (data) => {
    return {
        type: user.LOGIN_USER_SUCCESS,
        payload: data,
        loading: true,
    }
}
export const UserLoginFail = (msg) => {
    return {
        type: user.LOGIN_USER_FAIL,
        payload: msg,
        loading: true,
    }
}

// suggested 
export const UserActionSuggestions = (msg) => {
    return {
        type: user.USER_ACTION_SUGGESTION,
        payload: msg
    }
}
export const ClearUserdata = () => {
    return {
        type: user.USER_CLEAR,
        payload: null
    }
}
//apis 

export const callUserclear = () => {
    return async function (dispatch) {
        dispatch(ClearUserdata())
    }
}
export const callCheckRegistrationAPI = (ContactNumber) => {
    return async function (dispatch) {
        CheckRegActionStart()
        CheckRegistrationAPI(ContactNumber)
            .then((r) => {
                if (r.data) {
                    dispatch(CheckRegActionSuccess(r.data))
                    if (r.data.success) {
                        if (r.data.mobile_registered) {
                            dispatch(UserActionSuggestions(r.data))
                        } else {
                            dispatch(RegotpStart())
                            SendRegistrationOtpAPI(ContactNumber)
                                .then((response_reg_otp) => {
                                    if (response_reg_otp.data.success) {
                                        dispatch(RegotpSuccess(response_reg_otp.data))
                                    } else {
                                        dispatch(RegotpFail(response_reg_otp.data))
                                    }
                                })
                                .catch((e) => {
                                    dispatch(RegotpFail(e))
                                });
                        }
                    } else {
                        dispatch(CheckRegActionFail(r.data))
                    }
                }
            })
            .catch((e) => {
                dispatch(CheckRegActionFail(e))
            });
    }
}

export const callRegistrationUser = (ContactNumber, RegOtp) => {
    return async function (dispatch) {
        UserRegStart()
        RegisterUserAPI(ContactNumber, RegOtp)
            .then((reg_user) => {
                if (reg_user.data.success) {
                    dispatch(UserRegSuccess(reg_user.data))
                    setRegOtpModal(false);
                } else {
                    dispatch(UserRegFail(reg_user.data))
                }
            })
            .catch((e) =>
                dispatch(UserRegFail(e))
            );
    }
}

export const callSendLoginOTPApi = (ContactNumber) => {
    return async function (dispatch) {
        LoginotpStart()
        SendLoginOtpAPI(ContactNumber)
            .then((otpresponse) => {
                if (otpresponse.data) {
                    if (otpresponse.data.success) {
                        dispatch(LoginotpSuccess(otpresponse.data))
                    } else {
                        dispatch(LoginotpFail(otpresponse.data))
                    }
                }
            })
            .catch((e) => {
                dispatch(LoginotpFail(e))
            });
    }
}

export const callLoginapi = (ContactNumber, Otp) => {
    return async function (dispatch) {
        UserLoginStart()
        FinalLoginAPI(ContactNumber, Otp)
            .then((login_user) => {
                if (login_user.data.success) {
                    dispatch(UserLoginSuccess(login_user.data))
                    localStorage.setItem("token", login_user.data.authorisation.token);
                } else {
                    dispatch(UserLoginFail(login_user.data.message))
                }
            })
            .catch((e) => {
                dispatch(UserLoginFail(e))
            });
    }
}