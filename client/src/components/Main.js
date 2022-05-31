import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocation, logLocation } from '../actions/location';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MainWrapper = styled.div`
.main {
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .styling {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        border-radius: 25px;
        -webkit-box-shadow: 0 0 24px 7px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 24px 7px rgba(0, 0, 0, 0.2);
        background-color: #4682B4;
        width: 85%;
        max-width: 675px;
        min-height: 300px;
    }
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

            p {
                color: white;
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
            <div className="styling">
                <input className="search" type="text" name="search" value={location} onChange={handleChange("location")} placeholder="Search for location" maxLength='30'/>
                <Button className="button" type="button" name="button" onClick={handleSubmit}>Search</Button>
            <div>
                <p style={{color: "red"}}>{message}</p>
            </div>
            {loading === false && (locations && locations.locations[0]) === undefined ?
            <div>
                <p style={{color: "red"}}>This location was not found</p>
            </div>
            :
            console.log()}
            </div>
            {loading === false ? 
            <div>
                <ol>
                {(locations && locations.locations).map((location, j) => (
                    <li className="location" key={j}>
                        <div className="styling">
                        <p>Name: {(location.name)}</p>
                        <p>Country: {(location.country)}</p>
                        <p>Area: {(location.adminArea)}</p>
                        <Button className="button" onClick={() => history.push(`/${(location.id)}/${(location.name)}`)}>Show Weather</Button>
                        </div>
                    </li>
                )).filter((location, j) => j < 5)}
                </ol>
            </div>
            : console.log()}
            {loading === true && localStorage.getItem('locations') !== undefined ? 
            <div>
                <ol>
                {JSON.parse(localStorage.getItem('locations')).map((location, j) => (
                    <li className="location" key={j}>
                        <div className="styling">
                        <p>Name: {(location.name)}</p>
                        <p>Country: {(location.country)}</p>
                        <p>Area: {(location.adminArea)}</p>
                        <Button className="button" onClick={() => history.push(`/${(location.id)}/${(location.name)}`)}>Show Weather</Button>
                        </div>
                    </li>
                )).filter((location, j) => j < 5)}
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