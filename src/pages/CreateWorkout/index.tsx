import { Container } from "@mui/material";
import { Content, Title } from "./styled";
import { CardWeekly } from "../../components/CardWeekly";
import { Link } from "react-router-dom";

interface WeekProps {
  day: string;
}

export function CreateWorkout() {
  const week: WeekProps[] = [
    { day: "Domingo" },
    { day: "Segunda-feira" },
    { day: "Terça-feira" },
    { day: "Quarta-feira" },
    { day: "Quinta-feira" },
    { day: "Sexta-feira" },
    { day: "Sabado" },
  ];

  return (
    <Content>
      <Title>Monte seu treino semanal</Title>

      {week.map((day) => (
        <Link key={day.day} to={`/createworkout/${day.day}`}>
          <CardWeekly day={day.day} />
        </Link>
      ))}
    </Content>
  );
}
