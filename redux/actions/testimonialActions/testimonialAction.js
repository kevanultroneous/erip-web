import * as testimonials from "../actionTypes";

export const getHomeTestimonials = (data) => {
  return {
    type: testimonials.GET_HOME_TESTIMONIALS_SUCCESS,
    payload: data,
  };
};

export const getHomeTestimonialsFail = (data) => {
  return {
    type: testimonials.GET_HOME_TESTIMONIALS_FAIL,
    payload: data,
  };
};

export const getCategoryTestimonials = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const getCategoryTestimonialsFail = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_CATEGORY_FAIL,
    payload: data,
  };
};

export const getBrandsTestimonials = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_BRANDS_SUCCESS,
    payload: data,
  };
};

export const getBrandsTestimonialsFail = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_BRANDS_FAIL,
    payload: data,
  };
};

export const getModelsTestimonials = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_MODELS_SUCCESS,
    payload: data,
  };
};

export const getModelsTestimonialsFail = (data) => {
  return {
    type: testimonials.GET_TESTIMONIALS_BY_MODELS_FAIL,
    payload: data,
  };
};
