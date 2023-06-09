import { Container } from "@mui/material";
import styled from "styled-components";

export const ContainerWeek = styled(Container)`
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
`;
export const BoxTitle = styled.div``;

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

export const ContentButtons = styled.div``;
