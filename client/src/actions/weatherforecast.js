import {
    GET_FORECAST_WEATHER,
    FORECACT_WEATHER_ERROR,
} from './types';

// This action getForecastWeather takes id of a location as a parameter, 
// finds forecast weather for this location from the Foreca Weather 
// and dispatches a response to a reducer
export const getForecastWeather = (id) => async dispatch => {
    try {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${id}`,
        params: {alt: '0', tempunit: 'C', windunit: 'MS', periods: '8', dataset: 'full'},
        headers: {
            'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
            'x-rapidapi-key': '4ad2fd99e3msh1d203b8aeb3dfbbp1f6e2fjsn9a606e4b88b3'
        }
        };

        // This code returns data for a location from the Foreca Weather and stores this data in const res
        const res = await axios.request(options).then().catch(function (error) {
	        console.error(error);
        });

        // This code dispatches to a reducer res data
        dispatch({
            type: GET_FORECAST_WEATHER,
            payload: res.data
        });
    }
    catch(err) {

        // This code dispatches to a reducer an error
        dispatch({
            type: FORECACT_WEATHER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })

    }
}