import { useParams } from "react-router-dom";
import { Button, ContainerWeek, ContentWorkouts, Title } from "./styled";
import { useState, useContext } from "react";
import { Chest } from "./Modals/Chest";
import { Shoulder } from "./Modals/Shoulder";
import { Back } from "./Modals/Back";
import { Triceps } from "./Modals/Triceps";
import { Biceps } from "./Modals/Biceps";
import { Leg } from "./Modals/Leg";
import { SundayContext } from "../../context/sundayContext";

export function TrainingSunday() {
  const { trainingWeek } = useParams();
  const { trainingWeeks } = useContext(SundayContext);

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
    <ContainerWeek>
      {trainingWeeks.length === 0 ? (
        <>
          <Title>O que você vai treinar Domingo?</Title>
          <ContentWorkouts>
            <Button onClick={handleOpenShoulder}>Ombro</Button>

            <Button onClick={handleOpenChest}>Peito</Button>

            <Button onClick={handleOpenBack}>Costas</Button>

            <Button onClick={handleOpenTriceps}>Tricpes</Button>

            <Button onClick={handleOpenBiceps}>Bicpes</Button>

            <Button onClick={handleOpenLeg}>Perna </Button>

            <Button>Descanso</Button>
          </ContentWorkouts>
          <Shoulder
            openShoulder={openShoulder}
            handleClose={handleCloseShoulder}
          />
          <Chest openChest={openChest} handleClose={handleCloseChest} />
          <Back openBack={openBack} handleClose={handleCloseBack} />
          <Triceps openTriceps={openTriceps} handleClose={handleCloseTriceps} />
          <Biceps openBiceps={openBiceps} handleClose={handleCloseBiceps} />
          <Leg openLeg={openLeg} handleClose={handleCloseLeg} />
        </>
      ) : (
        trainingWeeks.map((training) => (
          <div key={training.back.id}>
            <p>{training.back.pull}</p>
            <p>{training.back.bentOverRow}</p>
          </div>
        ))
      )}
    </ContainerWeek>
  );
}
