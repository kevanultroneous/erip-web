import * as faqs from "../actionTypes";

export const getFaqsByCategory = (data) => {
  return {
    type: faqs.GET_FAQ_BY_CATEGORY,
    payload: data,
  };
};

export const getFaqsByCategoryFail = (err) => {
  return {
    type: faqs.GET_FAQ_BY_CATEGORY_FAIL,
    payload: err,
  };
};

export const getFaqsByBrands = (data) => {
  return {
    type: faqs.GET_FAQ_BY_BRANDS,
    payload: data,
  };
};

export const getFaqsByBrandsFail = (err) => {
  return {
    type: faqs.GET_FAQ_BY_BRANDS_FAIL,
    payload: err,
  };
};

export const getFaqsByModels = (data) => {
  return {
    type: faqs.GET_FAQ_BY_MODELS,
    payload: data,
  };
};

export const getFaqsByModelsFail = (err) => {
  return {
    type: faqs.GET_FAQ_BY_MODELS_FAIL,
    payload: err,
  };
};
