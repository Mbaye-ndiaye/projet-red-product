

import React from 'react';
import Card from './Card';
import { FaUsers } from "react-icons/fa";
import styled from 'styled-components';

const Carte = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const CardStyled = () => {
  return (
    <Carte>
        <Card  title="125 formulaire" iconSrc={FaUsers } description="Je ne sais pas quoi mettre"  iconColor="#A88ADD"/>
        <Card  title="40 Message" iconSrc={FaUsers } description="Je ne sais pas quoi mettre"      iconColor="RGB(95, 195, 171)"/>
        <Card  title="60 Utilisateur" iconSrc={FaUsers }description="Je ne sais pas quoi mettre"  iconColor="#E62E2D"/>
        <Card  title="25 Hotels" iconSrc={FaUsers } description="Je ne sais pas quoi mettre"      iconColor="#9C27B0"/>
        <Card  title="40 Hotels" iconSrc={FaUsers } description="Je ne sais pas quoi mettre"      iconColor="RGB(51, 102, 192)"/>
        <Card  title="02 Entite"  iconSrc={FaUsers } description="Je ne sais pas quoi mettre"     iconColor="#9C27B0"/>
       
    </Carte>
  );
};

export default CardStyled;

