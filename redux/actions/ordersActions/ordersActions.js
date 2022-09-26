import { postOrderReschedule, postOrders } from "api/ordersAPI"
import * as order from "../actionTypes"


export const PostOrderStart = async () => {
    return {
        type: order.ORDERS_START,
        loading: true,
    }
}
export const PostOrderSuccess = async (data) => {
    return {
        type: order.ORDERS_SUCCESS,
        payload: data,
        loading: false,
    }
}
export const PostOrderFail = async (err) => {
    return {
        type: order.ORDERS_FAIL,
        payload: err,
        loading: false,
    }
}

export const callPostOrder = () => {
    return async function (dispatch) {
        dispatch(PostOrderStart())
        postOrders().then().catch()
    }
}
// 
export const PostOrderReschduleStart = async () => {
    return {
        type: order.ORDER_RESCHEDULE_START,
        loading: true,
    }
}
export const PostOrderReschduleSuccess = async () => {
    return {
        type: order.ORDER_RESCHEDULE_SUCCESS,
        loading: false,
    }
}
export const PostOrderReschduleFail = async () => {
    return {
        type: order.ORDER_RESCHEDULE_FAIL,
        loading: false
    }
}

export const callPostOrderReschdule = () => {
    return async function (dispatch) {
        postOrderReschedule().then().catch()
    }
}
// 
export const PostOrderCancelStart = async () => {
    return {
        type: order.ORDERS_CANCEL_START,
        loading: true
    }
}
export const PostOrderCancelSuccess = async () => {
    return {
        type: order.ORDERS_CANCEL_SUCCESS,
        loading: false
    }
}
export const PostOrderCancelFail = async () => {
    return {
        type: order.ORDERS_CANCEL_FAIL,
        loading: false
    }
}

export const callPostOrderCancel = () => {
    return async function (dispatch) {

    }
}
// 
export const PostOrderRatePartnerStart = async () => {
    return {
        type: order.RATE_PARTNER_START,
        loading: true
    }
}
export const PostOrderRatePartnerSuccess = async () => {
    return {
        type: order.RATE_PARTNER_SUCCESS,
        loading: false
    }
}
export const PostOrderRatePartnerFail = async () => {
    return {
        type: order.RATE_PARTNER_FAIL,
        loading: false
    }
}

export const callPostOrderRatePartner = () => {
    return async function (dispatch) {

    }
}
// 
export const PostOrdersReviewStart = async () => {
    return {
        type: order.ORDER_REVIEW_START,
        loading: true
    }
}
export const PostOrdersReviewSuccess = async () => {
    return {
        type: order.ORDER_REVIEW_SUCCESS,
        loading: false
    }
}
export const PostOrdersReviewFail = async () => {
    return {
        type: order.ORDER_REVIEW_FAIL,
        loading: false
    }
}

export const callPostOrderReview = () => {
    return async function (dispatch) {

    }
}
// 
export const PostOrdersFeedbackStart = async () => {
    return {
        type: order.ORDER_FEEDBACK_START,
        loading: true
    }
}
export const PostOrdersFeedbackSuccess = async () => {
    return {
        type: order.ORDER_FEEDBACK_SUCCESS,
        loading: false
    }
}
export const PostOrdersFeedbackFail = async () => {
    return {
        type: order.ORDER_FEEDBACK_FAIL,
        loading: false
    }
}

export const callPostOrdersFeedback = () => {
    return async function (dispatch) {

    }
}
// 
export const orderFetchStart = async () => {
    return {
        type: order.GET_ORDERS_START,
        loading: true
    }
}
export const orderFetchSuccess = async () => {
    return {
        type: order.GET_ORDERS_SUCCESS,
        loading: false
    }
}
export const orderFetchFail = async () => {
    return {
        type: order.GET_ORDERS_FAIL,
        loading: false
    }
}

export const callOrderFetch = () => {
    return async function (dispatch) {

    }
}
// 
export const orderDetailFetchStart = async () => {
    return {
        type: order.GET_ORDERS_DETAILS_START,
        loading: true
    }
}
export const orderDetailFetchSuccess = async () => {
    return {
        type: order.GET_ORDERS_DETAILS_SUCCESS,
        loading: false
    }
}
export const orderDetailFetchFail = async () => {
    return {
        type: order.GET_ORDERS_DETAILS_FAIL,
        loading: false
    }
}

export const callOrderDetailFetch = () => {
    return async function (dispatch) {

    }
}
// 
export const orderCancelResonsFetchStart = async () => {
    return {
        type: order.GET_CANCEL_REASON_USER_START,
        loading: true
    }
}
export const orderCancelResonsFetchSuccess = async () => {
    return {
        type: order.GET_CANCEL_REASON_USER_SUCCESS,
        loading: false
    }
}
export const orderCancelResonsFetchFail = async () => {
    return {
        type: order.GET_CANCEL_REASON_USER_FAIL,
        loading: false
    }
}

export const callOrderCancelReasonFetch = () => {
    return async function (dispatch) {

    }
}
// 
export const orderReviewQnaFetchStart = async () => {
    return {
        type: order.GET_ORDER_REVIEW_QNA_START,
        loading: true
    }
}
export const orderReviewQnaFetchSuccess = async () => {
    return {
        type: order.GET_ORDER_REVIEW_QNA_SUCCESS,
        loading: false
    }
}
export const orderReviewQnaFetchFail = async () => {
    return {
        type: order.GET_ORDER_REVIEW_QNA_FAIL,
        loading: false
    }
}

export const callOrderReviewQnaFetch = () => {
    return async function (dispatch) {

    }
}
// 
export const orderFeedbackQnaFetchStart = async () => {
    return {
        type: order.GET_ORDER_FEEDBACK_QNA_START,
        loading: true
    }
}
export const orderFeedbackQnaFetchSuccess = async () => {
    return {
        type: order.GET_ORDER_FEEDBACK_QNA_SUCCESS,
        loading: false
    }
}
export const orderFeedbackQnaFetchFail = async () => {
    return {
        type: order.ORDER_FEEDBACK_FAIL,
        loading: false
    }
}

export const callOrderFeedbackQnaFetch = () => {
    return async function (dispatch) {

    }
}
// 
export const orderReceiptFetchStart = async () => {
    return {
        type: order.GET_ORDER_RECEIPT_START,
        loading: true
    }
}
export const orderReceiptFetchSuccess = async () => {
    return {
        type: order.GET_ORDER_RECEIPT_SUCCESS,
        loading: false
    }
}
export const orderReceiptFetchFail = async () => {
    return {
        type: order.GET_ORDER_RECEIPT_FAIL,
        loading: false
    }
}

export const callOrderReceiptFetch = () => {
    return async function (dispatch) {

    }
}
// 

