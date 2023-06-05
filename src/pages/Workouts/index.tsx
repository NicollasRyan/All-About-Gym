import {
  Box,
  ContainerText,
  Content,
  Img1,
  Img2,
  LinkTraninig,
  Title,
} from "./styled";

import Shoulders from "../../img/Shoulders.png";
import backWorkout from "../../img/backWorkout.jpg";
import bicepsTraining from "../../img/bicepsTraining.jpg";
import Chest from "../../img/Chest.jpg";
import legTraining from "../../img/legTraining.jpg";
import triceps from "../../img/triceps.jpg";

export function Workouts() {
  return (
    <Content>
      <Title>Veja mais sobre os tipos de treinos aqui:</Title>
      <ContainerText>
        <Box>
          <LinkTraninig to="/workouts/back">Costas</LinkTraninig>
          <Img1 src={backWorkout} />
        </Box>
        <Box>
          <LinkTraninig to="/workouts/biceps">Biceps</LinkTraninig>
          <Img2 src={bicepsTraining} />
        </Box>
        <Box>
          <LinkTraninig to="/workouts/chest">Peito</LinkTraninig>
          <Img2 src={Chest} />
        </Box>
        <Box>
          <LinkTraninig to="/workouts/leg">Perna</LinkTraninig>
          <Img1 src={legTraining} />
        </Box>
        <Box>
          <LinkTraninig to="/workouts/shoulder">Ombros</LinkTraninig>
          <Img1 src={Shoulders} />
        </Box>
        <Box>
          <LinkTraninig to="/workouts/triceps">Triceps</LinkTraninig>
          <Img2 src={triceps} />
        </Box>
      </ContainerText>
    </Content>
  );
}
