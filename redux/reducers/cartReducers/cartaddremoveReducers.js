import * as cart from "../../actions/actionTypes";

const addtocartState = {
    data: {},
    error: "",
    loading: false,
}
export const addtoCartorRemoveReducer = (state = addtocartState, { type, payload }) => {
    switch (type) {
        case cart.ADD_OR_REMOVE_CART_START:
            return {
                ...state,
                loading: true,
            }
        case cart.ADD_OR_REMOVE_CART_SUCCESS:
            return {
                ...state,
                data: payload,
                error: "",
                loading: false
            }
        case cart.ADD_OR_REMOVE_CART_FAIL:
            return {
                ...state,
                data: {},
                error: payload,
                loading: false,
            }
        default:
            return state
    }
}