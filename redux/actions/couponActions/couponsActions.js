import axios from "axios";
import { CouponsByCC } from "pages/api/api";
import { API_URL } from "utils/data";
import * as coupons from "../actionTypes";
export const getCouponsccStart = () => {
  return {
    type: coupons.GET_COUPONS_START,
    loading: true,
  };
};
export const getCouponsccSuccess = (data) => {
  return {
    type: coupons.GET_COUPONS_SUCCESS,
    loading: false,
    payload: data,
  };
};
export const getCouponsccFail = (MSG) => {
  return {
    type: coupons.GET_COUPONS_FAIL,
    payload: MSG,
    loading: false,
  };
};
export const setCouponssSuccess = (data) => {
  return {
    type: coupons.APPLY_COUPONS_SUCCESS,
    payload: data,
  };
};
export const removeCoupons = () => {
  return {
    type: coupons.REMOVE_COUPON,
  };
};
export const setCouponsFail = () => {
  return {
    type: coupons.APPLY_COUPON_FAIL,
  };
};

export const callFetchCoupons = (city, category) => {
  return async function (dispatch) {
    dispatch(getCouponsccStart());
    CouponsByCC(city, category)
      .then((response) => dispatch(getCouponsccSuccess(response.data)))
      .catch((e) => getCouponsccFail(e));
  };
};
