import axios from "axios"
import { API_URL } from "utils/data"

export const VerifyCoupons = async (token, city, category, coupon, amount) => {
    try {
        return await axios.get(`${API_URL}api/v1/cms/verify_coupon?city=${city}&category=${category}&coupon=${coupon}&amount=${amount}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            })
    } catch (e) {
        console.log(e)
    }
}