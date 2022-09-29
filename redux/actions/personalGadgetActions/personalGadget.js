import { getCategoriesByCity } from "api/categoryByCity";
import {
  getBrandName,
  getBrandsByCategory,
  getCategoryName,
  getIssuesByModel,
  getModelName,
  getModelsByBrand,
} from "api/personalGadgetsApi";
import * as personalGadgets from "../actionTypes";

export const getPersonalGadgetsStart = () => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_START,
    loading: true,
  };
};

export const getPersonalGadgetsSuccess = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getPersonalGadgetsFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_FAIL,
    payload: err,
    loading: false,
  };
};

export const selectPersonalGadgetsStart = () => {
  return {
    type: personalGadgets.SELECT_PERSONAL_GADGETS_START,
    loading: true,
  };
};

export const selectPersonalGadgetsSuccess = (data) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_GADGETS_SUCCESS,
    loading: false,
    payload: data,
  };
};

export const selectPersonalGadgetsFail = (err) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_GADGETS_START,
    loading: false,
    payload: err,
  };
};

export const getPersonalGadgetsBrandStart = () => {
  return {
    type: personalGadgets.GET_PERSONAL_BRANDS_START,
    loading: true,
  };
};

export const getPersonalGadgetsBrandSuccess = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_BRANDS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getPersonalGadgetsBrandFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_BRANDS_FAIL,
    payload: err,
    loading: false,
  };
};

export const selectPersonalGadgetsBrandStart = () => {
  return {
    type: personalGadgets.SELECT_PERSONAL_BRANDS_START,
    loading: true,
  };
};

export const selectPersonalGadgetsBrandSuccess = (data) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_BRANDS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const selectPersonalGadgetsBrandFail = (err) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_BRANDS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getPersonalGadgetsModelStart = () => {
  return {
    type: personalGadgets.GET_PERSONAL_MODELS_START,
    loading: true,
  };
};

export const getPersonalGadgetsModelSuccess = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getPersonalGadgetsModelFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};

export const selectPersonalGadgetsModelStart = () => {
  return {
    type: personalGadgets.SELECT_PERSONAL_MODELS_START,
    loading: true,
  };
};

export const selectPersonalGadgetsModelSuccess = (data) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const selectPersonalGadgetsModelFail = (err) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getPersonalGadgetsIssueStart = () => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_ISSUES_START,
    loading: true,
  };
};

export const getPersonalGadgetsIssueSuccess = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_ISSUES_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getPersonalGadgetssIssueFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_ISSUES_FAIL,
    payload: err,
    loading: false,
  };
};

export const getPersonalGadgetsByCity = (data) => {
  return async function (dispatch) {
    getPersonalGadgetsStart();
    await getCategoriesByCity(data)
      .then((response) => {
        dispatch(getPersonalGadgetsSuccess(response));
      })
      .catch((err) => {
        dispatch(getPersonalGadgetsFail(err));
      });
  };
};

export const getPersonalGadgetsByBrands = (data) => {
  return async function (dispatch) {
    getPersonalGadgetsBrandStart();
    await getBrandsByCategory(data)
      .then((response) => {
        dispatch(getPersonalGadgetsBrandSuccess(response));
      })
      .catch((err) => {
        dispatch(getPersonalGadgetsBrandFail(err));
      });
  };
};

export const getPersonalGadgetsByModels = (data) => {
  return async function (dispatch) {
    getPersonalGadgetsModelStart();
    await getModelsByBrand(data)
      .then((response) => {
        dispatch(getPersonalGadgetsModelStart(response));
      })
      .catch((err) => {
        dispatch(getPersonalGadgetsModelFail(err));
      });
  };
};

export const getPersonalGadgetsByIssues = (data) => {
  return async function (dispatch) {
    getPersonalGadgetsIssueStart();
    await getIssuesByModel(data)
      .then((response) => {
        dispatch(getPersonalGadgetsIssueSuccess(response));
      })
      .catch((err) => {
        dispatch(getPersonalGadgetssIssueFail(err));
      });
  };
};

export const selectCategoryName = (data) => {
  return async function (dispatch) {
    console.log(data);
    selectPersonalGadgetsStart();
    await getCategoryName(data)
      .then((response) => {
        dispatch(selectPersonalGadgetsSuccess(response));
      })
      .catch((err) => {
        dispatch(selectPersonalGadgetsFail(err));
      });
  };
};

export const selectBrandName = (data) => {
  return async function (dispatch) {
    selectPersonalGadgetsBrandStart();
    await getBrandName(data)
      .then((response) => {
        dispatch(selectPersonalGadgetsBrandSuccess(response));
      })
      .catch((err) => {
        dispatch(selectPersonalGadgetsBrandFail(err));
      });
  };
};

export const selectModelName = (data) => {
  return async function (dispatch) {
    selectPersonalGadgetsModelStart();
    await getModelName(data)
      .then((response) => {
        dispatch(selectPersonalGadgetsModelSuccess(response));
      })
      .catch((err) => {
        dispatch(selectPersonalGadgetsModelFail(err));
      });
  };
};
