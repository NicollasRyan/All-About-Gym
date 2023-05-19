import { Container } from "@mui/material";
import { Content, Title } from "./styled";
import { CardMonday } from "../../components/Cards/CardMonday";
import { Link } from "react-router-dom";
import { CardFriday } from "../../components/Cards/CardFriday";
import { CardSaturday } from "../../components/Cards/CardSaturday";
import { CardSunday } from "../../components/Cards/CardSunday";
import { CardThursday } from "../../components/Cards/CardThursday";
import { CardTuesday } from "../../components/Cards/CardTuesday";
import { CardWednesday } from "../../components/Cards/CardWednesday";

export function CreateWorkout() {
  return (
    <Content>
      <Title>Monte seu treino semanal</Title>

      <Link to={`/createworkout/Domingo`}>
        <CardSunday />
      </Link>
      <Link to={`/createworkout/Segunda`}>
        <CardMonday />
      </Link>
      <Link to={`/createworkout/Terca`}>
        <CardTuesday />
      </Link>
      <Link to={`/createworkout/Quarta`}>
        <CardWednesday />
      </Link>
      <Link to={`/createworkout/Quinta`}>
        <CardThursday />
      </Link>
      <Link to={`/createworkout/Sexta`}>
        <CardFriday />
      </Link>
      <Link to={`/createworkout/Sabado`}>
        <CardSaturday />
      </Link>
    </Content>
  );
}
