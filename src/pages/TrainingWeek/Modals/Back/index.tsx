import { Dialog, DialogTitle, DialogActions, Button, Box } from "@mui/material";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  ModalTitle,
  Checkbox,
  ModalContent,
  ModalContainer,
  BoxTraining,
} from "./styled";
import { api } from "../../../../services/api";
import { WorkoutContext } from "../../../../context/workoutContext";

type FunctioType = {
  openBack: boolean;
  handleClose: () => void;
};

export function Back({ openBack, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(WorkoutContext);

  const [bentOverRow, setBentOverRow] = useState("");
  const [pull, setPull] = useState("");

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      pull,
      bentOverRow,
    });

    handleClose();
    setBentOverRow("");
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBentOverRow(e.target.value);
  };
  const handleCheckboxChangePull = (e: ChangeEvent<HTMLInputElement>) => {
    setPull(e.target.value);
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
              onChange={handleCheckboxChangePull}
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
