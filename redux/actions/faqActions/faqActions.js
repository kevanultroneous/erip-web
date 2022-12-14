import {
  getFaqsBYBrandAxios,
  getFaqsbyCategoryAxios,
  getFaqsBYModelAxios,
} from "api/faqAPI";
import * as faqs from "../actionTypes";

export const getFaqsByCategoryStart = () => {
  return {
    type: faqs.GET_FAQ_BY_CATEGORY_START,
    loading: true,
  };
};

export const getFaqsByCategorySuccess = (data) => {
  console.log("dataFAQCATEGORY", data);
  return {
    type: faqs.GET_FAQ_BY_CATEGORY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getFaqsByCategoryFail = (err) => {
  return {
    type: faqs.GET_FAQ_BY_CATEGORY_FAIL,
    payload: err,
    loading: false,
  };
};

export const getFaqsByBrandsStart = () => {
  return {
    type: faqs.GET_FAQ_BY_BRANDS_START,
    loading: true,
  };
};

export const getFaqsByBrandsSuccess = (data) => {
  return {
    type: faqs.GET_FAQ_BY_BRANDS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getFaqsByBrandsFail = (err) => {
  return {
    type: faqs.GET_FAQ_BY_BRANDS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getFaqsByModelsStart = () => {
  return {
    type: faqs.GET_FAQ_BY_MODELS_START,
    loading: true,
  };
};

export const getFaqsByModelsSuccess = (data) => {
  return {
    type: faqs.GET_FAQ_BY_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getFaqsByModelsFail = (err) => {
  return {
    type: faqs.GET_FAQ_BY_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};

export const callFaqByCategory = (data) => {
  return async function (dispatch) {
    getFaqsByCategoryStart();
    await getFaqsbyCategoryAxios(data)
      .then((response) => {
        dispatch(getFaqsByCategorySuccess(response));
      })
      .catch((err) => {
        dispatch(getFaqsByCategoryFail(err));
      });
  };
};

export const callFaqByBrands = (data) => {
  return async function (dispatch) {
    getFaqsByBrandsStart();
    await getFaqsBYBrandAxios(data)
      .then((response) => {
        dispatch(getFaqsByBrandsSuccess(response));
      })
      .catch((err) => {
        dispatch(getFaqsByBrandsFail(err));
      });
  };
};

export const callFaqByModels = (data) => {
  return async function (dispatch) {
    getFaqsByModelsStart();
    await getFaqsBYModelAxios(data)
      .then((response) => {
        dispatch(getFaqsByModelsSuccess(response));
      })
      .catch((err) => {
        dispatch(getFaqsByModelsFail(err));
      });
  };
};
