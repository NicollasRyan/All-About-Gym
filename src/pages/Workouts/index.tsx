import {
  Box,
  ContainerText,
  Content,
  Div,
  Img1,
  Img2,
  LinkTraninig,
  Title,
} from "./styled";

import Shoulders from "../../img/Shoulders.jpg";
import backWorkout from "../../img/backWorkout.jpg";
import bicepsTraining from "../../img/bicepsTraining.jpg";
import Chest from "../../img/Chest.jpg";
import legTraining from "../../img/legTraining.jpg";
import triceps from "../../img/triceps.jpg";
import { Container } from "@mui/material";

export function Workouts() {
  return (
    <Content>
      <Title>Veja mais sobre os tipos de treinos aqui:</Title>
      <ContainerText>
        <Div>
          <Box>
            <LinkTraninig to="/workouts/back">Costas</LinkTraninig>
            <Img2 src={backWorkout} />
          </Box>

          <Box>
            <LinkTraninig to="/workouts/chest">Peito</LinkTraninig>
            <Img2 src={Chest} />
          </Box>
        </Div>
        <Div>
          <Box>
            <LinkTraninig to="/workouts/biceps">Biceps</LinkTraninig>
            <Img2 src={bicepsTraining} />
          </Box>
          <Box>
            <LinkTraninig to="/workouts/triceps">Triceps</LinkTraninig>
            <Img2 src={triceps} />
          </Box>
        </Div>
        <Div>
          <Box>
            <LinkTraninig to="/workouts/shoulder">Ombros</LinkTraninig>
            <Img2 src={Shoulders} />
          </Box>
          <Box>
            <LinkTraninig to="/workouts/leg">Perna</LinkTraninig>
            <Img2 src={legTraining} />
          </Box>
        </Div>
      </ContainerText>
    </Content>
  );
}
