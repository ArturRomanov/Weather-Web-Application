import { combineReducers } from 'redux';
import location from './location';
import weathercurrent from './weathercurrent';
import weatherforecast from './weatherforecast';

export default combineReducers({
    location,
    weathercurrent,
    weatherforecast,
});
