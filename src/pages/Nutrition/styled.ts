import { Container } from "@mui/material";
import styled from "styled-components";

export const Title = styled.h1`
  color: #000;
  max-width: 480px;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 5px;
`;

export const Content = styled(Container)`
  margin-top: 100px;
`;

export const ContainerText = styled(Container)`
  background-color: #202124;
  border-radius: 10px;

  padding: 25px 0 25px 0;
`;

export const BoxText = styled.div`
  margin-top: 20px;
`;

export const BoxTextDry = styled.div`
  border-top: 1px solid #fff;
  margin-top: 15px;
`;

export const Text = styled.p`
  font-weight: 100;
`;

export const ContainerList = styled.ol`
  margin-top: 20px;
`;

export const ContentList = styled.li`
  margin: 15px 0 15px 0;
`;

export const Img = styled.img`
  max-width: 400px;
  min-width: 10px;
`;

export const ImgCutting = styled.img`
  max-width: 500px;
  min-width: 10px;
`;

export const ImgProteina = styled.img`
  max-width: 750px;
  min-width: 10px;
`;

export const BoxImg = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: center;
`;
