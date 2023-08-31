import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { FridayContext } from "../../../context/fridayContext";

export function CardFriday() {
  const { trainingWeeks } = useContext(FridayContext);

  const chestValues = trainingWeeks.map((training) => training.chest);

  // Utilize chestValues como desejar
  console.log(chestValues);

  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>Sexta</Text>
            </BoxTitle>
            <>
              {trainingWeeks.map((training) => (
                <TrainingText key={training.id}>
                  {training?.chest ? "Peito" : "Não há nemhum treino"}
                  {training?.back ? "Costas" : "Não há nemhum treino"}
                  {training?.biceps ? "Biceps" : "Não há nemhum treino"}
                  {training?.triceps ? "Triceps" : "Não há nemhum treino"}
                  {training?.sholder ? "Ombro" : "Não há nemhum treino"}
                  {training?.leg ? "Perna" : "Não há nemhum treino"}
                  {training?.rest ? "Descansar" : "Não há nemhum treino"}
                </TrainingText>
              ))}
            </>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
