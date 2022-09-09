import * as cart from "../../actions/actionTypes";
const cartInitialState = {
    data: {},
    error: "",
    loading: false,
};

export const fetchMycartdataByCityReducer = (
    state = cartInitialState,
    { type, payload }
) => {
    switch (type) {
        case cart.FETCH_FROM_CART_START:
            return {
                ...state,
                loading: true,
            };
        case cart.FETCH_FROM_CART_COMPLETE:
            return {
                ...state,
                data: payload,
                error: "",
                loading: false,
            }
        case cart.FETCH_FROM_CART_FAIL:
            return {
                ...state,
                data: {},
                error: payload,
                loading: false
            }
        default:
            return state
    }
}
