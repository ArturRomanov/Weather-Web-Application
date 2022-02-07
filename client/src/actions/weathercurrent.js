import {
    GET_CURRENT_WEATHER,
    CURRENT_WEATHER_ERROR,
} from './types';

// This action getCurrentWeather takes id of a location and name of a location as parameters, 
// finds current weather data for this location from the Foreca Weather, 
// sends an API which logs this data to console and to MongoDB and dispatches a response to a reducer
export const getCurrentWeather = (id, location) => async dispatch => {
    try {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: `https://foreca-weather.p.rapidapi.com/current/${id}`,
        params: {alt: '0', tempunit: 'C', windunit: 'MS', tz: 'Europe/London', lang: 'en'},
        headers: {
            'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
            'x-rapidapi-key': '4ad2fd99e3msh1d203b8aeb3dfbbp1f6e2fjsn9a606e4b88b3'
        }
        };

        // This code returns data for a location from the Foreca Weather and stores this data in const res
        const res = await axios.request(options).then().catch(function (error) {
	        console.error(error);
        });

        const formData = new FormData();

        // This code sets location and data for current weather to formData
        formData.set('location', location);
        formData.set('currentweather', JSON.stringify(res.data.current));

        // This code sends an API which logs current weather to console and to MongoDB
        axios.post('/api/weather/weather', formData);

        // This code dispatches to a reducer res data
        dispatch({
            type: GET_CURRENT_WEATHER,
            payload: res.data
        });
    }
    catch(err) {

        // This code dispatches to a reducer an error
        dispatch({
            type: CURRENT_WEATHER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })

    }
}