import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";

interface CardProps {
  day: string;
}

export function CardWeekly({ day }: CardProps) {
  const treino =
    day === "Segunda-feira"
      ? "Back day"
      : "" || day === "Domingo"
      ? "descanso"
      : "" || day === "Terça-feira"
      ? "leg Day"
      : "" || day === "Quarta-feira"
      ? "Amry day"
      : "" || day === "Quinta-feira"
      ? "Back Day"
      : "" || day === "Sexta-feira"
      ? "Chest Day"
      : "" || day === "Sabado"
      ? "shoulder day"
      : "";

  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>{day}</Text>
            </BoxTitle>
            <TrainingText>{treino}</TrainingText>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
