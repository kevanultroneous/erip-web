import * as hero from "../actionTypes";

export const heroHomeStart = () => {
  return {
    type: hero.GET_HOME_HERO_SECTION_START,
    loading: true,
  };
};

export const heroHomeSuccess = (data) => {
  return {
    type: hero.GET_HOME_HERO_SECTION_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const heroHomeFail = (err) => {
  return {
    type: hero.GET_HOME_HERO_SECTION_FAIL,
    payload: err,
    loading: false,
  };
};

export const heroHomeByCategoryStart = () => {
  return {
    type: hero.GET_HERO_BY_CATEGORY_START,
    loading: true,
  };
};

export const heroHomeByCategorySuccess = (data) => {
  return {
    type: hero.GET_HERO_BY_CATEGORY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const heroHomeByCategoryFail = (err) => {
  return {
    type: hero.GET_HERO_BY_CATEGORY_FAIL,
    payload: err,
    loading: false,
  };
};

export const heroHomeByBrandsStart = () => {
  return {
    type: hero.GET_HERO_BY_BRANDS_START,
    loading: true,
  };
};

export const heroHomeByBrandsSuccess = (data) => {
  return {
    type: hero.GET_HERO_BY_BRANDS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const heroHomeByBrandsFail = (err) => {
  return {
    type: hero.GET_HERO_BY_BRANDS_FAIL,
    payload: err,
    loading: false,
  };
};

export const heroHomeByModelsStart = () => {
  return {
    type: hero.GET_HERO_BY_MODELS_START,
    loading: true,
  };
};

export const heroHomeByModelsSuccess = (data) => {
  return {
    type: hero.GET_HERO_BY_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const heroHomeByModelsFail = (err) => {
  return {
    type: hero.GET_HERO_BY_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};
