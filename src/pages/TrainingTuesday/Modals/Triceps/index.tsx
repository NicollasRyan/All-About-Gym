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
  openTriceps: boolean;
  handleClose: () => void;
};

export function Triceps({ openTriceps, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(TuesdayContext);

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
              value="remada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBarTriceps(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Triceps corda
            <Checkbox
              type="checkbox"
              value="puxada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRopeTriceps(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            frances com halter ou polia
            <Checkbox
              type="checkbox"
              value="puxada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFrench(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Supino fechado
            <Checkbox
              type="checkbox"
              value="puxada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setClosedBenchPress(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Testa com halteres ou barra
            <Checkbox
              type="checkbox"
              value="puxada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setForehead(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Testa na polia
            <Checkbox
              type="checkbox"
              value="puxada"
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
