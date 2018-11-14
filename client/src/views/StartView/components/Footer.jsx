import React from "react";
import styled from "styled-components";

const Footer = ({ handleSayHello }) => (
  <Container position="sticky">Made by me © EciDev 2018</Container>
);

const Container = styled.div`
  margin: -0;
  padding: 2%;
  color: ${props => props.theme.textSecondary};
  font-size: 14px;
  font-weight: 200;
  background: transparent;
`;

export default Footer;
