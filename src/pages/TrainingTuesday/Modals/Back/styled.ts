import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import styled from "styled-components";

export const ModalTitle = styled(DialogTitle)`
  color: #000;
  background-color: #e0e0e0;
  border-bottom: 0.1px solid;
`;

export const Checkbox = styled.input`
  margin-left: 10px;
  width: 18px;
  height: 18px;
`;

export const Text = styled.p`
  color: #000;
`;

export const ModalContent = styled(DialogContent)`
  color: #000;
  background-color: #e0e0e0;
`;

export const BoxTraining = styled.div`
  font-size: 18px;
  margin: 5px 0 10px 0;
  color: #000;
`;

export const ModalFooter = styled(DialogActions)`
  background-color: #e0e0e0;
`;
