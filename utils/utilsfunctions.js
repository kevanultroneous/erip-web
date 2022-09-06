export const MatchCity = (cityData, currentCity) => {
    for (let k1 = 0; k1 < cityData.length; k1++) {
        if (
            cityData[k1].loc_city_title.toLowerCase() ==
            currentCity.replace(/\s/g, "").toLowerCase()
        ) {
            let id = cityData[k1].loc_city_id
            localStorage.setItem("cityid", id)
            localStorage.setItem("city", currentCity)
            return true
        } else {
            alert("we are not availble in other location");
            return false
        }
    }
};


