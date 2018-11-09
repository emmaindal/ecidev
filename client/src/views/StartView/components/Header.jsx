import React, { Component } from "react";
import "../../App.css";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

class Header extends Component {
  state = {
    underConstruction: true
  };
  render() {
    return (
      <Container className="App-header">
        <Effect />
        {!this.state.underConstruction && (
          <Heading>Design - Frontend - Backend</Heading>
        )}
        {!this.state.underConstruction && (
          <SubHeading>
            A creative Informationarchitect with a huge love for Web Development
          </SubHeading>
        )}

        <SubHeading>EciDev is under construction. Welcome back!</SubHeading>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  min-height: 100vh;
  color: white;
`;

const Effect = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: ${props => props.theme.secondaryLight};
  clip-path: circle(50% at 20% 20%);
  -webkit-clip-path: circle(50% at 30% 20%);

  /* clip-path: polygon(
    0% 0%,
    100% 0%,
    280% 75%,
    75% 25%,
    85% 20%,
    35% 60%,
    20% 60%,
    -4% 100%
  ); */
`;

const Heading = styled(Typography)`
  &&& {
    z-index: 9999;
    font-size: 4rem;
    letter-spacing: 5px;
    font-weight: 200;
    color: white;

    @media (max-width: 700px) {
      font-size: 1.1rem;
    }
  }
`;

const SubHeading = styled(Typography)`
  &&& {
    z-index: 9999;
    letter-spacing: 4px;
    font-size: 1rem;
    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
`;

export default Header;
