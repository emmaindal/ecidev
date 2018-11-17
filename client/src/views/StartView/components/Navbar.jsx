import React from "react";
import styled from "styled-components";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = ({ handleSayHello }) => (
  <Nav position="sticky">
    <Toolbar>
      <LogoContainer>
        <Logo>
          <Text>EciDev</Text>
        </Logo>
      </LogoContainer>
      <SayHello onClick={handleSayHello}>Say Hello! :)</SayHello>
    </Toolbar>
  </Nav>
);

export default Navbar;

const Nav = styled(AppBar)`
  &&& {
    font-size: 1vw;
    width: 100%;
    position: absolute;
    box-shadow: none;
    color: ${props => props.theme.primaryLight};
    background: transparent;
    display: flex;
    @media (max-width: 700px) {
      font-size: 3vw;
    }
  }
`;

const SayHello = styled.div`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textSecondary};
  border: 1px solid white;
  border-radius: 10rem;
  box-shadow: 0px 0px 4px ${props => props.theme.primary};
  padding: 2%;
  margin: 2%;
  font-weight: 700;
  letter-spacing: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textPrimary};
  }
`;

const LogoContainer = styled.div`
  margin: 1%;
  flex-grow: 1;
`;

const Logo = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    border: 1px solid ${props => props.theme.primary};
    background: ${props => props.theme.primary};
    box-shadow: 1px 1px 5px ${props => props.theme.primary};

    @media (max-width: 700px) {
      height: 1rem;
      width: 1rem;
      margin-top: 1rem;
    }
  }
`;

const Text = styled(Typography)`
  &&& {
    color: white;
    letter-spacing: 3px;

    @media (max-width: 700px) {
    }
  }
`;
