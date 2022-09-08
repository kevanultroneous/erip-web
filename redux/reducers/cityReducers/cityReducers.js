import * as city from "../../actions/actionTypes";

const initialCityState = {
  city: 1,
  error: "",
  loading: false,
};

export const cityReducer = (state = initialCityState, { type, payload }) => {
  switch (type) {
    case city.GET_CITY_START:
      return {
        ...state,
        loading: true,
      };
    case city.GET_CITY_SUCCESS:
      return {
        ...state,
        err: "",
        city: payload,
        loading: false,
      };
    case city.GET_CITY_FAIL:
      return {
        ...state,
        err: payload,
        city: 1,
        loading: false,
      };
    default:
      return state;
  }
};
