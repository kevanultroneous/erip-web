import * as city from "../actionTypes";

export const getCity = (data) => {
  return {
    type: city.GET_CITY_SUCCESS,
    payload: data,
  };
};

export const getCityFail = (err) => {
  return {
    type: city.GET_CITY_FAIL,
    payload: err,
  };
};
