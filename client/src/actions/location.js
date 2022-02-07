import axios from 'axios';
import {
    GET_LOCATION,
    LOCATION_ERROR,
} from './types';

// This action getLocation takes location as a parameter, 
// finds data for this location from the Foreca Weather 
// and dispatches a response to a reducer
export const getLocation = (location) => async dispatch => {
    try {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: `https://foreca-weather.p.rapidapi.com/location/search/${location}`,
        params: {lang: 'en'},
        headers: {
            'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
            'x-rapidapi-key': '4ad2fd99e3msh1d203b8aeb3dfbbp1f6e2fjsn9a606e4b88b3'
            }
        };

        // This code returns data for a location from the Foreca Weather and stores this data in const res
        const res = await axios.request(options).then().catch(function (error) {
	        console.error(error);
        });

        // This code sets to a local storage data for a location which is stringified for this
        localStorage.setItem('locations', JSON.stringify(res.data.locations));

        // This code dispatches to a reducer res data
        dispatch({
            type: GET_LOCATION,
            payload: res.data
        });
    }
    catch(err) {

        // This code dispatches to a reducer an error
        dispatch({
            type: LOCATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })

    }
}

// This action logLocation takes formData as a parameter and sends an API which logs location to console and to MongoDB
export const logLocation = (formData) => async dispatch => {
    try {
        axios.post('/api/location/location', formData);

    }
    catch(err) {


    }
}