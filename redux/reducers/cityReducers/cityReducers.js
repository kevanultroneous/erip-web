import * as city from "../../actions/actionTypes";

const initialCityState = {
  city: 1,
  error: "",
};

export const cityReducer = (state = initialCityState, { type, payload }) => {
  switch (type) {
    case city.GET_CITY:
      return {
        ...state,
        err: "",
        city: payload,
      };
    case city.GET_CITY_FAIL:
      return {
        ...state,
        err: payload,
        city: 1,
      };

    default:
      return state;
  }
};
