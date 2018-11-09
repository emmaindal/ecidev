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
  border-radius: 20px;
  margin: 2%;
  padding: 3%;
  width: 300px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0px 0px 20px 2px rgba(73, 70, 72, 0.39);
  color: ${props => props.theme.primary};
  @media (max-width: 700px) {
    margin: 0;
    margin-bottom: 8%;
  }
`;

const CardTitle = styled.section`
  padding-bottom: 5%;
`;

const CardContent = styled.section`
  color: ${props => props.theme.textSecondary};
  font-size: 0.8rem;
  padding-bottom: 5%;
`;

const Heading3 = styled.h3`
  padding-top: 10%;
  color: rgb(50, 101, 214);
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
`;

const ListItem = styled.li`
  text-align: center;
  padding-bottom: 5%;
`;
