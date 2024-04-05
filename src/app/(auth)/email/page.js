"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBookmark } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #555555;
`;

const Entete = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const EnteteIcon = styled.p`
  color: white;
  padding-top: 3px;
`;

const EnteteTitre = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 800;
`;

const Bas = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const BasText = styled.p`
  display: flex;
  gap: 20px;
  color: white;
`;

const BasLien = styled.a`
  display: flex;
  gap: 20px;
  color: #FFD964;
  text-decoration: none;
`;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  margin-bottom: 20px;
`;

const Texte = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;


const Input = styled.input`
  width: 95%;
  margin: auto;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #55595C;
  background: none;
  outline: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #555555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MotDePasseOublie = () => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  // router.push('/connexion');
  return (
    <Container>
      <Entete>
        <EnteteIcon>
            <FaBookmark />
        </EnteteIcon>
        <EnteteTitre>
            RED PRODUCT
        </EnteteTitre>
      </Entete>
      <FormContainer>
        <Title>Mot de passe oublié ?</Title>
        <Texte>
            Entrez votre adresse e-mail ci-dessous et
            nous vous envoyons des instructions sur la
            façon de modifier votre mot de passe
        </Texte>
        <Form>
          <FormGroup>
            <Input type="email" id="email" name="email" placeholder='E-mail' />
          </FormGroup>
          <Button type="submit">Envoyer</Button>
        </Form>
      </FormContainer>
      <Bas>
        <BasText>Revenir à la </BasText>
        <BasLien href="/connexion">
            connexion
        </BasLien>
      </Bas>
    </Container>
  );
};

export default MotDePasseOublie;

