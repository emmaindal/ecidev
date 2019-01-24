import React from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/icons/Menu'

import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = ({
  isMobile,
  myWorkisVisible,
  handleShowMyWork,
  handleOpenMenu,
  handleSayHello
}) => (
  <Nav position="sticky">
    <Toolbar>
      <LogoContainer>
        <Logo>
          <Text>EciDev</Text>
        </Logo>
      </LogoContainer>
      {!isMobile && (
        <ButtonContainer>
          <Button myWorkisVisible={myWorkisVisible} onClick={handleShowMyWork}>
            {myWorkisVisible ? 'Hide my work' : 'Show my work'}
          </Button>
          <Button onClick={handleSayHello}>Say Hello! :)</Button>
        </ButtonContainer>
      )}
      {isMobile && (
        <MobileNav>
          <StyledMenu onClick={handleOpenMenu} />
        </MobileNav>
      )}
    </Toolbar>
  </Nav>
)

export default Navbar

const Nav = styled(AppBar)`
  &&& {
    font-size: 1vw;
    width: 100%;
    position: absolute;
    box-shadow: none;
    color: ${props => props.theme.primaryLight};
    background: transparent;
    display: flex;
    @media (max-width: 700px) {
      font-size: 3vw;
    }
  }
`
const ButtonContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    margin-top: 10%;
    flex-direction: column;
  }
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.myWorkisVisible ? props.theme.secondary : props.theme.primary};
  color: ${props =>
    props.myWorkisVisible
      ? props.theme.textPrimary
      : props.theme.textSecondary};
  border: 1px solid white;
  border-radius: 10rem;
  box-shadow: 0px 0px 4px ${props => props.theme.primary};
  padding: 2%;
  margin: 2%;
  width: 150px;
  height: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textPrimary};
  }
`

const LogoContainer = styled.div`
  margin: 1%;
  flex-grow: 1;
`

const Logo = styled.div`
  &&& {
    color: white;
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
`
const StyledMenu = styled(Menu)`
  &&& {
    color: white;
    font-size: 30px;
  }
`
const Text = styled(Typography)`
  &&& {
    color: white;
    letter-spacing: 3px;

    @media (max-width: 700px) {
    }
  }
`

const MobileNav = styled.div``
