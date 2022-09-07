import axios from "axios";
import { API_URL } from "utils/data";

export const testimonialsHome = async () => {
  return await axios
    .get(`${API_URL}api/v1/cms/testimonials`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const testimonialsByCategory = async (categoryID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/testimonials_by_category?category=${categoryID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const testimonialsByBrands = async (brandID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/testimonials_by_brand?brand=${brandID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const testimonialsByModels = async (modelID) => {
  return await axios
    .get(`${API_URL}api/v1/cms/testimonials_by_model?model=${modelID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};
