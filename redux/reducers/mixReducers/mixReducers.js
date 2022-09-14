import * as mix from "../../actions/actionTypes"

const mixInitState = {
    timesloat: null,
    timesloatErr: "",
    pincodebycity: null,
    pincodebyErr: "",
    addresstype: null,
    addresstypeErr: "",
    navsearch: null,
    navsearchErr: "",
    loading: true,
}

export const mixReducer = (state = mixInitState, { type, payload }) => {
    switch (type) {
        case mix.GET_TIMESLOAT_START:
            return {
                ...state,
                loading: true,
            }
        case mix.GET_TIMESLOAT_SUCCESS:
            return {
                ...state,
                timesloat: payload,
                loading: false,
            }
        case mix.GET_TIMESLOAT_FAIL:
            return {
                ...state,
                timesloatErr: payload,
                loading: false,
            }
        case mix.GET_PINCODEBY_CITY_START:
            return {
                ...state,
                loading: true,
            }
        case mix.GET_PINCODEBY_CITY_SUCCESS:
            return {
                ...state,
                pincodebycity: payload,
                loading: false,
            }
        case mix.GET_PINCODEBY_CITY_FAIL:
            return {
                ...state,
                pincodebyErr: payload,
                loading: false,
            }
        case mix.GET_ADDRESS_TYPE_START:
            return {
                ...state,
                loading: true,
            }
        case mix.GET_ADDRESS_TYPE_SUCCESS:
            return {
                addresstype: payload,
                loading: false,
            }
        case mix.GET_ADDRESS_TYPE_FAIL:
            return {
                addresstypeErr: payload,
                loading: false,
            }
        case mix.NAV_SEARCH_START:
            return {
                loading: true,
            }
        case mix.NAV_SEARCH_SUCCESS:
            return {
                navsearch: payload,
                loading: false,
            }
        case mix.NAV_SEARCH_FAIL:
            return {
                navsearchErr: payload,
                loading: false,
            }
        default:
            return state;
    }
}