import React from "react";
import styled from "styled-components";

const Footer = ({ handleSayHello }) => (
  <Container position="sticky">Made by me © EciDev 2018</Container>
);

const Container = styled.div`
  margin: -0;
  padding: 2%;
  color: ${props => props.theme.textSecondary};
  font-weight: bold;
  border-top: 1px solid rgba(47, 47, 47, 0.22);
  background: rgba(255, 255, 255, 0.82);
`;

export default Footer;
