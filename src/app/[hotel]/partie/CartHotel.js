


import React from 'react';
import styled from 'styled-components';

// Styled components for the card
const CardContainer = styled.div`
  margin: 7px;
  width: 220px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 12px;
`;

const CardTitle = styled.h3`
  margin: 0;
  text-align: center;
  color: #8D4B38;
  ;
`;

const CardText = styled.p`
  margin: 4px ;
`;

const CardAddress = styled.p`
  margin: 5px 0 0;
  color: #888;
`;

// Card component
const Card = ({ imageUrl, nom, prix, devise, adresse }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={''} />
        <CardTitle>{nom}</CardTitle>
        <CardTitle>{adresse}</CardTitle>
      <CardContent>
        <CardText>{prix}</CardText>
        <CardAddress>{devise} par nuit</CardAddress>
      </CardContent>
    </CardContainer>
  );
};

export default Card;




