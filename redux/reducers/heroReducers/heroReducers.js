import * as hero from "../../actions/actionTypes";

const heroInititalState = {
  data: [],
  error: "",
  loading: false,
};

export const homeHeroReducer = (
  state = heroInititalState,
  { type, payload }
) => {
  switch (type) {
    case hero.GET_HOME_HERO_SECTION_START:
      return {
        ...state,
        loading: true,
      };

    case hero.GET_HOME_HERO_SECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };

    case hero.GET_HOME_HERO_SECTION_FAIL:
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

export const categoryHeroReducer = (
  state = heroInititalState,
  { type, payload }
) => {
  switch (type) {
    case hero.GET_HERO_BY_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };

    case hero.GET_HERO_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };

    case hero.GET_HERO_BY_CATEGORY_FAIL:
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

export const brandsHeroReducer = (
  state = heroInititalState,
  { type, payload }
) => {
  switch (type) {
    case hero.GET_HERO_BY_BRANDS_START:
      return {
        ...state,
        loading: true,
      };

    case hero.GET_HERO_BY_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };

    case hero.GET_HERO_BY_BRANDS_FAIL:
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

export const modelHeroReducer = (
  state = heroInititalState,
  { type, payload }
) => {
  switch (type) {
    case hero.GET_HERO_BY_MODELS_START:
      return {
        ...state,
        loading: true,
      };

    case hero.GET_HERO_BY_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };

    case hero.GET_HERO_BY_BRANDS_FAIL:
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
