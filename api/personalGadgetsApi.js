import axios from "axios";
import { API_URL } from "utils/data";

// brands by category
export const getBrandsByCategory = async (categoryID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

// models by brand
export const getModelsByBrand = async (brandID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

// issues by model
export const getIssuesByModel = async (modelID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

// issues by model details
export const getIssuesByModelDetails = async (modelID, cityID) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
};

// get category name
export const getCategoryName = async (cityID, categoryID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/categories_by_cities?city=${cityID}`)
      .then((data) => {
        const category = data.data.data;
        category.forEach((element) => {
          if (element.category_id == categoryID) {
            return element.category_title;
          }
        });
      });
  } catch (e) {
    console.log(e)
  }
};

// get brand name
export const getBrandName = async (categoryID, brandID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/brands_by_category?category=${categoryID}`)
      .then((data) => {
        const model = data.data.data;
        model.forEach((element) => {
          if (element.brand_id == brandID) {
            return element.brand_title;
          }
        });
      });
  } catch (e) {
    console.log(e)
  }
};

// get model name
export const getModelName = async (brandID, modelID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/models_by_brand?brand=${brandID}`)
      .then((data) => {
        const selectedModel = data.data.data;
        if (selectedModel) {
          selectedModel.forEach((model) => {
            if (model.model_id == modelID) {
              return model.model_title;
            }
          });
        }
      });
  } catch (e) {
    console.log(e)
  }
};
