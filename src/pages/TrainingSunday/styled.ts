import { Container } from "@mui/material";
import styled from "styled-components";

export const ContainerWeek = styled(Container)`
  margin-top: 100px;
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
