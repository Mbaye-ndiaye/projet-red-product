import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';
import Card from './CartHotel';

const ContainerCard = styled.section`                                                                                                                                                                                                                                                                                                                                  
  display: flex;
  flex-wrap: wrap;  
  padding: 12px;   
`;

const HotelCard = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/hotel");
      setHotels(response.data);
      console.log('hotels', response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des donnees:', error);
    }
  };

  return (
    <ContainerCard>
      {/* <HotelFormModal /> */}
      {hotels.map((hotel, index) => (
        <Card
          key={index}
          imageUrl={hotel.imageUrl}
          nom={hotel.nom}
          adresse={hotel.adresse}
          prix={hotel.prix}
          devise={hotel.devise}
        />
      ))}
    </ContainerCard>
  );
};

export default HotelCard;
