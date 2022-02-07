import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
.header {
    background-color: #4682B4;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
        <nav className="header">
            <h1>Weather</h1>
        </nav>
        </HeaderWrapper>
    )
}

export default Header;