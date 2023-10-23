import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";
import { useContext } from "react";
import { MondayContext } from "../../../context/mondayContext";
import { Link } from "react-router-dom";

export function CardMonday() {
  const { trainingWeeks } = useContext(MondayContext);

  return (
    <Container>
      <Link to={`/createworkout/segunda`}>
        <CardContainer>
          <CardActionArea>
            {/* <CardMedia /> */}
            <CardContent>
              <BoxTitle>
                <Text>Sengunda-feira</Text>
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
