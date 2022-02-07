import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocation, logLocation } from '../actions/location';
import { useHistory } from 'react-router-dom';

const MainWrapper = styled.div`
.main {
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .search {
        margin: 4px 2px;
        padding: 8px, 32px;
        width: 75%;
    }

    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 8px 32px;
        text-align: center;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }

    ol {
        li {
            margin: 15px;
            padding: 5px;
            text-align: center;

            .button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 8px 32px;
                text-align: center;
                text-decoration: none;
                margin: 4px 2px;
                cursor: pointer;
            }
        }
    }
}
`

const Main = ({
    getLocation,
    logLocation,
    location: { locations, loading },
}) => {

    const [state, setState] = useState({
        location: "",
        message: "",
        formData: new FormData(),
    });

    const {
        location,
        message,
        formData,
    } = state;

    // This function handleChange assigns input value to a location
    const handleChange = (name) => (e) => {
        const value = e.target.value;
        
        // This code performs validation to assign only letters and spaces up to 30 characters
        if(value.match(/^[a-zA-Z\s]*$/) && location.length <= 30) {
            formData.set(name, value);
            setState({
                ...state,
                [name]: value,
                'message': "",
            });
        }
        else {
            setState({
                ...state,
                'message': "Please enter letters and spaces only up to 30 characters",
            })
        }
    }

    // This function handleSubmit takes location and formData and sends actions getLocation and logLocation
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            getLocation(location);
            logLocation(formData);
        }
        catch (error) {
            
        }
    }

    const history = useHistory();

    return (
        <MainWrapper>
        <div className="main">
            <input className="search" type="text" name="search" value={location} onChange={handleChange("location")} placeholder="Search for location" maxLength='30'/>
            <button className="button" type="button" name="button" onClick={handleSubmit}>Search</button>
            <div>
                <p style={{color: "red"}}>{message}</p>
            </div>
            {loading === false && (locations && locations.locations[0]) === undefined ?
            <div>
                <p style={{color: "red"}}>This location was not found</p>
            </div>
            :
            console.log()}
            {loading === false ? 
            <div>
                <ol>
                {(locations && locations.locations[0]) !== undefined ? 
                <li>
                    <p>Name: {(locations && locations.locations[0].name)}</p>
                    <p>Country: {(locations && locations.locations[0].country)}</p>
                    <p>Area: {(locations && locations.locations[0].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(locations && locations.locations[0].id)}/${(locations && locations.locations[0].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(locations && locations.locations[1]) !== undefined ? 
                <li>
                    <p>Name: {(locations && locations.locations[1].name)}</p>
                    <p>Country: {(locations && locations.locations[1].country)}</p>
                    <p>Area: {(locations && locations.locations[1].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(locations && locations.locations[1].id)}/${(locations && locations.locations[1].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(locations && locations.locations[2]) !== undefined ? 
                <li>
                    <p>Name: {(locations && locations.locations[2].name)}</p>
                    <p>Country: {(locations && locations.locations[2].country)}</p>
                    <p>Area: {(locations && locations.locations[2].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(locations && locations.locations[2].id)}/${(locations && locations.locations[2].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(locations && locations.locations[3]) !== undefined ? 
                <li>
                    <p>Name: {(locations && locations.locations[3].name)}</p>
                    <p>Country: {(locations && locations.locations[3].country)}</p>
                    <p>Area: {(locations && locations.locations[3].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(locations && locations.locations[3].id)}/${(locations && locations.locations[3].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(locations && locations.locations[4]) !== undefined ? 
                <li>
                    <p>Name: {(locations && locations.locations[4].name)}</p>
                    <p>Country: {(locations && locations.locations[4].country)}</p>
                    <p>Area: {(locations && locations.locations[4].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(locations && locations.locations[4].id)}/${(locations && locations.locations[4].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                </ol>
            </div>
            : console.log()}
            {loading === true && localStorage.getItem('locations') !== undefined ? 
            <div>
                <ol>
                {(JSON.parse(localStorage.getItem('locations'))[0]) !== undefined ? 
                <li>
                    <p>Name: {(JSON.parse(localStorage.getItem('locations'))[0].name)}</p>
                    <p>Country: {(JSON.parse(localStorage.getItem('locations'))[0].country)}</p>
                    <p>Area: {(JSON.parse(localStorage.getItem('locations'))[0].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(JSON.parse(localStorage.getItem('locations'))[0].id)}/${(JSON.parse(localStorage.getItem('locations'))[0].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(JSON.parse(localStorage.getItem('locations'))[1]) !== undefined ? 
                <li>
                    <p>Name: {(JSON.parse(localStorage.getItem('locations'))[1].name)}</p>
                    <p>Country: {(JSON.parse(localStorage.getItem('locations'))[1].country)}</p>
                    <p>Area: {(JSON.parse(localStorage.getItem('locations'))[1].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(JSON.parse(localStorage.getItem('locations'))[1].id)}/${(JSON.parse(localStorage.getItem('locations'))[1].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(JSON.parse(localStorage.getItem('locations'))[2]) !== undefined ? 
                <li>
                    <p>Name: {(JSON.parse(localStorage.getItem('locations'))[2].name)}</p>
                    <p>Country: {(JSON.parse(localStorage.getItem('locations'))[2].country)}</p>
                    <p>Area: {(JSON.parse(localStorage.getItem('locations'))[2].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(JSON.parse(localStorage.getItem('locations'))[2].id)}/${(JSON.parse(localStorage.getItem('locations'))[2].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(JSON.parse(localStorage.getItem('locations'))[3]) !== undefined ? 
                <li>
                    <p>Name: {(JSON.parse(localStorage.getItem('locations'))[3].name)}</p>
                    <p>Country: {(JSON.parse(localStorage.getItem('locations'))[3].country)}</p>
                    <p>Area: {(JSON.parse(localStorage.getItem('locations'))[3].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(JSON.parse(localStorage.getItem('locations'))[3].id)}/${(JSON.parse(localStorage.getItem('locations'))[3].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                {(JSON.parse(localStorage.getItem('locations'))[4]) !== undefined ? 
                <li>
                    <p>Name: {(JSON.parse(localStorage.getItem('locations'))[4].name)}</p>
                    <p>Country: {(JSON.parse(localStorage.getItem('locations'))[4].country)}</p>
                    <p>Area: {(JSON.parse(localStorage.getItem('locations'))[4].adminArea)}</p>
                    <button className="button" onClick={() => history.push(`/${(JSON.parse(localStorage.getItem('locations'))[4].id)}/${(JSON.parse(localStorage.getItem('locations'))[4].name)}`)}>Show Weather</button>
                </li>
                :
                console.log()}
                </ol>
            </div>
            : console.log()}
        </div>
        </MainWrapper>
    )
}

Main.propTypes = {
    getLocation: PropTypes.func.isRequired,
    logLocation: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    location: state.location,
});

export default connect(mapStateToProps, {
    getLocation,
    logLocation,
})(Main);