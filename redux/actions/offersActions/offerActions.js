import * as offers from "../actionTypes";

export const offerHome = (data) => {
  return {
    type: offers.GET_OFFERS_HOME_SUCCESS,
    payload: data,
  };
};

export const offerHomeFail = (err) => {
  return {
    type: offers.GET_OFFERS_HOME_FAIL,
    payload: err,
  };
};

export const offerHomeByCategory = (data) => {
  return {
    type: offers.GET_OFFERS_BY_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const offerHomeByCategoryFail = (err) => {
  return {
    type: offers.GET_OFFERS_BY_CATEGORY_FAIL,
    payload: err,
  };
};

export const offerHomeByBrands = (data) => {
  return {
    type: offers.GET_OFFERS_BY_BRANDS_SUCCESS,
    payload: data,
  };
};

export const offerHomeByBrandsFail = (err) => {
  return {
    type: offers.GET_OFFERS_BY_BRANDS_FAIL,
    payload: err,
  };
};

export const offerHomeByModels = (data) => {
  return {
    type: offers.GET_OFFERS_BY_MODELS_SUCCESS,
    payload: data,
  };
};

export const offerHomeByModelsFail = (err) => {
  return {
    type: offers.GET_OFFERS_BY_MODELS_FAIL,
    payload: err,
  };
};
