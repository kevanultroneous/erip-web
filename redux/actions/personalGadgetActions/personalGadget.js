import * as personalGadgets from "../actionTypes";

export const getPersonalGadgets = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_SUCCESS,
    payload: data,
  };
};

export const getPersonalGadgetsFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_FAIL,
    payload: err,
  };
};

export const getPersonalGadgetsBrand = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_BRANDS_SUCCESS,
    payload: data,
  };
};

export const selectPersonalGadgetsBrand = (data) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_BRANDS_SUCCESS,
    payload: data,
  };
};

export const getPersonalGadgetsBrandFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_BRANDS_FAIL,
    payload: err,
  };
};

export const getPersonalGadgetsModel = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_MODELS_SUCCESS,
    payload: data,
  };
};

export const selectPersonalGadgetsModel = (data) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_MODELS_SUCCESS,
    payload: data,
  };
};

export const getPersonalGadgetsModelFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_MODELS_FAIL,
    payload: err,
  };
};

export const getPersonalGadgetsIssue = (data) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_ISSUES_SUCCESS,
    payload: data,
  };
};

export const selectPersonalGadgetsIssue = (data) => {
  return {
    type: personalGadgets.SELECT_PERSONAL_GADGETS_ISSUES_SUCCESS,
    payload: data,
  };
};

export const getPersonalGadgetssIssueFail = (err) => {
  return {
    type: personalGadgets.GET_PERSONAL_GADGETS_ISSUES_FAIL,
    payload: err,
  };
};
