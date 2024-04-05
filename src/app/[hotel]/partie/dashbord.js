import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Bar = styled.div`
  display: flex;
  background: #FFFFFF;
  height: 75px;
  border-bottom: 2px solid #F0F0F0;
  padding-left: 25px;
  padding-right: 25px;
  flex-direction: row;
  align-items: center;
 justify-content: space-between;

`;

const Dashboard = styled.p`
  font-size: 26.66px;
  font-weight: 500;
  line-height: 74.66px;
  text-align: left;
`
const DivIcone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  font-size: 16px;
`

const SearchInput = styled.input`
  font-size: 16px;
  padding: 8px 12px 8px 40px; 
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 220px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px 50%; 
  background-size: 20px 20px;

  ::placeholder {
    color: #aaa;
  }
`;

const DivProfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: blue;
  font-size: 15px
`


const dashboard = () => {
  return (
    <Bar>
          <Dashboard>Liste des hôtels </Dashboard>
            <DivIcone>
              <SearchInput placeholder="Recherche..." />
              <IoIosNotifications />
              <DivProfil>Me</DivProfil>
              <FaArrowRightFromBracket />
            </DivIcone>
      </Bar>
  );
};

export default dashboard;


