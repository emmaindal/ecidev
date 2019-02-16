import React, { Component } from 'react'
import '../../App.css'
import styled from 'styled-components'

class Header extends Component {
  render() {
    return (
      <Container className="App-header">
        <Effect>
          <img src="./svg_3.svg" alt="svg pic" />
        </Effect>

        <Heading>Designer and Developer </Heading>
        <SubHeading>
          A creative Informationarchitect with a great passion for Web
          Development
        </SubHeading>
      </Container>
    )
  }
}

const Container = styled.div`
  font-size: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  filter: drop-shadow(5px 5px 10px rgba(52, 52, 52, 0.3));
  min-height: 100vh;
  color: ${props => props.theme.textPrimary};
  @media (max-width: 700px) {
    font-size: 4vw;
  }
`

const Effect = styled.div`
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  @media (max-width: 700px) {
    min-height: 10vh;
  }
`

const Heading = styled.h1`
  &&& {
    margin: 0;
    z-index: 9999;
    letter-spacing: 5px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.textPrimary};

    @media (max-width: 700px) {
      font-size: 5vw;
      color: ${props => props.theme.textSecondary};
    }
  }
`

const SubHeading = styled.h5`
  &&& {
    margin: 0;
    z-index: 9999;
    letter-spacing: 2px;
    font-weight: bold;
    @media (max-width: 700px) {
      font-size: 4vw;
      color: #605e60;
    }
  }
`

export default Header
