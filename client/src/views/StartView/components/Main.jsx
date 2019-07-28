import React, { Component } from 'react'

import styled from 'styled-components'
import Card from './Card'

import content from '../content/CardContent'

class Main extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Heading>hi, i'm emma. happy to meet you here.</Heading>
          <Image src="me_2.png" />
          <About>
            did i choose to work with only one part? the answer is no. i love to
            be included in the entire project and switch between working with
            user experience, frontend development, backend development, data
            visualisation and create a complex database query as much as I can.
            i am also very interesting in team collaboration and humans mental
            health.
            <br />
            <br />i love modern technology and work most of the time with
            javascript, react, node and graphql.
          </About>
          <Cards>
            {content.map(section => (
              <Card
                title={section.title}
                content={section.content}
                heading3={section.heading3}
                listitems={section.listitems}
              />
            ))}
          </Cards>
        </Content>
      </Container>
    )
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
`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 60%;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 30%;
    height: 80%;
  }
`

const Heading = styled.h2`
  &&& {
    margin-bottom: 5%;
    color: ${props => props.theme.textSecondary};
    letter-spacing: 4px;
  }
`

const About = styled.p`
  font-size: 1.5vw;

  font-weight: bold;
  @media (max-width: 700px) {
    color: #f0f0f0;
    font-weight: 200;
    font-size: 3.5vw;
    margin-bottom: 10%;
  }
`

const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 20px ${props => props.theme.primaryDark};
  width: 40%;
`

const Content = styled.div`
  max-width: 70%;
  @media (max-width: 700px) {
    max-width: 90%;
  }
`

export default Main
