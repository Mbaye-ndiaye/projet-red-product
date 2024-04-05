"use client"
import React from 'react'
import HotelCard from './partie/HotelCard';
import Input from './partie/Input';
import Page from './sidebarGauche/Page';
import { PageContainer } from '../page';
import { DroiteContainer } from '@/components/principal/droit/Droite';
import Navbar from '@/components/principal/droit/Navbar';






const Hotel = () => {
  return (
    <div>
      <PageContainer>
        <DroiteContainer>
        <Navbar />
        <Input />
        <HotelCard  />
        </DroiteContainer>
        <Page />
      </PageContainer>
    </div>
  )
}

export default Hotel
