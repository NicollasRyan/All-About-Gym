import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import styled from "styled-components";

export const BoxModal = styled(DialogContent)`
  color: #000;
  background-color: #e0e0e0;
`;

export const ModalTitle = styled(DialogTitle)`
  color: #000;
  background-color: #e0e0e0;
  border-bottom: 0.1px solid;
`;

export const ContentWorkouts = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ButtonModal = styled.button`
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
