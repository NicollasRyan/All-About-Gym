import { BoxCard, Content, Title } from "./styled";

import { Link } from "react-router-dom";

import { CardMonday } from "../../components/Cards/CardMonday";
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

      <BoxCard>
        <CardSunday />
      </BoxCard>
      <BoxCard>
        <CardMonday />
      </BoxCard>
      <BoxCard>
        <CardTuesday />
      </BoxCard>
      <BoxCard>
        <CardWednesday />
      </BoxCard>
      <BoxCard>
        <CardThursday />
      </BoxCard>
      <BoxCard>
        <CardFriday />
      </BoxCard>
      <BoxCard>
        <CardSaturday />
      </BoxCard>
    </Content>
  );
}
