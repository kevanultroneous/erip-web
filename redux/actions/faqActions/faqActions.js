import { getFaqsbyCategoryAxios } from "api/faqAPI";
import * as faqs from "../actionTypes";

export const getFaqsByCategoryStart = () => {
  return {
    type: faqs.GET_FAQ_BY_CATEGORY_START,
    loading: true,
  };
};

export const getFaqsByCategorySuccess = (data) => {
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
        console.log(response);
        dispatch(getFaqsByCategorySuccess(response));
      })
      .catch((err) => {
        dispatch(getFaqsByCategoryFail(err));
      });
  };
};
