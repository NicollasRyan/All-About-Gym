import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { WednesdayContext } from "../../../context/wednesdayContext";

export function CardWednesday() {
  const { trainingWeeks } = useContext(WednesdayContext);

  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>quarta-feira</Text>
            </BoxTitle>
            <>
              {trainingWeeks.map((training) => (
                <TrainingText key={training.id}>
                  {training?.chest && "Peito"}
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
