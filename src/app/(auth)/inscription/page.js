"use client"
import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRegBookmark } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import axios from 'axios';






const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #494C4F;
`;

const TitleLog = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 34.17px;
  text-align: left;
`

const InputLog = styled.input`
  margin-bottom: 0px;
  height: 30px;
  left: 51px;
  gap: 0px;
  border: none;
  background: none;
  border-bottom: 1px solid #55595C;
  color: #55595C;
  font-size: 18px;
  outline: none;
`

const InputCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 6px;
  
`

const ButtonInscrire = styled.button`
  width: Hug (178px)px;
  top: 826px;
  left: 747px;
  padding: 12px;
  gap: 10px;
  border-radius: 7px;
  border: none;
  opacity: 0px;
  background: #555555;
  color: #FFFFFF;
  font-weight: bold;
`;

const FormLog = styled.form`
  display: flex;
  width: 350px;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background: white;
`;

const Mdp = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #FFD964;
  cursor: pointer;
  text-decoration: none;
`;

const Span = styled.p`
    display: flex;
    gap: 8px;
    font-size: 14px;
`;

 export const Titre = styled.h1`
color: white;
`

const FormulaireInsc = () => {
  // const location = useLocation();
  
  const [isChecked, setIsChecked] = useState(false);
      // Initialisation du router de Next.js
  const router = useRouter();
    const [formData, setFormData] = useState({
      nom: "",
      email: "",
      password: "",
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };


  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  // const handleSubmit = async (e) => {
  //   console.log('reussir', e);
  //   const userData = { nom, email, password };
  //     e.preventDefault();
  //     try {
  //       const response =  await axios.post('http://localhost:4000/api/signup', userData);
  //         setUserData(response.data)
  //         console.log("Inscription réussie !", response.data);
  //         router.push('/connexion'); // Redirection vers la page de connexion
  //     } catch (error) {
  //         console.error("Erreur lors de l'inscription :", error.message);
  //         // Afficher un message d'erreur à l'utilisateur ou toute autre logique de gestion d'erreur
  //     }
  // };

  const updateButtonDisabled = () => {
    if (
      formData.nom.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    updateButtonDisabled();
  }, [formData.email, formData.password]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/auth/signup", formData);
      
       router.push("/connexion");
      console.log('inscription reussir', response.data);
      alert('inscription reussi !')
    } catch (error) {
      console.log("Erreur lors de l'inscription :", error.message);
    } 
  };


  return (
      <ContainerForm>
          <Titre>
              <FaRegBookmark />RED PRODUCT</Titre>
          <FormLog onSubmit={handleSubmit}>
              <TitleLog>Inscrivez-vous en tant que Admin</TitleLog>
              <InputLog 
                  type="text"
                  name="nom"
                  autocomplete="current-nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder='Nom'
              />
              <InputLog 
                  type="email"
                  name="email"
                  autocomplete="current-email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='E-mail'
              />
              <InputLog 
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Mot de passe'
              />
              <TitleLog>
                  <InputCheckbox
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckBoxChange}
                  /> Accepter les termes de la politique
              </TitleLog>

              <ButtonInscrire type="submit">S inscrire</ButtonInscrire>

          </FormLog>
          <Span>
              Vous avez déjà un compte?
            <Link href="/connexion">
                  <Mdp>Se connecter</Mdp>
              </Link>
          </Span>
      </ContainerForm>
  );
};

export default FormulaireInsc;

