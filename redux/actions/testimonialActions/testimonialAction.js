import {
  testimonialsByBrands,
  testimonialsByCategory,
  testimonialsByModels,
} from "api/testimonialAPI";
import * as testimonials from "../actionTypes";

export const getHomeTestimonialsStart = () => {
  return {
    type: testimonials.GET_HOME_TESTIMONIALS_START,
    loading: true,
  };
};

export const getHomeTestimonialsSuccess = (data) => {
  return {
    type: testimonials.GET_HOME_TESTIMONIALS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getHomeTestimonialsFail = (err) => {
  return {
    type: testimonials.GET_HOME_TESTIMONIALS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getCategoryTestimonialsStart = () => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_CATEGORY_START,
    loading: true,
  };
};

export const getCategoryTestimonialsSuccess = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_CATEGORY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getCategoryTestimonialsFail = (err) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_CATEGORY_FAIL,
    payload: err,
    loading: false,
  };
};

export const getBrandsTestimonialsStart = () => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_BRANDS_START,
    loading: true,
  };
};

export const getBrandsTestimonialsSuccess = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_BRANDS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getBrandsTestimonialsFail = (err) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_BRANDS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getModelsTestimonialsStart = () => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_MODELS_START,
    loading: true,
  };
};

export const getModelsTestimonialsSuccess = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const getModelsTestimonialsFail = (err) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getTestimonialsByCategory = (data) => {
  return async function (dispatch) {
    getCategoryTestimonialsStart();
    await testimonialsByCategory(data)
      .then((response) => {
        dispatch(getCategoryTestimonialsSuccess(response));
      })
      .catch((err) => {
        dispatch(getCategoryTestimonialsFail(err));
      });
  };
};

export const getTestimonialsByBrand = (data) => {
  return async function (dispatch) {
    getBrandsTestimonialsStart();

    await testimonialsByBrands(data)
      .then((response) => {
        dispatch(getBrandsTestimonialsSuccess(response));
      })
      .catch((err) => {
        dispatch(getBrandsTestimonialsFail(err));
      });
  };
};

export const getTestimonialsByModel = (data) => {
  return async function (dispatch) {
    getModelsTestimonialsStart();
    await testimonialsByModels(data)
      .then((response) => {
        dispatch(getModelsTestimonialsSuccess(response));
      })
      .catch((err) => {
        dispatch(getModelsTestimonialsFail(err));
      });
  };
};
