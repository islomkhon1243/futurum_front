import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-decoration: none;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  &:hover {
    color: #0077cc;
  }
`;

function Navbar() {
    return (
        <Nav>
            <Logo to="/">Futurum</Logo>
            <Links>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/features">Features</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/universities">Universities</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/applicationForm">Application Form</NavLink>
                <NavLink to="/userProfile">Profile</NavLink>
                <NavLink to="/login">Login</NavLink>
            </Links>
        </Nav>
    );
}

export default Navbar;
