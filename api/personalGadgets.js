import axios from "axios";
import { API_URL } from "utils/data";

export const getBrandsByCategory = async (categoryID) => {
  return await axios
    .get(`${API_URL}api/v1/brands_by_category?category=${categoryID}`)
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

export const getModelsByBrand = async (brandID) => {
  return await axios
    .get(`${API_URL}api/v1/models_by_brand?brand=${brandID}`)
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

export const getIssuesByModel = async (modelID) => {
  return await axios
    .get(`${API_URL}api/v1/issues_by_models?model=${modelID}`)
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

export const getIssuesByModelDetails = async (modelID, cityID) => {
  return await axios
    .get(
      `${API_URL}api/v1/issues_by_models_detail?model=${modelID}&city=${cityID}`
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
