import * as testimonials from "../../actions/actionTypes";

const testimonialsInitialState = {
  data: [],
  error: "",
  loading: false,
};

export const testimonialByCategory = (
  state = testimonialsInitialState,
  { type, payload }
) => {
  switch (type) {
    case testimonials.GET_TESTIMONIALS_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case testimonials.GET_TESTIMONIALS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case testimonials.GET_TESTIMONIALS_BY_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        data: [],
      };

    default:
      return state;
  }
};

export const testimonialByBrands = (
  state = testimonialsInitialState,
  { type, payload }
) => {
  switch (type) {
    case testimonials.GET_TESTIMONIALS_BY_BRANDS_START:
      return {
        ...state,
        loading: true,
      };
    case testimonials.GET_TESTIMONIALS_BY_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case testimonials.GET_TESTIMONIALS_BY_BRANDS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        data: [],
      };

    default:
      return state;
  }
};

export const testimonialByModels = (
  state = testimonialsInitialState,
  { type, payload }
) => {
  switch (type) {
    case testimonials.GET_TESTIMONIALS_BY_MODELS_START:
      return {
        ...state,
        loading: true,
      };
    case testimonials.GET_TESTIMONIALS_BY_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case testimonials.GET_TESTIMONIALS_BY_MODELS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        data: [],
      };

    default:
      return state;
  }
};
