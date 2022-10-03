import * as offers from "../../actions/actionTypes";

const offerInitialState = {
  data: [],
  error: "",
  loading: false,
};

export const offerSectionHomeReducer = (
  state = offerInitialState,
  { type, payload }
) => {
  switch (type) {
    case offers.GET_OFFERS_HOME_START:
      return {
        ...state,
        loading: true,
      };
    case offers.GET_OFFERS_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case offers.GET_OFFERS_HOME_FAIL:
      return {
        ...state,
        loading: false,
        data: "",
        error: payload,
      };

    default:
      return state;
  }
};

export const offerSectionCategoryReducer = (
  state = offerInitialState,
  { type, payload }
) => {
  switch (type) {
    case offers.GET_OFFERS_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case offers.GET_OFFERS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case offers.GET_OFFERS_BY_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        data: "",
        error: payload,
      };

    default:
      return state;
  }
};

export const offerSectionBrandReducer = (
  state = offerInitialState,
  { type, payload }
) => {
  switch (type) {
    case offers.GET_OFFERS_BY_BRANDS_START:
      return {
        ...state,
        loading: true,
      };
    case offers.GET_OFFERS_BY_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case offers.GET_OFFERS_BY_BRANDS_FAIL:
      return {
        ...state,
        loading: false,
        data: "",
        error: payload,
      };

    default:
      return state;
  }
};

export const offerSectionModelReducer = (
  state = offerInitialState,
  { type, payload }
) => {
  switch (type) {
    case offers.GET_OFFERS_BY_MODELS_START:
      return {
        ...state,
        loading: true,
      };
    case offers.GET_OFFERS_BY_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case offers.GET_OFFERS_BY_MODELS_FAIL:
      return {
        ...state,
        loading: false,
        data: "",
        error: payload,
      };

    default:
      return state;
  }
};
