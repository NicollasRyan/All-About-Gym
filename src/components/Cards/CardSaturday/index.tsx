import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { SaturdayContext } from "../../../context/saturdayContext";
import { Link } from "react-router-dom";

export function CardSaturday() {
  const { trainingWeeks } = useContext(SaturdayContext);

  return (
    <Container>
      <CardContainer>
        <Link to={`/createworkout/Sabado`}>
          <CardActionArea>
            {/* <CardMedia /> */}
            <CardContent>
              <BoxTitle>
                <Text>Sábado</Text>
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
        </Link>
      </CardContainer>
    </Container>
  );
}
