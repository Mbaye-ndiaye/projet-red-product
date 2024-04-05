"use client"
import React from 'react';
import styled from 'styled-components';
import Corps from './Corps';
import Navbar from './Navbar';
import CardStyled from '../dashbord/CardStyled';





 export const DroiteContainer = styled.div`
   display: flex;
  flex-direction: column;
  margin-left: 20%;
  width: 83%;
  height: 100%;
  background-color: gray;
`;

 const Droite = () => {
  return (
    <DroiteContainer>
      <Navbar />
      <Corps />
      <CardStyled />
    </DroiteContainer>
  );
};

export default Droite;
