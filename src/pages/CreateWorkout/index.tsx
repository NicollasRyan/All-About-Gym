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

      <Link to={`/createworkout/domingo`}>
        <CardSunday />
      </Link>
      <Link to={`/createworkout/segunda`}>
        <CardMonday />
      </Link>
      <Link to={`/createworkout/terça`}>
        <CardTuesday />
      </Link>
      <Link to={`/createworkout/quarta`}>
        <CardWednesday />
      </Link>
      <Link to={`/createworkout/quinta`}>
        <CardThursday />
      </Link>
      <Link to={`/createworkout/sexta`}>
        <CardFriday />
      </Link>
      <Link to={`/createworkout/sabado`}>
        <CardSaturday />
      </Link>
    </Content>
  );
}
