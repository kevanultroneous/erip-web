import axios from "axios";
import { API_URL } from "utils/data";

// home offer
export const offerHome = async () => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

// offer by category
export const offerByCategory = async (categoryID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

// offer by brands
export const offerByBrands = async (brandID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

// offer by models
export const offerByModels = async (modelID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};
