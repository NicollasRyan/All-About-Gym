import { useLocation, useParams } from "react-router-dom";
import { Box, BoxTitle, Content, Title, TrainingText } from "./styled";

interface legProps {
  leg?: string;
  barbellSquat?: string;
  sink?: string;
  rack?: string;
  legPress?: string;
  bugaro?: string;
  flexorTable?: string;
  flexorChair?: string;
  extensionChair?: string;
  abductor?: string;
  adductor?: string;
  pelvicElevation?: string;
  kick?: string;
}

export function LegPage({
  leg,
  barbellSquat,
  sink,
  rack,
  legPress,
  bugaro,
  flexorTable,
  flexorChair,
  extensionChair,
  abductor,
  adductor,
  pelvicElevation,
  kick,
}: legProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const trimmedPathname = pathname.replace(/^\/+/g, "");

  const urlParts = trimmedPathname.split("/");
  const day = urlParts[urlParts.length - 1];

  return (
    <Content>
      <BoxTitle>
        <Title>
          {leg &&
            `${
              day === "Terca" ? "Terça" : `${day}`
            } você vai fazer ${leg} (Leg Day)`}
        </Title>
      </BoxTitle>
      <Box>
        <TrainingText>{barbellSquat}</TrainingText>
        <TrainingText>{sink}</TrainingText>
        <TrainingText>{rack}</TrainingText>
        <TrainingText>{legPress}</TrainingText>
        <TrainingText>{bugaro}</TrainingText>
        <TrainingText>{flexorTable}</TrainingText>
        <TrainingText>{flexorChair}</TrainingText>
        <TrainingText>{extensionChair}</TrainingText>
        <TrainingText>{abductor}</TrainingText>
        <TrainingText>{adductor}</TrainingText>
        <TrainingText>{pelvicElevation}</TrainingText>
        <TrainingText>{kick}</TrainingText>
      </Box>
    </Content>
  );
}
