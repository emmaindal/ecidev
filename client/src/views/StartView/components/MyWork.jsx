import React, { Component } from 'react'
import styled from 'styled-components'

class MyWork extends Component {
  render() {
    const { myWorkisVisible } = this.props
    return (
      <Container myWorkisVisible={myWorkisVisible}>
        <Content>
          <Project>
            <Image src="/test2.png" />
            <ProjectName>allergikartan</ProjectName>
            <Description>
              a application aimed to show resturants in a specific city
              depending on your chosen allergy
            </Description>
            <Link disabled={true}>to the website</Link>
          </Project>
          <Project>
            <Image src="/test3.png" />
            <ProjectName>phd summer school</ProjectName>
            <Description>
              a website for all information regaring a phd summer school on
              malmö university.
            </Description>
            <Link href="https://www.biomembranes.se/about/" target="_blank">
              to the website
            </Link>
          </Project>
          <Project>
            <Image src="/test4.png" />
            <ProjectName>ecidev</ProjectName>
            <Description>
              my own freelancing website where all my work, contact information
              and other important stuff will be published.
            </Description>
            <Link href="https://www.ecidev.site/" target="_blank">
              to the website
            </Link>
          </Project>
        </Content>
      </Container>
    )
  }
}

export default MyWork

const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  overflow: hidden;

  height: ${props => (props.myWorkisVisible ? '100vh' : '0vh')};
  transition: height 1s;
  @media (max-width: 700px) {
    display: ${props => (props.myWorkisVisible ? 'flex' : 'none')};
    transition: display 2s;
    height: ${props => (props.myWorkisVisible ? '1500px' : 'none')};
    margin-top: ${props => (props.myWorkisVisible ? '5rem' : '0')};
    font-size: 4vw;
  }
`

const Content = styled.div`
  margin: 15% 5% 0% 5%;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const Project = styled.div`
  font-size: 1vw;
  font-weight: bold;
  border-radius: 5px;
  min-height: 100%;
  margin: 2%;
  width: 33%;
  padding: 1%;
  max-height: 60%;
  background: #fff;
  color: ${props => props.theme.textPrimary};

  @media (max-width: 700px) {
    min-height: 350px;
    max-height: 100%;
    font-size: 4.5vw;
    margin: 0;
    margin-bottom: 8%;
    width: 100%;
  }
`

const Description = styled.p`
  margin-bottom: 10%;
`
const Link = styled.a`
  text-decoration: none;
  background: ${props =>
    props.disabled ? 'lightgrey' : props.theme.primaryDark};
  color: ${props => (props.disabled ? '#b2b2b2' : '#fff')};
  border-radius: 2rem;
  box-shadow: 0px 0px 4px
    ${props => (props.disabled ? 'none' : props.theme.primary)};
  padding: 3%;
  margin: 2%;
  font-size: 12px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`

const Image = styled.img`
  width: 100%;
`

const ProjectName = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 200;
`
