import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 2rem;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 2rem;
`;

function Footer() {
    return (
        <FooterContainer>
            © 2023 Company Name. All rights reserved.
        </FooterContainer>
    );
}

export default Footer;
