import { Container } from "@mui/material";
import styled from "styled-components";

export const Body = styled.body`
  background-color: #202124;
`;

export const ContainerHome = styled(Container)`
  margin-top: 100px;

  background-color: #202124;
  padding: 155px 0 155px 0;
  border-radius: 5px;
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  margin-right: 150px;
`;

export const Img = styled.img`
  width: 250px;
`;

export const ContainerText = styled.div`
  text-align: center;
`;

export const SmallCard = styled.div`
  margin-top: 15px;
  max-width: 430px;
  max-height: 200px;
`;

export const Text = styled.p`
  font-size: 25px;
`;
