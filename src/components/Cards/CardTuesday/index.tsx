import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { TuesdayContext } from "../../../context/tuesdayContext";

export function CardTuesday() {
  const { trainingWeeks } = useContext(TuesdayContext);

  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>Terça-feira</Text>
            </BoxTitle>
            <>
              {trainingWeeks.map((training) => (
                <TrainingText key={training.id}>
                  {training?.chest && "Peito"}
                  {training?.back && "Costas"} {training?.biceps && "Biceps"}
                  {training?.triceps && "Triceps"}
                  {training?.sholder && "Ombro"}
                  {training?.leg && "Perna"}
                  {training?.rest && "Descansar"}
                </TrainingText>
              ))}
            </>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
