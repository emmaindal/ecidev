import React, { Component } from "react";

import styled from "styled-components";
import Card from "./Card";

import CardContent from "../content/CardContent";

class Main extends Component {
  render() {
    const { first, second, third } = CardContent;
    return (
      <Container>
        <Content>
          <Heading>Hi, I'm Emma. Happy to meet you here.</Heading>
          <About>
            I'm an Information Architect student at Malmö University at the
            moment and is about to finish my last year. My heart sings when I
            get the opportunity to be in the whole working process in a project
            and I love everything from writing backend code, frontend code to
            designing mockups. But I prefer wrinting clean code in JavaScript!
          </About>
          <Cards>
            <Card
              title={first.title}
              content={first.content}
              heading3={first.heading3}
              listitems={first.listitems}
            />
            <Card
              title={second.title}
              content={second.content}
              heading3={second.heading3}
              listitems={second.listitems}
            />
            <Card
              title={third.title}
              content={third.content}
              heading3={third.heading3}
              listitems={third.listitems}
            />
          </Cards>
        </Content>
      </Container>
    );
  }
}

const Container = styled.div`
  font-size: 2vw;
  display: flex;
  justify-content: center;
  height: 20%;
  @media (max-width: 700px) {
    font-size: 4vw;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 90%;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 30%;
    height: 80%;
  }
`;

const Heading = styled.h2`
  &&& {
    margin-bottom: 5%;
    color: ${props => props.theme.textSecondary};
    letter-spacing: 4px;
  }
`;

const About = styled.p`
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 4.5vw;
    margin-bottom: 10%;
  }
`;

const Content = styled.div`
  max-width: 70%;
  @media (max-width: 700px) {
    max-width: 90%;
  }
`;

export default Main;
