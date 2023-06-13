import { createGlobalStyle } from "styled-components";

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
