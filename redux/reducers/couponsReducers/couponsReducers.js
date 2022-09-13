import * as coupons from "../../actions/actionTypes";
const couponsInitialState = {
  data: null,
  error: "",
  loading: true,
};
export const couponsReducer = (
  state = couponsInitialState,
  { type, payload }
) => {
  switch (type) {
    case coupons.GET_COUPONS_START:
      return {
        ...state,
        loading: true,
      };
    case coupons.GET_COUPONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case coupons.GET_COUPONS_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        error: payload,
      };
    case coupons.APPLY_COUPONS_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedcoupons: payload,
      };
    case coupons.REMOVE_COUPON:
      return {
        ...state,
        loading: false,
        selectedcoupons: null,
      };
    case coupons.APPLY_COUPON_FAIL:
      return {
        ...state,
        loading: false,
        selectedcoupons: null,
      };
    default:
      return state;
  }
};
