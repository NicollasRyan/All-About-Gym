import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Button, Dialog } from "@mui/material";

import {
  ModalTitle,
  ModalContent,
  BoxTraining,
  Checkbox,
  ModalFooter,
} from "./styled";

import { SundayContext } from "../../../../context/sundayContext";

type FunctioType = {
  openTriceps: boolean;
  handleClose: () => void;
};

export function Triceps({ openTriceps, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(SundayContext);

  const [triceps, setTriceps] = useState("Triceps");

  const [barTriceps, setBarTriceps] = useState("");
  const [ropeTriceps, setRopeTriceps] = useState("");
  const [french, setFrench] = useState("");
  const [closedBenchPress, setClosedBenchPress] = useState("");
  const [forehead, setForehead] = useState("");
  const [foreheadPulley, setForeheadPulley] = useState("");

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      triceps: "triceps",
      barTriceps,
      ropeTriceps,
      french,
      closedBenchPress,
      forehead,
      foreheadPulley,
    });

    handleClose();
  }

  return (
    <Dialog open={openTriceps} onClose={handleClose}>
      <ModalTitle>Monte seu Treino De Triceps (Back Day)</ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalContent>
          <BoxTraining>
            Triceps barra
            <Checkbox
              type="checkbox"
              value="Triceps barra"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBarTriceps(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Triceps corda
            <Checkbox
              type="checkbox"
              value="Triceps corda"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRopeTriceps(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            frances com halter ou polia
            <Checkbox
              type="checkbox"
              value="frances com halter ou polia"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFrench(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Supino fechado
            <Checkbox
              type="checkbox"
              value="Supino fechado"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setClosedBenchPress(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Testa com halteres ou barra
            <Checkbox
              type="checkbox"
              value="Testa com halteres ou barra"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForehead(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Testa na polia
            <Checkbox
              type="checkbox"
              value="Testa na polia"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForeheadPulley(e.target.value)
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
