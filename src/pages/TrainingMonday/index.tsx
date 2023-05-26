import { useParams } from "react-router-dom";
import { Button, ContainerWeek, ContentWorkouts, Title } from "./styled";
import { useState, useContext } from "react";
import { Chest } from "./Modals/Chest";
import { Shoulder } from "./Modals/Shoulder";
import { Back } from "./Modals/Back";
import { Triceps } from "./Modals/Triceps";
import { Biceps } from "./Modals/Biceps";
import { Leg } from "./Modals/Leg";
import { MondayContext } from "../../context/mondayContext";
import { TricepsPage } from "../../components/TrainingPages/TricepsPage";
import { ShoulderPage } from "../../components/TrainingPages/ShoulderPage";
import { BackPage } from "../../components/TrainingPages/BackPage";
import { BicepsPage } from "../../components/TrainingPages/BicepsPage";
import { ChestPage } from "../../components/TrainingPages/ChestPage";
import { LegPage } from "../../components/TrainingPages/LegPage";
import { AddTraining } from "./Modals/AddTraining";

export function TrainingMonday() {
  const { trainingWeek } = useParams();
  const { trainingWeeks } = useContext(MondayContext);

  const [openShoulder, setOpenShoulder] = useState(false);
  const [openChest, setOpenChest] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [openTriceps, setOpenTriceps] = useState(false);
  const [openBiceps, setOpenBiceps] = useState(false);
  const [openLeg, setOpenLeg] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenShoulder = () => setOpenShoulder(true);
  const handleOpenChest = () => setOpenChest(true);
  const handleOpenBack = () => setOpenBack(true);
  const handleOpenTriceps = () => setOpenTriceps(true);
  const handleOpenBiceps = () => setOpenBiceps(true);
  const handleOpenLeg = () => setOpenLeg(true);
  const handleOpen = () => setOpen(true);

  const handleCloseShoulder = () => setOpenShoulder(false);
  const handleCloseChest = () => setOpenChest(false);
  const handleCloseBack = () => setOpenBack(false);
  const handleCloseTriceps = () => setOpenTriceps(false);
  const handleCloseBiceps = () => setOpenBiceps(false);
  const handleCloseLeg = () => setOpenLeg(false);
  const handleClose = () => setOpen(false);

  return (
    <ContainerWeek>
      {trainingWeeks.length === 0 ? (
        <>
          <Title>O que você vai treinar Sengunda?</Title>
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
        <div>
          <Title>Na segunda você vai treinar:</Title>
          {trainingWeeks.map((training) => (
            <div key={training.id}>
              {training.back && (
                <BackPage
                  back={training.back}
                  bentOverRow={training.bentOverRow}
                  frontHighPull={training.frontHighPull}
                  benchRow={training.benchRow}
                  pullclosed={training.pullclosed}
                  pullTriangle={training.pullTriangle}
                  lowRow={training.lowRow}
                  rowingHorse={training.rowingHorse}
                  handsaw={training.handsaw}
                  pulldown={training.pulldown}
                  earth={training.earth}
                />
              )}
              {training.biceps && (
                <BicepsPage
                  biceps={training.biceps}
                  dumbbellThread={training.dumbbellThread}
                  dumbbellHammer={training.dumbbellHammer}
                  wBar={training.wBar}
                  threadRoper={training.threadRoper}
                  inclineBenchThread={training.inclineBenchThread}
                  scottBank={training.scottBank}
                  concentratedThread={training.concentratedThread}
                />
              )}
              {training.chest && (
                <ChestPage
                  chest={training.chest}
                  benchPress={training.benchPress}
                  inclineBenchPress={training.inclineBenchPress}
                  peckDeck={training.peckDeck}
                  benchPressSitting={training.benchPressSitting}
                  highCrossOver={training.highCrossOver}
                  crossOverMedium={training.crossOverMedium}
                  crossOverBass={training.crossOverBass}
                />
              )}
              {training.leg && (
                <LegPage
                  leg={training.leg}
                  barbellSquat={training.barbellSquat}
                  sink={training.sink}
                  rack={training.rack}
                  legPress={training.legPress}
                  bugaro={training.bugaro}
                  flexorTable={training.flexorTable}
                  flexorChair={training.flexorChair}
                  extensionChair={training.extensionChair}
                  abductor={training.abductor}
                  adductor={training.adductor}
                  pelvicElevation={training.pelvicElevation}
                  kick={training.kick}
                />
              )}
              {training.sholder && (
                <ShoulderPage
                  sholder={training.sholder}
                  sideRaise={training.sideRaise}
                  frontElevation={training.frontElevation}
                  development={training.development}
                  arnoldDevelopment={training.arnoldDevelopment}
                  crossLateralRaise={training.crossLateralRaise}
                  inclinedLateralRaise={training.inclinedLateralRaise}
                  reverseCrucifix={training.reverseCrucifix}
                />
              )}
              {training.triceps && (
                <TricepsPage
                  triceps={training.triceps}
                  barTriceps={training.barTriceps}
                  ropeTriceps={training.ropeTriceps}
                  french={training.french}
                  closedBenchPress={training.closedBenchPress}
                  forehead={training.forehead}
                  foreheadPulley={training.foreheadPulley}
                />
              )}
            </div>
          ))}
          <Button onClick={handleOpen}>Adiconar Outo treino</Button>
        </div>
      )}
      <AddTraining open={open} handleClose={handleClose} />
    </ContainerWeek>
  );
}
