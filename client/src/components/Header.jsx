import React, { Component } from "react";
import "../App.css";
import theme from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { Typography } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <Container className="App-header">
        <Effect />
        <Heading>Design - FrontEnd - BackEnd</Heading>
        <SubHeading>
          A creative Informationarchitect with a huge love for Web Development
        </SubHeading>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${props => props.theme.primaryLight};
  width: 100%;
  min-height: 100vh;
`;

const Effect = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: ${props => props.theme.secondaryLight};
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 25%,
    55% 20%,
    35% 60%,
    20% 60%,
    -4% 105%
  );
`;

const Heading = styled(Typography)`
  &&& {
    z-index: 9999;
    font-size: 4rem;
    letter-spacing: 5px;
    font-weight: 200;
    color: white;
  }
`;

const SubHeading = styled(Typography)`
  &&& {
    z-index: 9999;
    letter-spacing: 4px;
    font-size: 1rem;
  }
`;

export default Header;
