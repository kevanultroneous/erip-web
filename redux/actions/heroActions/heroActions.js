import {
  brandHeroSection,
  categoryHeroSection,
  homeHeroSection,
  modelHeroSection,
} from "api/heroSectionAPI";
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

export const getHomeHero = (data) => {
  return async function (dispatch) {
    heroHomeStart();
    await homeHeroSection(data)
      .then((response) => {
        dispatch(heroHomeSuccess(response));
      })
      .catch((err) => {
        dispatch(heroHomeFail(err));
      });
  };
};

export const getCategoryHero = (data) => {
  return async function (dispatch) {
    heroHomeByCategoryStart();
    await categoryHeroSection(data)
      .then((response) => {
        dispatch(heroHomeByCategorySuccess(response));
      })
      .catch((err) => {
        dispatch(heroHomeByCategoryFail(err));
      });
  };
};

export const getBrandsHero = (data) => {
  return async function (dispatch) {
    heroHomeByBrandsStart();
    await brandHeroSection(data)
      .then((response) => {
        dispatch(heroHomeByBrandsSuccess(response));
      })
      .catch((err) => {
        dispatch(heroHomeByBrandsFail(err));
      });
  };
};

export const getModelHero = (data) => {
  return async function (dispatch) {
    heroHomeByModelsStart();
    await modelHeroSection(data)
      .then((response) => {
        dispatch(heroHomeByModelsSuccess(response));
      })
      .catch((err) => {
        dispatch(heroHomeByModelsFail(err));
      });
  };
};
