import axios from "axios";
import { API_URL } from "utils/data";

export const getCategoriesByCity = async (cityID) => {
  return await axios
    .get(`${API_URL}api/v1/categories_by_cities?city=${cityID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};
