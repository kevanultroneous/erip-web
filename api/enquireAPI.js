import axios from "axios"
import { API_URL } from "utils/data"

export const GetEnqApi = async (token) => {
    return await axios.get(`${API_URL}api/v1/users/enquiries`, {
        headers: { Authorization: `Bearer ${token}` },
    })
}
export const PostEnqApi = async (token, data) => {
    return await axios.post(`${API_URL}api/v1/users/enquiries`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
}