import * as hero from "../actionTypes";

export const heroHome = (data) => {
  return {
    type: hero.GET_HOME_HERO_SECTION_SUCCESS,
    payload: data,
  };
};

export const heroHomeFail = (err) => {
  return {
    type: hero.GET_HOME_HERO_SECTION_FAIL,
    payload: err,
  };
};

export const heroHomeByCategory = (data) => {
  return {
    type: hero.GET_HERO_BY_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const heroHomeByCategoryFail = (err) => {
  return {
    type: hero.GET_HERO_BY_CATEGORY_FAIL,
    payload: err,
  };
};

export const heroHomeByBrands = (data) => {
  return {
    type: hero.GET_HERO_BY_BRANDS_SUCCESS,
    payload: data,
  };
};

export const heroHomeByBrandsFail = (err) => {
  return {
    type: hero.GET_HERO_BY_BRANDS_FAIL,
    payload: err,
  };
};

export const heroHomeByModels = (data) => {
  return {
    type: hero.GET_HERO_BY_MODELS_SUCCESS,
    payload: data,
  };
};

export const heroHomeByModelsFail = (err) => {
  return {
    type: hero.GET_HERO_BY_MODELS_FAIL,
    payload: err,
  };
};
