import React from 'react'
import styled from 'styled-components'

const Footer = ({ handleSayHello }) => (
  <Container position="sticky">
    <Text>Made with love © EciDev 2019 | hello@ecidev.site</Text>
  </Container>
)

const Container = styled.div`
  color: ${props => props.theme.textSecondary};
  font-weight: 200;
  background: transparent;
`

const Text = styled.p`
  margin: -0;
  padding: 2%;
  font-size: 1vw;
  @media (max-width: 700px) {
    font-size: 4vw;
  }
`

export default Footer
