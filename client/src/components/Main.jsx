import React, { Component } from "react";
import "../App.css";

import styled from "styled-components";
import { Typography } from "@material-ui/core";

class Main extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Heading>Hi, I'm Emma. Happy to meet you here.</Heading>
          <About>
            I'm an Informationarchitect student at Malmö University at the
            moment and doing my third and last year. My heart sings when I get
            the opportunity to be in the whole working process in a project and
            I love everything from writing backend code, frontend code to
            designing mockups. And I prefer wrinting clean code in JavaScript!
          </About>
        </Content>
      </Container>
    );
  }
}

const Heading = styled(Typography)`
  &&& {
    color: white;
    letter-spacing: 4px;
    font-size: 2rem;
  }
`;

const About = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const Content = styled.div`
  max-width: 900px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  margin-top: 5%;
  background-color: ${props => props.theme.primary};
`;

export default Main;
