import axios from "axios";
import { API_URL } from "utils/data";

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
