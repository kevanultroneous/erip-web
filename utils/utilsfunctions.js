export const MatchCity = (cityData, currentCity) => {
    for (let k1 = 0; k1 < cityData.length; k1++) {
        if (
            cityData[k1].loc_city_title.toLowerCase() ==
            currentCity.replace(/\s/g, "").toLowerCase()
        ) {
            alert("yes we are available in" + currentCity);
        } else {
            alert("we are not availble in other location");
        }
    }
};


