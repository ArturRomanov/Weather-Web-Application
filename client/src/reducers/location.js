import {
    GET_LOCATION,
    LOCATION_ERROR,
} from '../actions/types';

const initialState = {
    locations: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_LOCATION:
            return {
                ...state,
                locations: payload,
                loading: false
            };
        case LOCATION_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}