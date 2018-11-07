import React, { Component } from "react";
import "../App.css";

import styled from "styled-components";
import { Typography } from "@material-ui/core";

class Contact extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Heading>Me love coffee. Do you?</Heading>
          <ContactForm action="#">
            <input type="text" name="name" label="name" />
            <input type="text" name="email" />
          </ContactForm>
        </Content>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  background-color: ${props => props.theme.primary};
`;

const Heading = styled(Typography)`
  &&& {
    margin-top: 2%;
    color: white;
    letter-spacing: 4px;
    font-size: 2rem;
  }
`;

const ContactForm = styled.form`
  margin-top: 10%;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const Content = styled.div`
  width: 900px;
  height: 80%;
  background-color: ${props => props.theme.secondary};
`;

export default Contact;
