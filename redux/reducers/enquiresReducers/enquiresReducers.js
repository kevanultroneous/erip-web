import * as enq from "../../actions/actionTypes"
const enqinitstate = {
    enqdata: null,
    actionenqdata: null,
    loading: true
}
export const enquiresReducer = (state = enqinitstate, { type, payload }) => {
    switch (type) {
        case enq.FETCH_ENQ_START:
            return {
                ...state,
                loading: true,
            }
        case enq.FETCH_ENQ_SUCCESS:
            return {
                ...state,
                enqdata: payload,
                loading: false,
            }
        case enq.FETCH_ENQ_FAIL:
            return {
                ...state,
                enqdata: payload,
                loading: false,
            }
        case enq.ADD_ENQ_START:
            return {
                ...state,
                loading: true,
            }
        case enq.ADD_ENQ_SUCCESS:
            return {
                ...state,
                actionenqdata: payload,
                loading: false,
            }
        case enq.ADD_ENQ_FAIL:
            return {
                ...state,
                actionenqdata: payload,
                loading: false,
            }
        default:
            return state
    }
}