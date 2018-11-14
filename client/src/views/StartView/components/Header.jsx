import React, { Component } from "react";
import "../../App.css";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <Container className="App-header">
        <Effect />
        <Heading>Design - Frontend - Backend</Heading>
        <SubHeading>
          A creative Informationarchitect with a huge love for Web Development
        </SubHeading>
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
  filter: drop-shadow(5px 5px 10px rgba(52, 52, 52, 0.3));
  min-height: 100vh;
  color: ${props => props.theme.textPrimary};
`;

const Effect = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: ${props => props.theme.secondary};
  clip-path: circle(50% at 30% 20%);
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
    font-weight: 500;
    color: ${props => props.theme.textSecondary};

    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

const SubHeading = styled(Typography)`
  &&& {
    z-index: 9999;
    letter-spacing: 3px;
    font-weight: 500;
    font-size: 1rem;
    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
`;

export default Header;
