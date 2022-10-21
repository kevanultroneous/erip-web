import axios from "axios";
import { API_URL } from "utils/data";

// get categories by city
export const getCategoriesByCity = async (cityID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/categories_by_cities?city=${cityID}`)
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
