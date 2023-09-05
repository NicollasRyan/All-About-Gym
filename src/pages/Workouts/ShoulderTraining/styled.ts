import { Container } from "@mui/material";
import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 50px;
`;

export const Content = styled(Container)`
  padding-top: 100px;
`;

export const ContainerText = styled(Container)`
  background-color: #202124;
  border-radius: 10px;

  padding: 25px 0 25px 0;
`;

export const BoxText = styled.div`
  margin-top: 20px;
`;

export const Text = styled.p`
  font-weight: 100;
`;

export const ContainerList = styled.ul`
  margin-top: 20px;
`;

export const ContentList = styled.li`
  padding: 8px 0 8px 0;
`;

export const Img = styled.img`
  max-width: 400px;
  max-height: 350px;
`;
