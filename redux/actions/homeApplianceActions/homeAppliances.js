import * as homeAppliances from "../actionTypes";

export const getHomeAppliances = (data) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_SUCCESS,
    payload: data,
  };
};

export const getHomeAppliancesFail = (err) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_FAIL,
    payload: err,
  };
};

export const getHomeApplianceModel = (data) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_MODELS_SUCCESS,
    payload: data,
  };
};

export const selectHomeApplianceModel = (data) => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_MODELS_SUCCESS,
    payload: data,
  };
};

export const getHomeApplianceModelFail = (err) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_MODELS_FAIL,
    payload: err,
  };
};

export const getHomeApplianceIssue = (data) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_ISSUES_SUCCESS,
    payload: data,
  };
};

export const selectHomeApplianceIssue = (data) => {
  return {
    type: homeAppliances.SELECT_HOME_APPLIANCES_ISSUES_SUCCESS,
    payload: data,
  };
};

export const getHomeAppliancesIssueFail = (err) => {
  return {
    type: homeAppliances.GET_HOME_APPLIANCES_ISSUES_FAIL,
    payload: err,
  };
};
