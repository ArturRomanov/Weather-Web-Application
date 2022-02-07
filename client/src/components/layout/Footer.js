import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
.footer {
    background-color: #4682B4;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    bottom: 0;
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
        <nav className="footer">
            <p>All Right Reserved</p>
        </nav>
        </FooterWrapper>
    )
}

export default Footer;