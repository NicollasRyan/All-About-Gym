import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";

export function CardTuesday() {
  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>Terça-feira</Text>
            </BoxTitle>
            <TrainingText></TrainingText>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
