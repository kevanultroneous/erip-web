import axios from "axios";
import { API_URL } from "utils/data";

export const offerHome = async () => {
  return await axios
    .get(`${API_URL}api/v1/cms/offers_section_home`)
    .then((data) => {
      if (data.status === 200) {
        if (data.data.data !== undefined) {
          return data.data.data;
        } else {
          return [];
        }
      }
    })
    .catch((err) => {
      return [];
    });
};

export const offerByCategory = async (categoryID) => {
  return await axios
    .get(
      `${API_URL}api/v1/cms/offers_section_by_category?category=${categoryID}`
    )
    .then((data) => {
      if (data.status === 200) {
        if (data.data.data !== undefined) {
          return data.data.data;
        } else {
          return [];
        }
      }
    })
    .catch((err) => {
      return [];
    });
};

export const offerByBrands = async (brandID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/offers_section_by_brand?brand=${brandID}`)
    .then((data) => {
      if (data.status === 200) {
        if (data.data.data !== undefined) {
          return data.data.data;
        } else {
          return [];
        }
      }
    })
    .catch((err) => {
      return [];
    });
};

export const offerByModels = async (modelID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/offers_section_by_model?model=${modelID}`)
    .then((data) => {
      if (data.status === 200) {
        if (data.data.data !== undefined) {
          return data.data.data;
        } else {
          return [];
        }
      }
    })
    .catch((err) => {
      return [];
    });
};
