import { DialogActions, Button, Dialog } from "@mui/material";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  ModalTitle,
  Checkbox,
  ModalContent,
  BoxTraining,
  ModalFooter,
} from "./styled";
import { TuesdayContext } from "../../../../context/tuesdayContext";

type FunctioType = {
  openShoulder: boolean;
  handleClose: () => void;
};

export function Shoulder({ openShoulder, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(TuesdayContext);

  const [sideRaise, setSideRaise] = useState("");
  const [frontElevation, setFrontElevation] = useState("");
  const [development, setDevelopment] = useState("");
  const [arnoldDevelopment, setArnoldDevelopment] = useState("");
  const [crossLateralRaise, setCrossLateralRaise] = useState("");
  const [inclinedLateralRaise, setInclinedLateralRaise] = useState("");
  const [reverseCrucifix, setReverseCrucifix] = useState("");

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      sholder: "Ombro",

      sideRaise,
      frontElevation,
      development,
      arnoldDevelopment,
      crossLateralRaise,
      inclinedLateralRaise,
      reverseCrucifix,
    });

    handleClose();
  }

  return (
    <Dialog open={openShoulder} onClose={handleClose}>
      <ModalTitle>Monte seu Treino De Ombro (Back Day)</ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalContent>
          <BoxTraining>
            Elevação lateral
            <Checkbox
              type="checkbox"
              value="Elevação lateral"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSideRaise(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Elevação frontal
            <Checkbox
              type="checkbox"
              value="Elevação frontal"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFrontElevation(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Desenvolvimento
            <Checkbox
              type="checkbox"
              value="Desenvolvimento"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDevelopment(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Desenvolvimento arnold
            <Checkbox
              type="checkbox"
              value="Desenvolvimento arnold"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setArnoldDevelopment(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Elevação Lateral no cross ou polia
            <Checkbox
              type="checkbox"
              value="Elevação Lateral no cross ou polia"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCrossLateralRaise(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Elevação lateral inclinado
            <Checkbox
              type="checkbox"
              value="Elevação lateral inclinado"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInclinedLateralRaise(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Crucifixo inverso na maquina ou com halteres
            <Checkbox
              type="checkbox"
              value="Crucifixo inverso"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setReverseCrucifix(e.target.value)
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
