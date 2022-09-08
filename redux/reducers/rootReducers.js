import { combineReducers } from "redux";
import { cityReducer } from "./cityReducers/cityReducers";
import {
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
  testimonialByBrandsReducer,
  testimonialByCategoryReducer,
  testimonialByModelsReducer,
} from "./testimonialReducers/testimonialReducer";

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
});
