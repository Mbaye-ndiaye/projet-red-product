

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 25%;
  height: 20%;
  margin: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  justity-content: center;
  align-items: center;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.iconColor || 'lightgray'};
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Card = ({ iconSrc, title, description, iconColor }) => {
  return (
    <CardContainer >
      <IconContainer>
      <Icon iconSrc={iconSrc} alt="Icon" iconColor={iconColor} />
      </IconContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;

