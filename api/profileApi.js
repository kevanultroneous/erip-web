import axios from "axios";
import { API_URL } from "utils/data";

export const MyProfile = async (token) => {
    return await axios.get(`${API_URL}api/v1/users/my_profile`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const AddUserName = async (token, name) => {
    return await axios.post(`${API_URL}api/v1/users/my_profile`, {
        userName: name,
    }, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

export const AddAltEmail = async (token, email) => {
    return await axios.post(`${API_URL}api/v1/users/my_profile`, {
        userEmail: email
    }, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

export const AddAltNumber = async (token, number) => {
    return await axios.post(`${API_URL}api/v1/users/my_profile`, {
        userAddAltData: true,
        userAltMobile: number,
    }, {
        headers: { Authorization: `Bearer ${token}` },
    })
}