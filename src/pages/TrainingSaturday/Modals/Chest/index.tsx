import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { DialogActions, Button, Dialog } from "@mui/material";

import {
  ModalTitle,
  ModalContent,
  BoxTraining,
  Checkbox,
  ModalFooter,
} from "./styled";

import { SaturdayContext } from "../../../../context/saturdayContext";

type FunctioType = {
  openChest: boolean;
  handleClose: () => void;
};

export function Chest({ openChest, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(SaturdayContext);

  const [benchPress, setBenchPress] = useState("");
  const [inclineBenchPress, setInclineBenchPress] = useState("");
  const [peckDeck, setPeckDeck] = useState("");
  const [benchPressSitting, setBenchPressSitting] = useState("");
  const [highCrossOver, setHighCrossOver] = useState("");
  const [crossOverMedium, setCrossOverMedium] = useState("");
  const [crossOverBass, setCrossOverBass] = useState("");

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      chest: "Peito",
      benchPress,
      inclineBenchPress,
      peckDeck,
      benchPressSitting,
      highCrossOver,
      crossOverMedium,
      crossOverBass,
    });

    handleClose();
  }

  return (
    <Dialog open={openChest} onClose={handleClose}>
      <ModalTitle>Monte seu Treino De Peito (Chest Day)</ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalContent>
          <BoxTraining>
            Supino com barra ou halteres
            <Checkbox
              type="checkbox"
              value="Supino com barra ou halteres"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBenchPress(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Supino inclinado barra ou halteres
            <Checkbox
              type="checkbox"
              value="Supino inclinado barra ou halteres"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInclineBenchPress(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Crucifixo no voador
            <Checkbox
              type="checkbox"
              value="Crucifixo no voador"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPeckDeck(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Supino sentado maquina
            <Checkbox
              type="checkbox"
              value="Supino sentado maquina"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBenchPressSitting(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Cross over alto
            <Checkbox
              type="checkbox"
              value="Cross over alto"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHighCrossOver(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Cross over Medio
            <Checkbox
              type="checkbox"
              value="Cross over Medio"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCrossOverMedium(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Cross over baixo
            <Checkbox
              type="checkbox"
              value="Cross over baixo"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCrossOverBass(e.target.value)
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
