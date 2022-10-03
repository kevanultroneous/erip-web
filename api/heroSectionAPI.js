import axios from "axios";
import { API_URL } from "utils/data";

export const homeHeroSection = async () => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/hero_section_home`)
      .then((data) => {
        if (data.status === 200) {
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

export const categoryHeroSection = async (categoryID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/hero_section_by_category?category=${categoryID}`)
      .then((data) => {
        if (data.status === 200) {
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

export const brandHeroSection = async (brandID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/hero_section_by_brand?brand=${brandID}`)
      .then((data) => {
        if (data.status === 200) {
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

export const modelHeroSection = async (modelID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/hero_section_by_model?model=${modelID}`)
      .then((data) => {
        if (data.status === 200) {
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
