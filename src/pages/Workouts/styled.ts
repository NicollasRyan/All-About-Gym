import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
  color: #000;
  max-width: 670px;
  background-color: white;
  margin-bottom: 50px;
`;

export const Content = styled(Container)`
  margin-top: 100px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #202124;
  border-radius: 10px;

  padding: 25px 0 25px 0;
`;

export const LinkTraninig = styled(Link)`
  display: flex;
  flex-direction: column;

  margin-bottom: 45px;
  margin-left: 50px;

  align-items: center;
  margin-right: 20px;
  text-decoration: none;

  background-color: #595959;

  padding: 70px;
  border-radius: 10px;

  &:hover {
    transition: 0.5s;
    color: #d6d6d6;
    background-color: #383838;
  }
`;

export const Div = styled.div`
  display: flex;
`;
