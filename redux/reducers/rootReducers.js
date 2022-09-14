import { combineReducers } from "redux";
import { addtoCartorRemoveReducer } from "./cartReducers/cartaddremoveReducers";
import { fetchMycartdataByCityReducer } from "./cartReducers/cartReducers";
import { cityReducer } from "./cityReducers/cityReducers";
import { couponsReducer } from "./couponsReducers/couponsReducers";
import faqReducer, {
  faqByBrandReducer,
  faqByCategoryReducer,
  faqByModelReducer,
} from "./faqReducers/faqReducers";
import { issueReducer } from "./issueReducers/issueReducer";
import { mixReducer } from "./mixReducers/mixReducers";
import { profileReducer } from "./profileReducers/profileReducers";
import { userAuthenticationReducer } from "./userReducer/userReducer";

export const rootReducer = combineReducers({
  faqCategory: faqByCategoryReducer,
  faqBrand: faqByBrandReducer,
  faqModel: faqByModelReducer,
  issuePage: issueReducer,
  locationdata: cityReducer,
  cartdata: fetchMycartdataByCityReducer,
  cartaddremove: addtoCartorRemoveReducer,
  userdata: userAuthenticationReducer,
  couponsdata: couponsReducer,
  profile: profileReducer,
  mix: mixReducer
});
