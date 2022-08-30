import { useEffect, useState } from "react"
export default function geoLocationDetect({ getAddressByLocation, getCityByLatlngbool }) {
    const [latlng, setLatLng] = useState(null)
    const [addressx, setAddressx] = useState("")
    const [city, setCity] = useState("")
    const [latlngbyadd, setLatLngByAdd] = useState(null)
    const [citybylatlng, setcitybylatlng] = useState("")

    useEffect(() => {
        getLocation()
    }, [])

    useEffect(() => {
        if (getAddressByLocation) {
            console.log("getaddress by location")
            // getLatandLongByAddress(address)
        }
    }, [getAddressByLocation])

    useEffect(() => {
        if (getCityByLatlngbool) {
            console.log("get cityby latlng")
            // getCityByLatLng(latx, laty)
        }
    }, [getCityByLatlngbool])

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        // main
    }

    function showPosition(position) {
        setLatLng({ lat: position.coords.latitude, lng: position.coords.longitude })
        reverseMap(position.coords.latitude, position.coords.longitude);
        // show position
    }

    function reverseMap(lat, lng) {
        var latlng = new google.maps.LatLng(lat, lng);
        var geocoder = (geocoder = new google.maps.Geocoder());
        geocoder.geocode({ latLng: latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    setAddressx(results[1].formatted_address);
                    // return address
                }
            }
        });
    }
    function getLatandLongByAddress(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                setLatLngByAdd({ latitude, longitude })
            }
        });
    }

    function getCityByLatLng(latitude, longitude) {
        var geocoder;
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(latitude, longitude);
        var count, country, state, city;
        geocoder.geocode({ latLng: latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var add = results[0].formatted_address;
                    var value = add.split(",");

                    count = value.length;
                    country = value[count - 1];
                    state = value[count - 2];
                    city = value[count - 3];
                    setCity(city);
                    setcitybylatlng(city)
                    // return city
                } else {
                    alert("address not found");
                }
            } else {
                alert("Geocoder failed due to: " + status);
            }
        });
    }
    return {
        currentlatlng: latlng,
        address: addressx,
        city: city,
        latlngbyadd: latlngbyadd,
        citybylatlng: citybylatlng
    }
}