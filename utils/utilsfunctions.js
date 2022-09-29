import { getCityFail, getCityStart, getCitySuccess } from "redux/actions/cityActions/cityAction";

export const MatchCity = (cityData, currentCity, dispatch) => {
  for (let k1 = 0; k1 < cityData.length; k1++) {
    dispatch(getCityStart());
    if (
      cityData[k1].loc_city_title.toLowerCase() ==
      currentCity.replace(/\s/g, "").toLowerCase()
    ) {
      let id = cityData[k1].loc_city_id;
      dispatch(getCitySuccess({ city: parseInt(id), name: currentCity }))
      localStorage.setItem("cityid", parseInt(id));
      localStorage.setItem("city", currentCity);
      return true;
    } else {
      dispatch(getCityFail("we are not availble in other location"))
      localStorage.setItem("cityid", 1);
      localStorage.setItem("city", "Bengluru");
      alert("we are not availble in other location");
      return false;
    }
  }
};
