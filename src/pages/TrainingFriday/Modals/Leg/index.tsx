import { DialogActions, Button, Dialog } from "@mui/material";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  ModalTitle,
  Checkbox,
  ModalContent,
  BoxTraining,
  ModalFooter,
} from "./styled";
import { FridayContext } from "../../../../context/fridayContext";

type FunctioType = {
  openLeg: boolean;
  handleClose: () => void;
};

export function Leg({ openLeg, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(FridayContext);

  const [barbellSquat, setBarbellSquat] = useState("");
  const [sink, setSink] = useState("");
  const [rack, setRack] = useState("");
  const [legPress, setLegPress] = useState("");
  const [bugaro, setBugaro] = useState("");
  const [flexorTable, setFlexorTable] = useState("");
  const [flexorChair, setFlexorChair] = useState("");
  const [extensionChair, setExtensionChair] = useState("");
  const [abductor, setAbductor] = useState("");
  const [adductor, setAdductor] = useState("");
  const [pelvicElevation, setPelvicElevation] = useState("");
  const [kick, setKick] = useState("");

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      leg: "Perna",
      barbellSquat,
      sink,
      rack,
      legPress,
      bugaro,
      flexorTable,
      flexorChair,
      extensionChair,
      abductor,
      adductor,
      pelvicElevation,
      kick,
    });

    handleClose();
  }

  return (
    <Dialog open={openLeg} onClose={handleClose}>
      <ModalTitle>Monte seu Treino De Perna (Leg Day)</ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalContent>
          <BoxTraining>
            Agachamento com barra
            <Checkbox
              type="checkbox"
              value="Agachamento com barra"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBarbellSquat(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Afundo com halteres
            <Checkbox
              type="checkbox"
              value="Afundo com halteres"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSink(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Rack
            <Checkbox
              type="checkbox"
              value="Rack"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRack(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Leg Press
            <Checkbox
              type="checkbox"
              value="Leg Press"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLegPress(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Bugaro
            <Checkbox
              type="checkbox"
              value="Bugaro"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBugaro(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Mesa flexora
            <Checkbox
              type="checkbox"
              value="Mesa flexora"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFlexorTable(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Cadeira flexora
            <Checkbox
              type="checkbox"
              value="Cadeira flexora"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFlexorChair(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Cadeira extensora
            <Checkbox
              type="checkbox"
              value="Cadeira extensora"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setExtensionChair(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Abdutora
            <Checkbox
              type="checkbox"
              value="Abdutora"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAbductor(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Adutora
            <Checkbox
              type="checkbox"
              value="Adutora"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAdductor(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Elevação pelvica
            <Checkbox
              type="checkbox"
              value="Elevação pelvica"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPelvicElevation(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Coice
            <Checkbox
              type="checkbox"
              value="Coice"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setKick(e.target.value)
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
