import axios from "axios";
import { API_URL } from "utils/data";

export const homeHeroSection = async () => {
  return await axios
    .get(`${API_URL}api/v1/cms/hero_section_home`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const categoryHeroSection = async (categoryID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/hero_section_by_category?category=${categoryID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const brandHeroSection = async (brandID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/hero_section_by_brand?brand=${brandID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const modelHeroSection = async (modelID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/hero_section_by_model?model=${modelID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};
