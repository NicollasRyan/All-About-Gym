import { useContext, useState } from "react";

import { Button, Dialog, DialogActions } from "@mui/material";

import { ContentWorkouts, BoxModal, ButtonModal, ModalTitle } from "./styled";

import { ThursdayContext } from "../../../../context/thursdayContext";

import { Shoulder } from "../Shoulder";
import { Chest } from "../Chest";
import { Back } from "../Back";
import { Triceps } from "../Triceps";
import { Biceps } from "../Biceps";
import { Leg } from "../Leg";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export function AddTraining({ open, handleClose }: ModalProps) {
  const { trainingWeeks } = useContext(ThursdayContext);

  const [openShoulder, setOpenShoulder] = useState(false);
  const [openChest, setOpenChest] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [openTriceps, setOpenTriceps] = useState(false);
  const [openBiceps, setOpenBiceps] = useState(false);
  const [openLeg, setOpenLeg] = useState(false);

  const handleOpenShoulder = () => setOpenShoulder(true);
  const handleOpenChest = () => setOpenChest(true);
  const handleOpenBack = () => setOpenBack(true);
  const handleOpenTriceps = () => setOpenTriceps(true);
  const handleOpenBiceps = () => setOpenBiceps(true);
  const handleOpenLeg = () => setOpenLeg(true);

  const handleCloseShoulder = () => setOpenShoulder(false);
  const handleCloseChest = () => setOpenChest(false);
  const handleCloseBack = () => setOpenBack(false);
  const handleCloseTriceps = () => setOpenTriceps(false);
  const handleCloseBiceps = () => setOpenBiceps(false);
  const handleCloseLeg = () => setOpenLeg(false);

  return (
    <Dialog open={open} onClose={handleClose}>
      <BoxModal>
        <ModalTitle>Adicione mais algum treino</ModalTitle>
        <ContentWorkouts>
          {!trainingWeeks.some((training) => training.sholder) && (
            <ButtonModal onClick={handleOpenShoulder}>Ombro</ButtonModal>
          )}
          {!trainingWeeks.some((training) => training.chest) && (
            <ButtonModal onClick={handleOpenChest}>Peito</ButtonModal>
          )}
          {!trainingWeeks.some((training) => training.back) && (
            <ButtonModal onClick={handleOpenBack}>Costas</ButtonModal>
          )}
          {!trainingWeeks.some((training) => training.triceps) && (
            <ButtonModal onClick={handleOpenTriceps}>Tríceps</ButtonModal>
          )}
          {!trainingWeeks.some((training) => training.biceps) && (
            <ButtonModal onClick={handleOpenBiceps}>Bíceps</ButtonModal>
          )}
          {!trainingWeeks.some((training) => training.leg) && (
            <ButtonModal onClick={handleOpenLeg}>Perna</ButtonModal>
          )}
        </ContentWorkouts>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
        <Shoulder
          openShoulder={openShoulder}
          handleClose={handleCloseShoulder}
        />
        <Chest openChest={openChest} handleClose={handleCloseChest} />
        <Back openBack={openBack} handleClose={handleCloseBack} />
        <Triceps openTriceps={openTriceps} handleClose={handleCloseTriceps} />
        <Biceps openBiceps={openBiceps} handleClose={handleCloseBiceps} />
        <Leg openLeg={openLeg} handleClose={handleCloseLeg} />
      </BoxModal>
    </Dialog>
  );
}
