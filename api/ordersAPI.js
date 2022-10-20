import axios from "axios"
import { API_URL } from "utils/data"

// orders
export const postOrders = (token, data) => {
    return axios.post(`${API_URL}api/v1/users/orders`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

// order reschedule
export const postOrderReschedule = (token, data) => {
    return axios.post(`${API_URL}api/v1/users/orders_reschedule`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

// order cancel
export const postOrdersCancel = (token, data) => {
    return axios.post(`${API_URL}api/v1/users/orders_cancel`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

// order rate partner
export const postOrderRatePartner = (token, data) => {
    return axios.post(`${API_URL}api/v1/users/orders_rate_partner`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

// order review
export const postOrderReview = (token, data) => {
    return axios.post(`${API_URL}api/v1/users/orders_review`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

// order feedback
export const postOrderFeedback = (token, data) => {
    return axios.post(`${API_URL}api/v1/users/orders_feedback`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
}
// get order
export const getOrders = async (token) => {
    return await axios.get(`${API_URL}api/v1/users/orders`, {
        headers: { Authorization: `Bearer ${token}` },
    })
}

// get order details
export const getOrdersDetails = async (token, order) => {
    return await axios.get(
        `${API_URL}api/v1/users/orders?order=${order}`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    )
}

// order cancel reason
export const getOrderCancelReasonUser = async () => {
    return await axios.get(`${API_URL}api/v1/order_cancel_reasons_user`)
}

// order review qna
export const getOrderReviewQna = async (token, order) => {
    return await axios.get(`${API_URL}api/v1/users/order_review_qna`,
        {
            headers: { Authorization: `Bearer ${token}` },
        },
        {
            params: {
                order: order,
            },
        },)
}

// feedback
export const getFeedbackQna = async (token, order, category) => {
    return await axios.get(`${API_URL}api/v1/users/order_feedback_qna`,
        {
            headers: { Authorization: `Bearer ${token}` },
        },
        {
            params: {
                order: order,
                category: category
            },
        },
    )
}

// order receipt
export const getOrderReceipt = async (token, order) => {
    return await axios.get(`${API_URL}api/v1/users/order_receipt?order=${order}`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    )
}