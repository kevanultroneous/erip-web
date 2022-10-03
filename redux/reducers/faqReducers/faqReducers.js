import * as faqs from "../../actions/actionTypes";

const faqInitialState = {
  data: [],
  error: "",
  loading: false,
};

export const faqByCategoryReducer = (
  state = faqInitialState,
  { type, payload }
) => {
  switch (type) {
    case faqs.GET_FAQ_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case faqs.GET_FAQ_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case faqs.GET_FAQ_BY_CATEGORY_FAIL:
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

export const faqByBrandReducer = (
  state = faqInitialState,
  { type, payload }
) => {
  switch (type) {
    case faqs.GET_FAQ_BY_BRANDS_START:
      return {
        ...state,
        loading: true,
      };
    case faqs.GET_FAQ_BY_BRANDS_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        loading: false,
      };
    case faqs.GET_FAQ_BY_BRANDS_FAIL:
      return {
        ...state,
        data: [],
        error: payload,
        loading: false,
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
    case faqs.GET_FAQ_BY_MODELS_START:
      return {
        ...state,
        loading: true,
      };
    case faqs.GET_FAQ_BY_MODELS_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        loading: false,
      };
    case faqs.GET_FAQ_BY_MODELS_FAIL:
      return {
        ...state,
        data: [],
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
