import axios from "axios";
import { API_URL } from "utils/data";

export const CartByCity = (token, city) => {
    return axios.get(
        `${API_URL}api/v1/users/my_cart`,
        {
            headers: { Authorization: `Bearer ${token}` },
        },
        {
            params: {
                city: city,
            },
        }
    );
};