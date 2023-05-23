import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { FridayContext } from "../../../context/fridayContext";

export function CardSaturday() {
  const { trainingWeeks } = useContext(FridayContext);

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
                  {training.back?.length === 1 && "Costas"}{" "}
                  {training.biceps?.length === 1 && "Biceps"}
                  {training.triceps?.length === 1 && "Triceps"}
                  {training.sholder?.length === 1 && "Ombro"}
                  {training.leg?.length === 1 && "Perna"}
                </TrainingText>
              ))}
            </>{" "}
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
