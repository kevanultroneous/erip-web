import { GET_CITY_FAIL, GET_CITY_START, GET_CITY_SUCCESS } from "redux/actions/actionTypes";

export const MatchCity = (cityData, currentCity, dispatch) => {
  for (let k1 = 0; k1 < cityData.length; k1++) {
    dispatch({ type: GET_CITY_START });
    if (
      cityData[k1].loc_city_title.toLowerCase() ==
      currentCity.replace(/\s/g, "").toLowerCase()
    ) {
      let id = cityData[k1].loc_city_id;
      dispatch({ type: GET_CITY_SUCCESS, payload: { city: parseInt(id), name: currentCity } })
      localStorage.setItem("cityid", parseInt(id));
      localStorage.setItem("city", currentCity);
      return true;
    } else {
      dispatch({ type: GET_CITY_FAIL, payload: "we are not availble in other location" })
      alert("we are not availble in other location");
      return false;
    }
  }
};
