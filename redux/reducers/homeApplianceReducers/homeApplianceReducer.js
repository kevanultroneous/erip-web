import * as homeAppliances from "../../actions/actionTypes";

const homeAppliancesInitialState = {
  data: [],
  loading: false,
  error: "",
};

export const homeApplianceReducer = (
  state = homeAppliancesInitialState,
  { type, payload }
) => {
  switch (type) {
    case homeAppliances.GET_HOME_APPLIANCES_START:
      return {
        ...state,
        loading: true,
      };

    case homeAppliances.GET_HOME_APPLIANCES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };

    case homeAppliances.GET_HOME_APPLIANCES_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};

export const homeApplianceModelsReducer = (
  state = homeAppliancesInitialState,
  { type, payload }
) => {
  switch (type) {
    case homeAppliances.GET_HOME_APPLIANCES_MODELS_START:
      return {
        ...state,
        loading: true,
      };

    case homeAppliances.GET_HOME_APPLIANCES_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };

    case homeAppliances.GET_HOME_APPLIANCES_MODELS_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};

export const homeApplianceIssuesReducer = (
  state = homeAppliancesInitialState,
  { type, payload }
) => {
  switch (type) {
    case homeAppliances.GET_HOME_APPLIANCES_ISSUES_START:
      return {
        ...state,
        loading: true,
      };

    case homeAppliances.GET_HOME_APPLIANCES_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };

    case homeAppliances.GET_HOME_APPLIANCES_ISSUES_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};
