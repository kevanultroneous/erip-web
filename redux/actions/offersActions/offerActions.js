import {
  offerByBrands,
  offerByCategory,
  offerByModels,
  offerHome,
} from "api/offerAPI";
import * as offers from "../actionTypes";

export const offerHomeStart = () => {
  return {
    type: offers.GET_OFFERS_HOME_START,
    loading: true,
  };
};

export const offerHomeSuccess = (data) => {
  return {
    type: offers.GET_OFFERS_HOME_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const offerHomeFail = (err) => {
  return {
    type: offers.GET_OFFERS_HOME_FAIL,
    payload: err,
    loading: false,
  };
};

export const offerHomeByCategoryStart = () => {
  return {
    type: offers.GET_OFFERS_BY_CATEGORY_START,
    loading: true,
  };
};

export const offerHomeByCategorySuccess = (data) => {
  return {
    type: offers.GET_OFFERS_BY_CATEGORY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const offerHomeByCategoryFail = (err) => {
  return {
    type: offers.GET_OFFERS_BY_CATEGORY_FAIL,
    payload: err,
    loading: false,
  };
};

export const offerHomeByBrandsStart = () => {
  return {
    type: offers.GET_OFFERS_BY_BRANDS_START,
    loading: true,
  };
};

export const offerHomeByBrandsSuccess = (data) => {
  return {
    type: offers.GET_OFFERS_BY_BRANDS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const offerHomeByBrandsFail = (err) => {
  return {
    type: offers.GET_OFFERS_BY_BRANDS_FAIL,
    payload: err,
    loading: false,
  };
};

export const offerHomeByModelsStart = () => {
  return {
    type: offers.GET_OFFERS_BY_MODELS_START,
    loading: true,
  };
};

export const offerHomeByModelsSuccess = (data) => {
  return {
    type: offers.GET_OFFERS_BY_MODELS_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const offerHomeByModelsFail = (err) => {
  return {
    type: offers.GET_OFFERS_BY_MODELS_FAIL,
    payload: err,
    loading: false,
  };
};

export const getHomeOffer = (data) => {
  return async function (dispatch) {
    offerHomeStart();
    await offerHome(data)
      .then((response) => {
        dispatch(offerHomeSuccess(response));
      })
      .catch((err) => {
        dispatch(offerHomeFail(err));
      });
  };
};

export const getCategoryOffer = (data) => {
  return async function (dispatch) {
    offerHomeByCategoryStart();
    await offerByCategory(data)
      .then((response) => {
        dispatch(offerHomeByCategorySuccess(response));
      })
      .catch((err) => {
        dispatch(offerHomeByCategoryFail(err));
      });
  };
};

export const getBrandsOffer = (data) => {
  return async function (dispatch) {
    offerHomeByBrandsStart();
    await offerByBrands(data)
      .then((response) => {
        dispatch(offerHomeByBrandsSuccess(response));
      })
      .catch((err) => {
        dispatch(offerHomeByBrandsFail(err));
      });
  };
};

export const getModelsOffer = (data) => {
  return async function (dispatch) {
    offerHomeByModelsStart();
    await offerByModels(data)
      .then((response) => {
        dispatch(offerHomeByModelsSuccess(response));
      })
      .catch((err) => {
        dispatch(offerHomeByModelsFail(err));
      });
  };
};
