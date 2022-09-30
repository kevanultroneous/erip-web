import {
  GET_CATEGORY_ID_SUCCESS,
  GET_BRAND_ID_SUCCESS,
  GET_MODEL_ID_SUCCESS,
  GET_SEGMENT_ID_SUCCESS,
} from "../../actions/actionTypes";

const idState = {
  brandID: 0,
  categoryID: 0,
  modelID: 0,
  segmentID: 0,
};

export const issueReducer = (state = idState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_ID_SUCCESS:
      return {
        ...state,
        categoryID: payload,
      };
    case GET_BRAND_ID_SUCCESS:
      return {
        ...state,
        brandID: payload,
      };
    case GET_MODEL_ID_SUCCESS:
      return {
        ...state,
        modelID: payload,
      };
    case GET_SEGMENT_ID_SUCCESS:
      return {
        ...state,
        segmentID: payload,
      };
    default:
      return state;
  }
};
