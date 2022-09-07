import { combineReducers } from "redux";
import faqReducer, {
  faqByBrandReducer,
  faqByCategoryReducer,
  faqByModelReducer,
} from "./faqReducers/faqReducers";

export const rootReducer = combineReducers({
  faqCategory: faqByCategoryReducer,
  faqBrand: faqByBrandReducer,
  faqModel: faqByModelReducer,
});
