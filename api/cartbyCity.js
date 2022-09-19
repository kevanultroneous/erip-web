import axios from "axios";
import { API_URL } from "utils/data";

export const CartByCity = async (token, city) => {
    return await axios.get(
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