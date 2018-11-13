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
            <ListItem>{item}</ListItem>
          ))}
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  border-radius: 5px;
  border-bottom: 15px solid ${props => props.theme.primary};
  margin: 2%;
  padding: 3%;
  min-width: 28%;
  height: 400px;
  background: ${props => props.theme.secondary};
  box-shadow: 0px 0px 20px 10px rgba(34, 25, 10, 0.12);
  color: ${props => props.theme.primary};
  @media (max-width: 700px) {
    margin: 0;
    margin-bottom: 8%;
  }
`;

const CardTitle = styled.section`
  font-size: 25px;
  padding-bottom: 5%;
  color: white;
`;

const CardContent = styled.section`
  font-weight: 300;
  color: ${props => props.theme.textPrimary};
  font-size: 0.8rem;
  padding-bottom: 5%;
`;

const Heading3 = styled.h3`
  padding-top: 10%;
  color: rgb(0, 0, 0);
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
  color: white;
`;

const ListItem = styled.li`
  text-align: center;
  padding-bottom: 5%;
`;
