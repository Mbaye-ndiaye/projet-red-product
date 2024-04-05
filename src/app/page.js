"use client";
import React from "react";
import styled from "styled-components";
import Page from "./[hotel]/sidebarGauche/Page";
import Droite from "@/components/principal/droit/Droite";




export const PageContainer = styled.div`
   display: flex;
   padding: 0px;
   margin: 0px;
`;

export default function Home() {
  return (
    <PageContainer>
      <Page />
      <Droite />
    </PageContainer>
  );
}
