import axios from "axios";
import { API_URL } from "utils/data";

// time slot
export const TimeSloatAPIs = async () => {
    try {
        return axios.get(`${API_URL}api/v1/timeslots`);
    } catch (e) {
        console.log(e)
    }
};

// pincodes by city
export const PincodeByCityApi = async (cityid) => {
    try {
        return axios.get(`${API_URL}api/v1/pincodes_by_city`, {
            params: {
                city: cityid,
            },
        });
    } catch (e) {
        console.log(e)
    }
};

// address types
export const AddressTypesApi = async () => {
    try {
        return axios.get(`${API_URL}api/v1/address_types`);
    } catch (e) {
        console.log(e)
    }
};

// navigation search
export const NavSearchApi = async (city, keyword) => {
    try {
        return axios.get(`${API_URL}api/v1/nav_search`,
            {
                params: {
                    city: city,
                    keyword: keyword
                },
            }
        )
    } catch (e) {
        console.log(e)
    }
}