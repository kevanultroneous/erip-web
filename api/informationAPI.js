import axios from "axios";
import { API_URL } from "utils/data";

// get info by category
export const infoByCategory = async (categoryID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/info_section_by_category?category=${categoryID}`)
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
  } catch (e) {
    console.log(e)
  }
};

// get info by brands
export const infoByBrands = async (brandID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/info_section_by_brand?brand=${brandID}`)
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
  } catch (e) {
    console.log(e)
  }
};

// get info by models
export const infoByModels = async (modelID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/cms/info_section_by_model?model=${modelID}`)
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
  } catch (e) {
    console.log(e)
  }
};
