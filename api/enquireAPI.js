import axios from "axios"
import { API_URL } from "utils/data"

// get enquiries
export const GetEnqApi = async (token) => {
    try {
        return await axios.get(`${API_URL}api/v1/users/enquiries`, {
            headers: { Authorization: `Bearer ${token}` },
        })
    } catch (e) {
        console.log(e)
    }
}

// post enquiries
export const PostEnqApi = async (token, data) => {
    try {
        return await axios.post(`${API_URL}api/v1/users/enquiries`, data, {
            headers: { Authorization: `Bearer ${token}` },
        })
    } catch (e) {
        console.log(e)
    }
}