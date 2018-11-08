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
            designing mockups. But I prefer wrinting clean code in JavaScript!
          </About>
          <Cards>
            <Card>
              <CardTitle>Design</CardTitle>
              <CardContent>
                <p>
                  For me, a designsprint in a beginning of a project is
                  required. I love design everything from UI, UX, logotypes.
                </p>
                <Heading3>Design Tools I use:</Heading3>
                <List>
                  <ListItem>Adobe XD</ListItem>
                  <ListItem>Affinity Photo</ListItem>
                  <ListItem>Invision Studio</ListItem>
                  <ListItem>Zeplin</ListItem>
                </List>
              </CardContent>
            </Card>
            <Card>
              <CardTitle>Frontend</CardTitle>
              <CardContent>
                <p>
                  I love to write clean, reuseable and maintainable code and
                  prefer working with Web.
                  <br />
                  <br />
                </p>
                <Heading3>Languages/Libraries I use:</Heading3>
                <List>
                  <ListItem>HTML</ListItem>
                  <ListItem>CSS</ListItem>
                  <ListItem>JavaScript</ListItem>
                  <ListItem>ReactJS</ListItem>
                  <ListItem>Redux</ListItem>
                  <ListItem>Sass</ListItem>
                  <ListItem>Styled Components</ListItem>
                </List>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Backend</CardTitle>
              <CardContent>
                <p>
                  Even if Frontend Development is my primary focus I always want
                  to have a touch of Backend Development in my life.
                </p>
                <Heading3>Languages I speak:</Heading3>
                <List>
                  <ListItem>NodeJS</ListItem>
                  <ListItem>Python</ListItem>
                  <ListItem>SQL</ListItem>
                  <ListItem>MongoDB</ListItem>
                </List>
              </CardContent>
            </Card>
          </Cards>
        </Content>
      </Container>
    );
  }
}
const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  width: 900px;
`;

const Card = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  border-radius: 20px;
  margin: 1%;
  padding: 3%;
  width: 300px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0px 0px 20px 2px rgba(73, 70, 72, 0.39);
  color: ${props => props.theme.primary};
`;

const CardTitle = styled.section`
  padding-bottom: 5%;
`;

const CardContent = styled.section`
  color: ${props => props.theme.textSecondary};
  font-size: 0.8rem;
  padding-bottom: 5%;
`;

const Heading3 = styled.h3`
  padding-top: 10%;
  color: rgb(50, 101, 214);
  font-weight: bold;
`;

const Heading = styled(Typography)`
  &&& {
    margin-bottom: 5%;
    color: white;
    letter-spacing: 4px;
    font-size: 2rem;
  }
`;

const About = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 15%;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  text-align: center;
  padding-bottom: 5%;
`;
const Content = styled.div`
  max-width: 900px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  margin-top: 5%;
  background-color: rgba(255, 255, 255, 0);
`;

export default Main;
