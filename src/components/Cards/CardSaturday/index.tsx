import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";

export function CardSaturday() {
  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>sábado</Text>
            </BoxTitle>
            <TrainingText></TrainingText>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
