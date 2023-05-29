import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { SaturdayContext } from "../../../context/saturdayContext";

export function CardSaturday() {
  const { trainingWeeks } = useContext(SaturdayContext);

  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>sábado</Text>
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
            </>{" "}
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
