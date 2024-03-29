import React, { Component } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import event from '../../lib/react-ga-event'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    isSent: false
  }

  handleInputChange = e => {
    const inputField = e.currentTarget.name
    const value = e.currentTarget.value
    this.setState({
      [inputField]: value
    })
  }

  handleSendForm = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(console.log('sent'))
      .catch(error => alert(error))

    e.preventDefault()
    this.setState({
      name: '',
      email: '',
      message: '',
      isSent: true
    })

    event('Form', 'Message sent')
  }

  render() {
    return (
      <Container>
        <Content>
          <Heading>i love coffee. do you?</Heading>
          <Text>
            do you have a fantastic idea or just want to swap some words over a
            coffee. do not hesitate to get in touch with me.
          </Text>
          <Spring from={{ height: 50 }} to={{ heigt: 80 }}>
            {props => (
              <Link href="https://se.linkedin.com/in/emma-indal">
                <Image
                  props={props}
                  src="./In-Black-128px-TM.png"
                  alt="linkedin icon"
                />
              </Link>
            )}
          </Spring>

          <Link href="https://github.com/emmaindal">
            <Image src="./GitHub-Mark-120px-plus.png" alt="github icon" />
          </Link>
          <FormContainer>
            <ContactForm
              name="contact"
              method="post"
              onSubmit={this.handleSendForm}
            >
              <Input type="hidden" name="form-name" value="contact" />

              <Columns>
                <Column half>
                  <Label special htmlFor="name">
                    name*
                  </Label>
                  <Input
                    onChange={this.handleInputChange}
                    type="name"
                    name="name"
                    value={this.state.name}
                    label="name"
                    required
                  />
                </Column>
                <Column half>
                  <Label special htmlFor="email">
                    email*
                  </Label>
                  <Input
                    onChange={this.handleInputChange}
                    type="email"
                    name="email"
                    value={this.state.email}
                    label="email"
                    required
                  />
                </Column>
              </Columns>
              <Column>
                <Label htmlFor="message">message</Label>
                <Message
                  onChange={this.handleInputChange}
                  type="textarea"
                  value={this.state.message}
                  name="message"
                  required
                />
              </Column>
              {this.state.isSent ? (
                <Feedback>
                  thank's for your message, i'll respond in 48h
                </Feedback>
              ) : (
                <Button type="submit">send</Button>
              )}
            </ContactForm>
          </FormContainer>
        </Content>
      </Container>
    )
  }
}

const Link = styled.a`
  font-size: 14px;
  margin-right: 2%;
  font-weight: 800;
  color: ${props => props.theme.primaryDark};
`

const Image = styled.img`
  cursor: pointer;
  height: 50px;
  opacity: 0.8;
`

const Feedback = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: rgb(175, 59, 59);
`

const Container = styled.div`
  margin-top: 15%;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  height: 90%;
  background: transparent;
  @media (max-width: 700px) {
    font-size: 7vw;
  }
`

const Heading = styled.h2`
  margin-top: 5%;
  color: ${props => props.theme.textPrimary};
  letter-spacing: 4px;
`

const Text = styled.p`
  font-size: 60%;
  margin: 4% 10% 5% 10%;
  font-weight: bold;
  color: ${props => props.theme.textPrimary};
`

const FormContainer = styled.fieldset`
  margin: 2%;
  padding: 0;
  border: none;
`

const Columns = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    width: 95%;
    flex-direction: column;
  }
`

const Column = styled.div`
  width: ${props => (props.half ? '50%' : 'default')};
  @media (max-width: 700px) {
    width: 95%;
    width: ${props => (props.half ? '100%' : '100%')};
  }
`

const Input = styled.input`
  box-shadow: 0px 0px 10px 2px rgba(36, 36, 36, 0.14);
  border: none;
  padding: 2%;
  height: 30px;
  width: 80%;
  border-radius: 5px;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const Message = styled.textarea`
  box-shadow: 0px 0px 10px 2px rgba(36, 36, 36, 0.14);
  padding: 2%;
  border-radius: 5px;
  width: 95%;
  height: 200px;
  resize: none;
  border: 0;
`

const Label = styled.label`
  font-size: 50%;

  margin: 5% 0 2% 0;

  float: left;
  font-weight: bold;
  color: ${props => props.theme.textPrimary};
  margin-left: ${props => (props.special ? '10%' : '3%')};
  letter-spacing: 2px;

  @media (max-width: 700px) {
    margin-left: 0%;
  }
`

const ContactForm = styled.form`
  width: 70%;
  margin: 20px auto 0;
  @media (max-width: 700px) {
    width: 99%;
  }
`

const Content = styled.div`
  margin-top: 17%;
  width: 50%;
  border-radius: 5px;
  border-bottom: 15px solid ${props => props.theme.primaryDark};
  box-shadow: 0px 0px 10px 2px rgba(36, 36, 36, 0.14);
  margin-bottom: 5%;
  background: ${props => props.theme.secondary};
  color: white;

  @media (max-width: 700px) {
    width: 95%;
    margin-bottom: 20%;
  }
`

const Button = styled.button`
  cursor: pointer;
  margin: 3% 0 3% 0;
  padding: 3%;
  float: right;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  min-width: 100px;
  background: white;
  box-shadow: 0px 0px 10px 2px rgba(36, 36, 36, 0.14);
  color: ${props => props.theme.textPrimary};

  :hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textSecondary};
  }
`
export default Contact
