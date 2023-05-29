import { Button, Dialog } from "@mui/material";
import { ModalFooter, ModalTitle } from "./styled";
import { FormEvent, useContext } from "react";
import { WednesdayContext } from "../../../../context/wednesdayContext";

type FunctioType = {
  openRest: boolean;
  handleClose: () => void;
};

export function Rest({ openRest, handleClose }: FunctioType) {
  const { createTrainingWeeks } = useContext(WednesdayContext);

  async function handleCreateWorkout(e: FormEvent) {
    e.preventDefault();

    await createTrainingWeeks({
      rest: "Descanso",
    });

    handleClose();
  }

  return (
    <Dialog open={openRest} onClose={handleClose}>
      <ModalTitle>Esse sera seu dia de descanso</ModalTitle>
      <form onSubmit={handleCreateWorkout}>
        <ModalFooter>
          <Button onClick={handleClose}>Cancalar</Button>
          <Button type="submit">Descanso</Button>
        </ModalFooter>
      </form>
    </Dialog>
  );
}
