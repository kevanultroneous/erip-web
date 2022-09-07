import {
  GET_CATEGORY_ID,
  GET_BRAND_ID,
  GET_MODEL_ID,
} from "../../actions/actionTypes";

const idState = {
  brandID: 0,
  categoryID: 0,
  modelID: 0,
};

export const issueReducer = (state = idState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_ID:
      return {
        ...state,
        categoryID: payload,
      };
    case GET_BRAND_ID:
      return {
        ...state,
        brandID: payload,
      };
    case GET_MODEL_ID:
      return {
        ...state,
        modelID: payload,
      };
    default:
      return state;
  }
};
