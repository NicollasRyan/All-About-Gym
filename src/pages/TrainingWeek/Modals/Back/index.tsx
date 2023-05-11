import { Dialog, DialogTitle, DialogActions, Button, Box } from "@mui/material";
import { workoutContext } from "../../../../context/workoutContext";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  ModalTitle,
  Checkbox,
  ModalContent,
  ModalContainer,
  BoxTraining,
} from "./styled";

type FunctioType = {
  openBack: boolean;
  handleClose: () => void;
};

export function Back({ openBack, handleClose }: FunctioType) {
  const [training, setTraining] = useState("");
  const { workout } = useContext(workoutContext);

  const handleCreateWorkout = (e: FormEvent) => {
    e.preventDefault();

    handleClose();
    setTraining("");

    console.log(training);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTraining(e.target.value);
  };

  return (
    <ModalContainer open={openBack} onClose={handleClose}>
      <ModalTitle>Monte seu Treino De Costa (Back Day)</ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalContent>
          <BoxTraining>
            Remada
            <Checkbox
              type="checkbox"
              value="remada"
              onChange={handleCheckboxChange}
            />
          </BoxTraining>
          <BoxTraining>
            Puxada
            <Checkbox
              type="checkbox"
              value="puxada"
              onChange={handleCheckboxChange}
            />
          </BoxTraining>
        </ModalContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </DialogActions>
      </form>
    </ModalContainer>
  );
}
