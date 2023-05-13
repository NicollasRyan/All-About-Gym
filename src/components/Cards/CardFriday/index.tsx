import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { CardContainer, Text, BoxTitle, TrainingText } from "./styled";

export function CardFriday() {
  return (
    <Container>
      <CardContainer>
        <CardActionArea>
          {/* <CardMedia /> */}
          <CardContent>
            <BoxTitle>
              <Text>Sexta</Text>
            </BoxTitle>
            <TrainingText></TrainingText>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    </Container>
  );
}
