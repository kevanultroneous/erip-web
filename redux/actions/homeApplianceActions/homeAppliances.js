import * as homeAppliances from "../actionTypes";

export const getHomeAppliancesStart = () => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_START,
    loading: true,
  };
};

export const getHomeAppliancesSuccess = (data) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getHomeAppliancesFail = (err) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_FAIL,
    payload: err,
    loading: false,
  };
};

export const getHomeApplianceModelStart = () => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_MODELS_START,
    loading: true,
  };
};

export const getHomeApplianceModelSuccess = (data) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getHomeApplianceModelFail = (err) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};

export const selectHomeApplianceModelStart = () => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_MODELS_START,
    loading: true,
  };
};

export const selectHomeApplianceModelSuccess = (data) => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const selectHomeApplianceModelFail = (err) => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_MODELS_FAIL,
    payload: data,
    loading: false,
  };
};

export const getHomeApplianceIssueStart = () => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_ISSUES_START,
    loading: true,
  };
};

export const getHomeApplianceIssueSuccess = (data) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_ISSUES_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getHomeAppliancesIssueFail = (err) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_ISSUES_FAIL,
    payload: err,
    loading: false,
  };
};

export const selectHomeApplianceIssueStart = () => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_ISSUES_SUCCESS,
    loading: true,
  };
};

export const selectHomeApplianceIssueSucces = (data) => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_ISSUES_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const selectHomeApplianceIssueFail = (data) => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_ISSUES_FAIL,
    payload: data,
    loading: false,
  };
};
