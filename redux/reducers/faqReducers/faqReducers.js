import * as faqs from "../actionTypes";

const faqInitialState = {
  data: [],
  error: "",
};

export const faqByCategoryReducer = (
  state = faqInitialState,
  { type, payload }
) => {
  switch (type) {
    case faqs.GET_FAQ_BY_CATEGORY:
      return {
        ...state,
        data: payload,
        error: "",
      };
    case faqs.SELECT_FAQ_BY_CATEGORY_FAIL:
      return {
        ...state,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};

export const faqByBrandReducer = (
  state = faqInitialState,
  { type, payload }
) => {
  switch (type) {
    case faqs.GET_FAQ_BY_BRANDS:
      return {
        ...state,
        data: payload,
        error: "",
      };
    case faqs.GET_FAQ_BY_BRANDS_FAIL:
      return {
        ...state,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};

export const faqByModelReducer = (
  state = faqInitialState,
  { type, payload }
) => {
  switch (type) {
    case faqs.GET_FAQ_BY_MODELS:
      return {
        ...state,
        data: payload,
        error: "",
      };
    case faqs.GET_FAQ_BY_MODELS_FAIL:
      return {
        ...state,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};
