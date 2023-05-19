import { Dialog, Button } from "@mui/material";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  ModalTitle,
  Checkbox,
  ModalContent,
  BoxTraining,
  ModalFooter,
} from "./styled";
import { WednesdayContext } from "../../../../context/wednesdayContext";

type FunctioType = {
  openBiceps: boolean;
  handleClose: () => void;
};

export function Biceps({ openBiceps, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(WednesdayContext);

  const [dumbbellThread, setDumbbellThread] = useState("");
  const [dumbbellHammer, setDumbbellHammer] = useState("");
  const [wBar, setWBar] = useState("");
  const [threadRoper, setThreadRoper] = useState("");
  const [inclineBenchThread, setInclineBenchThread] = useState("");
  const [scottBank, setScottBank] = useState("");
  const [concentratedThread, setConcentratedThread] = useState("");

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      biceps: "Biceps",
      dumbbellThread,
      dumbbellHammer,
      wBar,
      threadRoper,
      inclineBenchThread,
      scottBank,
      concentratedThread,
    });

    handleClose();
  }

  return (
    <Dialog open={openBiceps} onClose={handleClose}>
      <ModalTitle>Monte seu Treino De Biceps </ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalContent>
          <BoxTraining>
            Rosca direta com halteres
            <Checkbox
              type="checkbox"
              value="Rosca direta com halteres"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDumbbellThread(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Martelo
            <Checkbox
              type="checkbox"
              value="Martelo"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDumbbellHammer(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Rosca barra W
            <Checkbox
              type="checkbox"
              value="Rosca barra W"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setWBar(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Rosca corda
            <Checkbox
              type="checkbox"
              value="Rosca corda"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setThreadRoper(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Rosca com halteres no banco inclinado
            <Checkbox
              type="checkbox"
              value="Rosca com halteres no banco inclinado"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInclineBenchThread(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Banco scott
            <Checkbox
              type="checkbox"
              value="Banco scott"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setScottBank(e.target.value)
              }
            />
          </BoxTraining>
          <BoxTraining>
            Rosca bíceps concentrada
            <Checkbox
              type="checkbox"
              value="Rosca bíceps concentrada"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConcentratedThread(e.target.value)
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
