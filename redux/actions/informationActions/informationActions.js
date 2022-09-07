import * as info from "../actionTypes";

export const getInformationByCategory = (data) => {
  return {
    type: info.GET_INFORMATION_BY_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const getInformationByCategoryFail = (err) => {
  return {
    type: info.GET_INFORMATION_BY_CATEGORY_FAIL,
    payload: err,
  };
};

export const getInformationByBrands = (data) => {
  return {
    type: info.GET_INFORMATION_BY_BRANDS_SUCCESS,
    payload: data,
  };
};

export const getInformationByBrandsFail = (err) => {
  return {
    type: info.GET_INFORMATION_BY_BRANDS_FAIL,
    payload: err,
  };
};

export const getInformationByModels = (data) => {
  return {
    type: info.GET_INFORMATION_BY_MODELS_SUCCESS,
    payload: data,
  };
};

export const getInformationByModelsFail = (err) => {
  return {
    type: info.GET_INFORMATION_BY_MODELS_FAIL,
    payload: err,
  };
};
