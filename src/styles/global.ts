import { createGlobalStyle } from "styled-components";
import { Container } from "@mui/material";
import styled from "styled-components";

import gym from "../img/gym.jpg";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
}

body {
    background-image: url(${gym}); 
     background-size: cover;
}
`;

export const ContainerWeek = styled(Container)`
  margin-top: 100px;
  height: 800px;

  background: #202124;
  padding: 30px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  color: black;
  max-width: 550px;
  background-color: white;
  border-radius: 5px;
`;

export const Title2 = styled.h1`
  color: black;
  max-width: 480px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 5px;
`;

export const ContentWorkouts = styled.div`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin-top: 20px;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  color: #000;
  font-size: 15px;

  cursor: pointer;
  :hover {
    transition: 1s;
    background-color: #b7b7b7;
  }
`;
