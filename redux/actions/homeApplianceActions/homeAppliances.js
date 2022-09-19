import { getCategoriesByCity } from "api/categoryByCity";
import { getIssuesBySegments, getSegmentByCategory } from "api/homeAppliances";
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

export const getHomeAppliance = (data) => {
  return async function (dispatch) {
    getHomeAppliancesStart();
    await getCategoriesByCity(data)
      .then((response) => {
        dispatch(getHomeAppliancesSuccess(response));
      })
      .catch((err) => {
        dispatch(getHomeAppliancesFail(err));
      });
  };
};

export const getHomeApplianceModel = (data) => {
  return async function (dispatch) {
    getHomeApplianceModelStart();
    await getSegmentByCategory(data)
      .then((response) => {
        dispatch(getHomeApplianceModelSuccess(response));
      })
      .catch((err) => {
        dispatch(getHomeApplianceModelFail(err));
      });
  };
};

export const getHomeApplianceIssue = (data) => {
  return async function (dispatch) {
    getHomeApplianceIssueStart();
    await getIssuesBySegments(data)
      .then((response) => {
        dispatch(getHomeApplianceIssueSuccess(response));
      })
      .catch((err) => {
        dispatch(getHomeAppliancesIssueFail(err));
      });
  };
};
