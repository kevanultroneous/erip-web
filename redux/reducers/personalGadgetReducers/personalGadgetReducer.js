import * as personalGadgets from "../../actions/actionTypes";

const personalGadgetsInitialState = {
  data: [],
  error: "",
  loading: false,
};

export const getPersonalGadgetsReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.GET_PERSONAL_GADGETS_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.GET_PERSONAL_GADGETS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.GET_PERSONAL_GADGETS_FAIL:
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

export const selectPersonalGadgetsReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.SELECT_PERSONAL_GADGETS_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.SELECT_PERSONAL_GADGETS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.SELECT_PERSONAL_GADGETS_FAIL:
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

export const getPersonalGadgetsBrandsReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.GET_PERSONAL_BRANDS_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.GET_PERSONAL_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.GET_PERSONAL_BRANDS_FAIL:
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

export const selectPersonalGadgetsBrandsReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.SELECT_PERSONAL_BRANDS_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.SELECT_PERSONAL_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.SELECT_PERSONAL_BRANDS_FAIL:
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

export const getPersonalGadgetsModelReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.GET_PERSONAL_MODELS_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.GET_PERSONAL_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.GET_PERSONAL_MODELS_FAIL:
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

export const selectPersonalGadgetsModelReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.SELECT_PERSONAL_MODELS_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.SELECT_PERSONAL_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.SELECT_PERSONAL_MODELS_FAIL:
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

export const getPersonalGadgetsIssueReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.GET_PERSONAL_GADGETS_ISSUES_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.GET_PERSONAL_GADGETS_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.GET_PERSONAL_GADGETS_ISSUES_FAIL:
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

export const selectPersonalGadgetsIssueReducer = (
  state = personalGadgetsInitialState,
  { type, payload }
) => {
  switch (type) {
    case personalGadgets.SELECT_PERSONAL_GADGETS_ISSUES_START:
      return {
        ...state,
        loading: true,
      };
    case personalGadgets.SELECT_PERSONAL_GADGETS_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case personalGadgets.SELECT_PERSONAL_GADGETS_ISSUES_FAIL:
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
