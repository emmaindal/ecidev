import React from "react";
import styled from "styled-components";

const Card = ({ title, content, heading3, listitems }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <p>{content}</p>
        <Heading3>{heading3}</Heading3>
        <List>
          {listitems.map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </CardContent>
      <CardFooter>
        <Button> My Work </Button>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  font-size: 1vw;
  font-weight: bold;
  border-radius: 5px;
  border-bottom: 15px solid ${props => props.theme.primaryDark};
  margin: 2%;
  padding: 3%;
  min-width: 28%;
  max-height: 60%;
  background: ${props => props.theme.secondary};
  box-shadow: 0px 0px 20px 10px rgba(34, 25, 10, 0.12);
  color: ${props => props.theme.textPrimary};

  @media (max-width: 700px) {
    font-size: 4.5vw;
    margin: 0;
    margin-bottom: 8%;
  }
`;

const CardTitle = styled.h1`
  padding-bottom: 5%;
  color: ${props => props.theme.primaryDark};
`;

const CardContent = styled.div`
  height: 70%;
  font-weight: bold;
  color: ${props => props.theme.textPrimary};
  padding-bottom: 5%;
`;

const CardFooter = styled.div`
  height: 20%;
  margin-top: 10%;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 5%;
  width: 100px;
  border: none;
  background: ${props => props.theme.primary};
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px rgba(84, 84, 84, 0.12);
  color: ${props => props.theme.textSecondary};
`;

const Heading3 = styled.h3`
  padding-top: 10%;
  color: ${props => props.theme.primaryDark};
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.textPrimary};
`;

const ListItem = styled.li`
  text-align: center;
  padding-bottom: 5%;
`;
