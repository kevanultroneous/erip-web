import axios from "axios";
import { API_URL } from "utils/data";

export const infoByCategory = async (categoryID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/info_section_by_category?category=${categoryID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const infoByBrands = async (brandID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/info_section_by_brand?brand=${brandID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const infoByModels = async (modelID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/info_section_by_model?model=${modelID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};
