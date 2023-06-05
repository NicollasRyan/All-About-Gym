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

export const ContainerText = styled(Container)`
  background-color: #202124;
  border-radius: 10px;

  padding: 25px 0 25px 0;
`;

export const LinkTraninig = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 45px;

  align-items: center;
`;

export const Img1 = styled.img`
  max-width: 550px;
`;

export const Img2 = styled.img`
  max-width: 400px;
  max-height: 450px;
`;
