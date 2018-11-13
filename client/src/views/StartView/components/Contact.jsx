import React, { Component } from "react";

import styled from "styled-components";
import { Typography } from "@material-ui/core";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = e => {
    const inputField = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({
      [inputField]: value
    });
  };

  handleSendForm = e => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Heading>I love coffee. Do you?</Heading>
          <Text>
            Do you have a fantastic idea or just want to swap some words over a
            coffee. Do not hesitate to get in touch with me.
          </Text>
          <FormContainer>
            <ContactForm action="#" onSubmit={this.handleSendForm}>
              <Columns>
                <Column half>
                  <Label special htmlFor="name">
                    NAME
                  </Label>
                  <Input
                    onChange={this.handleInputChange}
                    type="text"
                    name="name"
                    value={this.state.name}
                    label="name"
                    required
                  />
                </Column>
                <Column half>
                  <Label special htmlFor="email">
                    EMAIL
                  </Label>
                  <Input
                    onChange={this.handleInputChange}
                    type="text"
                    name="email"
                    value={this.state.email}
                    label="email"
                    required
                  />
                </Column>
              </Columns>
              <Column>
                <Label htmlFor="message">MESSAGE</Label>
                <Message
                  onChange={this.handleInputChange}
                  type="textarea"
                  value={this.state.message}
                  name="message"
                  required
                />
              </Column>
              <Button type="submit">Send</Button>
            </ContactForm>
          </FormContainer>
        </Content>
      </Container>
    );
  }
}

const Button = styled.button`
  margin: 3%;
  padding: 3%;
  float: right;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  background: white;
  color: ${props => props.theme.primary};

  :hover {
    background: ${props => props.theme.primary};
    color: white;
  }
`;
const FormContainer = styled.fieldset`
  width: 100%;
  margin: 0 auto;
  border: none;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Columns = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-bottom: 5%;
`;

const Column = styled.div`
  flex: none;
  width: ${props => (props.half ? "50%" : "default")};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.82);
`;

const Input = styled.input`
  border: none;
  height: 30px;
  width: 80%;
  border-radius: 5px;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Message = styled.textarea`
  padding: 2%;
  border-radius: 5px;
  width: 90%;
  height: 200px;
  resize: none;
  border: 0;
`;

const Label = styled.label`
  float: left;
  margin-left: ${props => (props.special ? "10%" : "3%")};
  font-size: 1rem;
  letter-spacing: 2px;
`;

const Heading = styled(Typography)`
  &&& {
    margin-top: 5%;
    color: ${props => props.theme.primaryLight};
    letter-spacing: 4px;
    font-size: 2rem;
  }
`;

const Text = styled.p`
  margin: 2% 10% 0 10%;
  color: ${props => props.theme.primaryLight};
`;
const ContactForm = styled.form`
  width: 60%;
  margin: 60px auto 0;
  display: block;
  font-size: 1.2rem;
  letter-spacing: 1px;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Content = styled.div`
  margin-top: 17%;
  width: 50%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px rgba(36, 36, 36, 0.14);
  border: 1px solid ${props => props.theme.primaryLight};
  margin-bottom: 5%;

  @media (max-width: 700px) {
    width: 90%;
    margin-bottom: 20%;
  }
`;

export default Contact;
