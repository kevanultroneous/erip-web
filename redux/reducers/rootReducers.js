import { combineReducers } from "redux";
import { cityReducer } from "./cityReducers/cityReducers";
import faqReducer, {
  faqByBrandReducer,
  faqByCategoryReducer,
  faqByModelReducer,
} from "./faqReducers/faqReducers";
import { issueReducer } from "./issueReducers/issueReducer";

export const rootReducer = combineReducers({
  faqCategory: faqByCategoryReducer,
  faqBrand: faqByBrandReducer,
  faqModel: faqByModelReducer,
  issuePage: issueReducer,
  locationdata: cityReducer
});
