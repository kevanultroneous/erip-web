import { getCategoriesByCity } from "api/categoryByCity";
import {
  getBrandsByCategory,
  getIssuesByModel,
  getModelsByBrand,
} from "api/personalGadgets";
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

export const getPersonalGdgetsByIssues = (data) => {
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
