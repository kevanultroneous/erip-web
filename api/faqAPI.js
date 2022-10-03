import axios from "axios";
import { API_URL } from "utils/data";

export const getFaqsbyCategoryAxios = async (categoryID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

export const getFaqsBYBrandAxios = async (brandID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/faqs_section_by_brand?brand=${brandID}`)
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
        return [];
      });
  } catch (e) {
    console.log(e)
  }
};

export const getFaqsBYModelAxios = async (modelID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/faqs_section_by_model?model=${modelID}`)
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
        return [];
      });
  } catch (e) {
    console.log(e)
  }
};
