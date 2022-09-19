import axios from "axios"
import { API_URL } from "utils/data"

export const VerifyCoupons = async (city, category, coupon, amount) => {
    return await axios.get(`${API_URL}api/v1/cms/verify_coupon`, {
        params: {
            city: city,
            category: category,
            coupon: coupon,
            amount: amount
        },
    })
}