import { CheckRegistrationAPI, FinalLoginAPI, SendLoginOtpAPI } from "pages/api/api";
import * as user from "../../actions/actionTypes"

// check reg
export const CheckRegActionStart = () => {
    return {
        type: user.REG_CHECK_START,
        loading: true,
    }
}
export const CheckRegActionSuccess = () => {
    return {
        type: user.REG_CHECK_SUCCESS,
        loading: false,
    }
}
export const CheckRegActionFail = () => {
    return {
        type: user.REG_CHECK_FAIL,
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
export const RegotpSuccess = () => {
    return {
        type: user.REG_OTP_SUCCESS,
        loading: false,
    }
}
export const RegotpFail = () => {
    return {
        type: user.REG_OTP_FAIL,
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
export const UserRegSuccess = () => {
    return {
        type: user.REG_USER_SUCCESS,
        loading: true,
    }
}
export const UserRegFail = () => {
    return {
        type: user.REG_USER_FAIL,
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
export const LoginotpSuccess = () => {
    return {
        type: user.LOGIN_OTP_SUCCESS,
        loading: false,
    }
}
export const LoginotpFail = () => {
    return {
        type: user.LOGIN_OTP_FAIL,
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
export const UserLoginSuccess = () => {
    return {
        type: user.LOGIN_USER_SUCCESS,
        loading: true,
    }
}
export const UserLoginFail = () => {
    return {
        type: user.LOGIN_USER_FAIL,
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
//apis 


export const callRegistrationAPI = (ContactNumber) => {
    return async function (dispatch) {
        CheckRegActionStart()
        CheckRegistrationAPI(ContactNumber)
            .then((r) => {
                if (r.data) {
                    CheckRegActionSuccess()
                    if (r.data.success) {
                        if (r.data.mobile_registered) {
                            // login otp send
                            UserActionSuggestions()
                        } else {
                            RegotpStart()
                            SendRegistrationOtpAPI(ContactNumber)
                                .then((response_reg_otp) => {
                                    if (response_reg_otp.data.success) {
                                        alert(response_reg_otp.data.message);
                                        RegotpSuccess()
                                    } else {
                                        alert(response_reg_otp.data.message);
                                        RegotpFail()
                                    }
                                })
                                .catch((e) => {
                                    RegotpFail()
                                    console.log("send reg otp " + e)
                                });
                        }
                    } else {
                        CheckRegActionFail()
                        alert(r.data.message);
                    }
                }
            })
            .catch((e) => {
                CheckRegActionFail()
                console.log("check registration " + e)
            });
    }
}

export const callSendLoginOTPApi = (ContactNumber) => {
    return async function (dispatch) {
        LoginotpStart()
        SendLoginOtpAPI(ContactNumber)
            .then((otpresponse) => {
                if (otpresponse.data) {
                    if (otpresponse.data.success) {
                        LoginotpSuccess()
                        alert(otpresponse.data.message);
                    } else {
                        LoginotpFail()
                        alert(otpresponse.data.message);
                    }
                }
            })
            .catch((e) => {
                LoginotpFail()
                console.log("otp send " + e)
            });
    }
}
export const callLoginapi = () => {
    return async function (dispatch) {
        UserLoginStart()
        FinalLoginAPI(ContactNumber, Otp)
            .then((login_user) => {
                if (login_user.data.success) {
                    // alert(login_user.data.message);
                    UserLoginSuccess()
                    setOtpSending(false);
                    setOtp("");
                    setContactNumber("");
                    setCheckBoxStatus(false);
                    localStorage.setItem("token", login_user.data.authorisation.token);
                } else {
                    UserLoginFail()
                    alert(login_user.data.message);
                }
            })
            .catch((e) => {
                UserLoginFail()
                console.log(e)
            });
    }
}