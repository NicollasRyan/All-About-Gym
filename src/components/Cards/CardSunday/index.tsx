import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { SundayContext } from "../../../context/sundayContext";

export function CardSunday() {
  const { trainingWeeks } = useContext(SundayContext);

  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>Domingo</Text>
            </BoxTitle>
            <>
              {trainingWeeks.map((training) => (
                <TrainingText key={training.id}>
                  {training?.back && "Costas"} {training?.biceps && "Biceps"}
                  {training?.triceps && "Triceps"}
                  {training?.sholder && "Ombro"}
                  {training?.leg && "Perna"}
                </TrainingText>
              ))}
            </>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
