import * as city from "../actionTypes";

export const getCityStart = () => {
  return {
    type: city.GET_CITY_START,
    loading: true,
  };
};

export const getCitySuccess = (data) => {
  return {
    type: city.GET_CITY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getCityFail = (err) => {
  return {
    type: city.GET_CITY_FAIL,
    payload: err,
    loading: false,
  };
};
