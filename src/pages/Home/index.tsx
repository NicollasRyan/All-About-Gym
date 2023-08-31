import {
  Body,
  ContainerBox,
  ContainerHome,
  ContainerImg,
  ContainerText,
  Img,
  SmallCard,
  Text,
} from "./styled";

import cbum from "../../img/cbum.png";
import { CardSunday } from "../../components/Cards/CardSunday";
import { CardMonday } from "../../components/Cards/CardMonday";
import { CardWednesday } from "../../components/Cards/CardWednesday";
import { CardThursday } from "../../components/Cards/CardThursday";
import { CardTuesday } from "../../components/Cards/CardTuesday";
import { CardFriday } from "../../components/Cards/CardFriday";
import { CardSaturday } from "../../components/Cards/CardSaturday";

export function Home() {
  const current = new Date();
  const dayOfWeek = current.getDay();

  const WeekDay = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const nameWeekDay = WeekDay[dayOfWeek];
  console.log(current);

  return (
    <Body>
      <ContainerHome>
        <ContainerBox>
          <ContainerImg>
            <Img src={cbum} />
          </ContainerImg>
          <ContainerText>
            <Text>Hoje é {nameWeekDay} e você vai treinar:</Text>
            <SmallCard>
              {nameWeekDay === "Domingo" && <CardSunday />}
              {nameWeekDay === "Segunda-feira" && <CardMonday />}
              {nameWeekDay === "Terça-feira" && <CardTuesday />}
              {nameWeekDay === "Quarta-feira" && <CardWednesday />}
              {nameWeekDay === "Quinta-feira" && <CardThursday />}
              {nameWeekDay === "Sexta-feira" && <CardFriday />}
              {nameWeekDay === "Sabado" && <CardSaturday />}
            </SmallCard>
          </ContainerText>
        </ContainerBox>
      </ContainerHome>
    </Body>
  );
}
