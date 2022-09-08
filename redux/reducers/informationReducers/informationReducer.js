import * as info from "../../actions/actionTypes";

const infoInitialState = {
  data: "",
  error: "",
  loading: false,
};

export const infoCategory = (state = infoInitialState, { type, payload }) => {
  switch (type) {
    case info.GET_INFORMATION_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case info.GET_INFORMATION_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        loading: false,
      };
    case info.GET_INFORMATION_BY_CATEGORY_FAIL:
      return {
        ...state,
        data: "",
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const infoBrands = (state = infoInitialState, { type, payload }) => {
  switch (type) {
    case info.GET_INFORMATION_BY_BRANDS_START:
      return {
        ...state,
        loading: true,
      };
    case info.GET_INFORMATION_BY_BRANDS_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        loading: false,
      };
    case info.GET_INFORMATION_BY_BRANDS_FAIL:
      return {
        ...state,
        data: "",
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const infoModels = (state = infoInitialState, { type, payload }) => {
  switch (type) {
    case info.GET_INFORMATION_BY_MODELS_START:
      return {
        ...state,
        loading: true,
      };
    case info.GET_INFORMATION_BY_MODELS_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        loading: false,
      };
    case info.GET_INFORMATION_BY_MODELS_FAIL:
      return {
        ...state,
        data: "",
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
