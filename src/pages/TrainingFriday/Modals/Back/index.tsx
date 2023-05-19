import { DialogActions, Button, Dialog } from "@mui/material";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  ModalTitle,
  ModalContent,
  BoxTraining,
  Checkbox,
  ModalFooter,
} from "./styled";
import { FridayContext } from "../../../../context/fridayContext";

type FunctioType = {
  openBack: boolean;
  handleClose: () => void;
};

export function Back({ openBack, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(FridayContext);

  const [back, setBack] = useState("");

  const [frontHighPull, setFrontHighPull] = useState("");
  const [benchRow, setBenchRow] = useState("");
  const [pullclosed, setPullclosed] = useState("");
  const [pullTriangle, setPullTriangle] = useState("");
  const [lowRow, setLowRow] = useState("");
  const [rowingHorse, setRowingHorse] = useState("");
  const [handsaw, setHandsaw] = useState("");
  const [pulldown, setPulldown] = useState("");
  const [earth, setEarth] = useState("");
  const [bentOverRow, setBentOverRow] = useState("");

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      back: "Costa",
      bentOverRow,
      frontHighPull,
      benchRow,
      pullclosed,
      pullTriangle,
      lowRow,
      rowingHorse,
      handsaw,
      pulldown,
      earth,
    });

    handleClose();
  }

  return (
    <Dialog open={openBack} onClose={handleClose}>
      <ModalTitle>Monte seu Treino De Costa (Back Day)</ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalContent>
          <BoxTraining>
            Puxada alta frontal
            <Checkbox
              type="checkbox"
              value="Puxada alta frontal"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFrontHighPull(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            remada no banco 45º com halteres
            <Checkbox
              type="checkbox"
              value="remada no banco 45º com halteres"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBenchRow(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Puxada pegada supinada fechada
            <Checkbox
              type="checkbox"
              value="Puxada pegada supinada fechada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPullclosed(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Puxada triângulo
            <Checkbox
              type="checkbox"
              value="Puxada triângulo"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPullTriangle(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Remada curvada
            <Checkbox
              type="checkbox"
              value="Remada curvada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBentOverRow(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Remada baixa com a barra ou triângulo
            <Checkbox
              type="checkbox"
              value="Remada baixa com a barra ou triângulo"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLowRow(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Remada cavalinho
            <Checkbox
              type="checkbox"
              value="Remada cavalinho"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRowingHorse(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Serrote
            <Checkbox
              type="checkbox"
              value="Serrote"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHandsaw(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Pulldown
            <Checkbox
              type="checkbox"
              value="Pulldown"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPulldown(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Levantamento terra
            <Checkbox
              type="checkbox"
              value="Levantamento terra"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEarth(e.target.value)
              }
            />
          </BoxTraining>
        </ModalContent>
        <ModalFooter>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </ModalFooter>
      </form>
    </Dialog>
  );
}
