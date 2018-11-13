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
    width: 100%;
    position: absolute;
    box-shadow: none;
    color: ${props => props.theme.primaryLight};
    background-color: rgba(121, 156, 105, 0);
    display: flex;
  }
`;

const SayHello = styled.div`
  color: ${props => props.theme.textPrimary};
  border-radius: 10rem;
  border: 1px solid ${props => props.theme.borderPrimary};
  box-shadow: 1px 1px 5px ${props => props.theme.shadowSecondary};
  padding: 2%;
  margin: 2%;
  font-weight: 700;
  letter-spacing: 3px;

  &:hover {
    background-color: ${props => props.theme.primary};
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
    font-size: 1.2rem;
    color: white;
    letter-spacing: 3px;

    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }
`;
