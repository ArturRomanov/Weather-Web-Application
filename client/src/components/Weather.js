import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../actions/weathercurrent';
import { getForecastWeather } from '../actions/weatherforecast';

const WeatherWrapper = styled.div`
.main {
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .styling {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        border-radius: 25px;
        -webkit-box-shadow: 0 0 24px 7px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 24px 7px rgba(0, 0, 0, 0.2);
        background-color: #4682B4;
        width: 100%
        max-width: 675px;
        min-height: 300px;
        color: white;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            margin: 15px;
            padding: 5px;
            text-align: center;
            width: 675px;

            @media (max-width: 991px) {
                width: auto;
            }
        }
    }
}
`

const Weather = ({
    getCurrentWeather,
    weathercurrent: { current },
    getForecastWeather,
    weatherforecast: { forecast },
    match,
}) => {
    
    // This function useEffect loads a state when a page is opened or refreshed
    useEffect(() => {
        getCurrentWeather(match.params.id, match.params.location);
        getForecastWeather(match.params.id);
    },
    [getCurrentWeather, match.params.id, match.params.location],
    [getForecastWeather, match.params.id]);

    return (
        <WeatherWrapper>
        <div className="main">
            {current && current.current !== undefined ? 
            <div>
                <h1>Current Weather</h1>
                    <ul>
                        <li  className="styling">
                            <p><b>City:</b> {match.params.location}</p>
                            <p><b>Time:</b> {current && current.current.time}</p>
                            <p><b>Weather:</b> {current && current.current.symbolPhrase}</p>
                            <p><b>Temperature:</b> {current && current.current.temperature} C</p>
                            <p><b>Feels like temperature:</b> {current && current.current.feelsLikeTemp} C</p>
                            <p><b>Relative humidity:</b> {current && current.current.relHumidity} %</p>
                            <p><b>Dew point:</b> {current && current.current.dewPoint} C</p>
                            <p><b>Wind speed:</b> {current && current.current.windSpeed} m/s</p>
                            <p><b>Wind direction string:</b> {current && current.current.windDirString}</p>
                            <p><b>Wind gust:</b> {current && current.current.windGust} m/s</p>
                            <p><b>Precipitation probability:</b> {current && current.current.precipProb} %</p>
                            <p><b>Precipitation rate:</b> {current && current.current.precipRate} mm/h</p>
                            <p><b>Cloudiness:</b> {current && current.current.cloudiness} %</p>
                            <p><b>Thunder probability:</b> {current && current.current.thunderProb} %</p>
                            <p><b>UV index:</b> {current && current.current.uvIndex}</p>
                            <p><b>Pressure:</b> {current && current.current.pressure} mm Hg</p>
                            <p><b>Visibility:</b> {current && current.current.visibility} m</p>
                        </li>
                    </ul>
            </div>
            :
            console.log()}
            {forecast && forecast.forecast !== undefined ? 
            <div>
                <h1>Forecast Weather</h1>
            <ul>
                {(forecast && forecast.forecast).map((weather, j) => (
                    <li className="styling" key={j}>
                        <p><b>City:</b> {match.params.location}</p>
                        <p><b>Time:</b> {weather.date}</p>
                        <p><b>Weather:</b> {weather.symbolPhrase}</p>
                        <p><b>Max temperature:</b> {weather.maxTemp} C</p>
                        <p><b>Min temperature:</b> {weather.minTemp} C</p>
                        <p><b>Precipitation probability:</b> {weather.precipProb} %</p>
                    </li>
                ))}
            </ul>
            </div>
            :
            console.log()}
        </div>
        </WeatherWrapper>
    )
}

Weather.propTypes = {
    getCurrentWeather: PropTypes.func.isRequired,
    weathercurrent: PropTypes.object.isRequired,
    getForecastWeather: PropTypes.func.isRequired,
    weatherforecast: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    weathercurrent: state.weathercurrent,
    weatherforecast: state.weatherforecast,
});

export default connect(mapStateToProps, {
    getCurrentWeather,
    getForecastWeather,
})(Weather);