import * as userauth from "../../actions/actionTypes";

const initialstate = {
  data: 0,
  blank: true,
  loading: false,
};
export const userAuthenticationReducer = (
  state = initialstate,
  { type, payload }
) => {
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
        process: 0.1,
        msg: "on reg check success",
        loading: false,
        blank: false,
      };
    case userauth.REG_CHECK_FAIL:
      return {
        ...state,
        data: payload,
        process: 0.2,
        msg: "on reg check fail",
        loading: false,
        blank: false,
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
        msg: "on reg otp success",
        process: 1.1,
        loading: false,
        blank: false,
      };
    case userauth.REG_OTP_FAIL:
      return {
        ...state,
        data: payload,
        msg: "on reg otp fail",
        process: 1.2,
        loading: false,
        blank: false,
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
        process: 2.1,
        msg: "on reg user success",
        loading: false,
        blank: false,
      };
    case userauth.REG_USER_FAIL:
      return {
        ...state,
        data: payload,
        process: 2.2,
        msg: "on reg user fail",
        loading: false,
        blank: false,
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
        process: 3.1,
        msg: "on login otp success",
        loading: false,
        blank: false,
      };
    case userauth.LOGIN_OTP_FAIL:
      return {
        ...state,
        data: payload,
        process: 3.2,
        msg: "on login otp fail",
        loading: false,
        blank: false,
      };
    case userauth.LOGIN_USER_START:
      return {
        ...state,
        loading: true,
      };
    case userauth.LOGIN_USER_SUCCESS:
      return {
        ...state,
        data: 0,
        useraccess: payload,
        process: 4.1,
        msg: "on login user success",
        loading: false,
        blank: false,
      };
    case userauth.LOGIN_USER_FAIL:
      return {
        ...state,
        data: payload,
        process: 4.2,
        msg: "on login user fail",
        loading: false,
        blank: false,
      };
    case userauth.USER_CLEAR:
      return {
        ...state,
        data: payload,
        loading: false,
        blank: true,
      };
    default:
      return state;
  }
};
