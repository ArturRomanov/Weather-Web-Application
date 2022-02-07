import {
    GET_FORECAST_WEATHER,
    FORECACT_WEATHER_ERROR,
} from '../actions/types';

const initialState = {
    forecast: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_FORECAST_WEATHER:
            return {
                ...state,
                forecast: payload,
                loading: false
            };
        case FORECACT_WEATHER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}