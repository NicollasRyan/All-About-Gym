import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { WednesdayContext } from "../../../context/wednesdayContext";
import { Link } from "react-router-dom";

export function CardWednesday() {
  const { trainingWeeks } = useContext(WednesdayContext);

  return (
    <Container>
      <Link to={`/createworkout/quarta`}>
        <CardContainer>
          <CardActionArea>
            {/* <CardMedia /> */}
            <CardContent>
              <BoxTitle>
                <Text>Quarta-feira</Text>
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
      </Link>
    </Container>
  );
}
