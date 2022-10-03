import { infoByBrands, infoByCategory, infoByModels } from "api/informationAPI";
import * as info from "../actionTypes";

export const getInformationByCategoryStart = () => {
  return {
    type: info.GET_INFORMATION_BY_CATEGORY_START,
    loading: true,
  };
};

export const getInformationByCategorySuccess = (data) => {
  return {
    type: info.GET_INFORMATION_BY_CATEGORY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getInformationByCategoryFail = (err) => {
  return {
    type: info.GET_INFORMATION_BY_CATEGORY_FAIL,
    payload: err,
    loading: false,
  };
};

export const getInformationByBrandsStart = () => {
  return {
    type: info.GET_INFORMATION_BY_BRANDS_START,
    loading: true,
  };
};

export const getInformationByBrandsSuccess = (data) => {
  return {
    type: info.GET_INFORMATION_BY_BRANDS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getInformationByBrandsFail = (err) => {
  return {
    type: info.GET_INFORMATION_BY_BRANDS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getInformationByModelsStart = () => {
  return {
    type: info.GET_INFORMATION_BY_MODELS_START,
    loading: true,
  };
};

export const getInformationByModelsSuccess = (data) => {
  return {
    type: info.GET_INFORMATION_BY_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getInformationByModelsFail = (err) => {
  return {
    type: info.GET_INFORMATION_BY_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getInformationByCategory = (data) => {
  return async function (dispatch) {
    getInformationByCategoryStart();
    await infoByCategory(data)
      .then((response) => {
        dispatch(getInformationByCategorySuccess(response));
      })
      .catch((err) => {
        dispatch(getInformationByCategoryFail(err));
      });
  };
};

export const getInformationByBrands = (data) => {
  return async function (dispatch) {
    getInformationByBrandsStart();
    await infoByBrands(data)
      .then((response) => {
        dispatch(getInformationByBrandsSuccess(response));
      })
      .catch((err) => {
        dispatch(getInformationByBrandsFail(err));
      });
  };
};

export const getInformationByModels = (data) => {
  return async function (dispatch) {
    getInformationByModelsStart();
    await infoByModels(data)
      .then((response) => {
        dispatch(getInformationByModelsSuccess(data));
      })
      .catch((err) => {
        dispatch(getInformationByModelsFail(err));
      });
  };
};
