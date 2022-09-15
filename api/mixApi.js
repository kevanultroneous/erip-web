import axios from "axios";
import { API_URL } from "utils/data";

export const TimeSloatAPIs = () => {
    return axios.get(`${API_URL}api/v1/timeslots`);
};
export const PincodeByCityApi = (cityid) => {
    return axios.get(`${API_URL}api/v1/pincodes_by_city`, {
        params: {
            city: cityid,
        },
    });
};
export const AddressTypesApi = () => {
    return axios.get(`${API_URL}api/v1/address_types`);
};
export const NavSearchApi = (city, keyword) => {
    return axios.get(`${API_URL}api/v1/nav_search`,
        {
            params: {
                city: city,
                keyword: keyword
            },
        }
    )
}