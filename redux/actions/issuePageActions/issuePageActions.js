import {
  GET_CATEGORY_ID_SUCCESS,
  GET_BRAND_ID_SUCCESS,
  GET_MODEL_ID_SUCCESS,
  GET_SEGMENT_ID_SUCCESS,
} from "../actionTypes";

export const selectCategory = (data) => {
  return {
    type: GET_CATEGORY_ID_SUCCESS,
    payload: data,
  };
};

export const selectBrands = (data) => {
  return {
    type: GET_BRAND_ID_SUCCESS,
    payload: data,
  };
};

export const selectModels = (data) => {
  return {
    type: GET_MODEL_ID_SUCCESS,
    payload: data,
  };
};

export const selectSegments = (data) => {
  return {
    type: GET_SEGMENT_ID_SUCCESS,
    payload: data,
  };
};
