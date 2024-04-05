"use client"
import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRegBookmark } from "react-icons/fa";
import { Titre } from '../inscription/page';
 // Import de useRouter pour la redirection
import { useRouter } from 'next/navigation';
import axios from 'axios';




const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #494C4F;
`;

const TitleLog = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 34.17px;
  text-align: left;
`

const InputLog = styled.input`
  margin-bottom: 15px;
  height: 50px;
  left: 51px;

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
  padding: 12px;
  top: 826px;
  left: 747px;
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

const FormulaireLogin = () => {
    const [isChecked, setIsChecked] = useState(false);
     // Initialisation de useRouter
     const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const updateButtonDisabled = () => {
      if (formData.email.trim() !== "" && formData.password.trim() !== "") {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };
    useEffect(() => {
      updateButtonDisabled();
    }, [formData.email, formData.password]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:4000/api/auth/login", formData);
        console.log('response.data', response.data);
   
        // profileUser();
  
        // const from = location.state?.from || '/'; 
        // console.log(location);
        // if (from === '/inscription') {
          router.push('/'); 
        // } else {
        //   navigate(from); 
        // }
  
  
       
        
      } catch (error) {
        console.error(error);
         alert("Email ou mot de passe incorrect");
      } 
    };

  
    const handleCheckBoxChange = () => {
      setIsChecked(!isChecked);
    };
    
return (
    <ContainerForm>   
          <Titre>
        <FaRegBookmark />RED PRODUCT</Titre>  
        <FormLog onSubmit={handleSubmit}>
          <TitleLog>Connectez-vous en tant que Admin</TitleLog>
            <InputLog placeholder='E-mail'
            name='email'
            value={formData.email}
            onChange={handleChange}/>
            <InputLog placeholder='Mot de passe'
            name='password'
            value={formData.password}
            onChange={handleChange}/>
            <TitleLog>
              <InputCheckbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBoxChange}
              /> Gardez-moi connecté
            </TitleLog>
            <ButtonInscrire>Se Connecter</ButtonInscrire>
        </FormLog> 
        <Link href="/email">
        <Mdp>Mot de passe oublié?</Mdp>
        </Link>
        <Span>
            Vous n avez pas de compte?
            <Link href="/inscription">
                <Mdp>S inscrire</Mdp>
            </Link> 
        </Span>
    </ContainerForm>
  )
}

export default FormulaireLogin;
