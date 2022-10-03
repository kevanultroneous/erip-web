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
import {
  brandsHeroReducer,
  categoryHeroReducer,
  homeHeroReducer,
  modelHeroReducer,
} from "./heroReducers/heroReducers";
import {
  homeApplianceIssuesReducer,
  homeApplianceModelsReducer,
  homeApplianceReducer,
} from "./homeApplianceReducers/homeApplianceReducer";
import {
  infoBrandsReducer,
  infoCategoryReducer,
  infoModelsReducer,
} from "./informationReducers/informationReducer";
import { issueReducer } from "./issueReducers/issueReducer";
import {
  offerSectionBrandReducer,
  offerSectionCategoryReducer,
  offerSectionHomeReducer,
  offerSectionModelReducer,
} from "./offersReducers/offerReducer";
import {
  getPersonalGadgetsBrandsReducer,
  getPersonalGadgetsIssueReducer,
  getPersonalGadgetsModelReducer,
  getPersonalGadgetsReducer,
  selectPersonalGadgetsBrandsReducer,
  selectPersonalGadgetsModelReducer,
  selectPersonalGadgetsReducer,
} from "./personalGadgetReducers/personalGadgetReducer";
import {
  testimonialByBrandsReducer,
  testimonialByCategoryReducer,
  testimonialByModelsReducer,
} from "./testimonialReducers/testimonialReducer";
import { mixReducer } from "./mixReducers/mixReducers";
import { profileReducer } from "./profileReducers/profileReducers";
import { userAuthenticationReducer } from "./userReducer/userReducer";
import orderReducer from "./orderReducers/orderReducer";
import enquiresReducer from "./enquiresReducers/enquiresReducers";

export const rootReducer = combineReducers({
  locationdata: cityReducer,
  issuePage: issueReducer,
  faqCategory: faqByCategoryReducer,
  faqBrand: faqByBrandReducer,
  faqModel: faqByModelReducer,
  testimonialCategory: testimonialByCategoryReducer,
  testimonialBrands: testimonialByBrandsReducer,
  testimonialModels: testimonialByModelsReducer,
  heroHome: homeHeroReducer,
  heroCategory: categoryHeroReducer,
  heroBrands: brandsHeroReducer,
  heroModels: modelHeroReducer,
  homeAppliances: homeApplianceReducer,
  homeAppliancesModel: homeApplianceModelsReducer,
  homeAppliancesIssues: homeApplianceIssuesReducer,
  informationCategory: infoCategoryReducer,
  informationBrands: infoBrandsReducer,
  informationModels: infoModelsReducer,
  offerHome: offerSectionHomeReducer,
  offerCategory: offerSectionCategoryReducer,
  offerBrands: offerSectionBrandReducer,
  offerModels: offerSectionModelReducer,
  cartdata: fetchMycartdataByCityReducer,
  cartaddremove: addtoCartorRemoveReducer,
  userdata: userAuthenticationReducer,
  couponsdata: couponsReducer,
  personalGadget: getPersonalGadgetsReducer,
  personalGadgetBrands: getPersonalGadgetsBrandsReducer,
  personalGadgetModels: getPersonalGadgetsModelReducer,
  personalGadgetIssues: getPersonalGadgetsIssueReducer,
  categoryName: selectPersonalGadgetsReducer,
  brandName: selectPersonalGadgetsBrandsReducer,
  modelName: selectPersonalGadgetsModelReducer,
  profile: profileReducer,
  enquires: enquiresReducer,
  mix: mixReducer,
});
