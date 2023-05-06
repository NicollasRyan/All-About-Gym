import { useParams } from "react-router-dom";
import { Container } from "./styled";

export function TrainingWeek() {
  const { trainingWeek } = useParams();

  return <Container>{trainingWeek}</Container>;
}
