import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const CorpsContainer = styled.div`
    background-color: #f0f0f0;
    color: #55595C;
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    height: 100%;
    
`;

const Corps = () => {
  return (
    <CorpsContainer>
      <p>Bienvenue sur RED Product <br></br>
      <span>Lorem ipsum dolor sit amet consectetur</span></p>
    </CorpsContainer>
  );
};

export default Corps;
