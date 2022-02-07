import {
    GET_CURRENT_WEATHER,
    CURRENT_WEATHER_ERROR,
} from '../actions/types';

const initialState = {
    current: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                current: payload,
                loading: false
            };
        case CURRENT_WEATHER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}