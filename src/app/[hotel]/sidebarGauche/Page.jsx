
"use client"
import React from 'react';
import styled from 'styled-components';
import { MdDashboard } from "react-icons/md"
import { FaHotel } from "react-icons/fa"
import Link from 'next/link';


const SidebarContainer = styled.div`
  width: 17%;
  height: 100vh;
  background-color: #494D4F;
  color: #fff;
  padding: 20px;
  position: fixed;
 
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  padding-top: 10px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

 export const IconWrapper = styled.div`
  margin-right: 10px;
`;

const ContaineFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`
const Bootm = styled.p`
border-top: 2px solid white;
text-align: end;
width: 500px;
padding-top: 12px
`
const Roudn = styled.p`
 padding-top: 5px;
width: 40px;
height: 40px;
border-radius: 50%;
// background-color: blue;
padding-top: 12px`

 const Page = () => {
  return (
  
      <SidebarContainer>
        <h2>RED PRODUCT</h2>
       
        <p>Principale</p>
          
        <div>
        <Link href='/'>

          <SidebarItem>
              <IconWrapper>
                <MdDashboard />
              </IconWrapper>
              Dashboard
          </SidebarItem>
          </Link>
        <Link href='/hotel'>
         
          <SidebarItem>
              <IconWrapper>
                <FaHotel />
              </IconWrapper>
              Liste des Hôtels
          </SidebarItem>
          
          </Link>
        </div>
        <ContaineFooter>
          <Roudn>me</Roudn>
          <Bootm>En ligne</Bootm>
          
        </ContaineFooter>
      </SidebarContainer>
   
  );
};

 export default Page;
