import axios from "axios";
import { API_URL } from "utils/data";

export const getFaqsbyCategoryAxios = async (categoryID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/faqs_section_by_category?category=${categoryID}`)
    .then((faqData) => {
      if (faqData.status === 200) {
        if (faqData.data.data !== undefined) {
          return faqData.data.data;
        } else {
          return [];
        }
      }
    })
    .catch((err) => {
      return err;
    });
};

export const getFaqsBYBrandAxios = async (brandID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/faqs_section_by_brand?brand=${brandID}`)
    .then((faqData) => {
      if (faqData.status === 200) {
        return faqData.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const getFaqsBYModelAxios = async (modelID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/faqs_section_by_model?model=${modelID}`)
    .then((faqData) => {
      if (faqData.status === 200) {
        return faqData.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};
