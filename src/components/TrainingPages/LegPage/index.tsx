import { useLocation, useParams } from "react-router-dom";
import {
  Box,
  BoxTitle,
  BoxTraining,
  Content,
  Title,
  TrainingText,
} from "./styled";

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
      <BoxTraining>
        {barbellSquat && (
          <Box>
            <TrainingText>{barbellSquat}</TrainingText>
          </Box>
        )}
        {sink && (
          <Box>
            <TrainingText>{sink}</TrainingText>
          </Box>
        )}
        {rack && (
          <Box>
            <TrainingText>{rack}</TrainingText>
          </Box>
        )}
        {legPress && (
          <Box>
            <TrainingText>{legPress}</TrainingText>
          </Box>
        )}
        {bugaro && (
          <Box>
            <TrainingText>{bugaro}</TrainingText>
          </Box>
        )}
        {flexorTable && (
          <Box>
            <TrainingText>{flexorTable}</TrainingText>
          </Box>
        )}
        {flexorChair && (
          <Box>
            <TrainingText>{flexorChair}</TrainingText>
          </Box>
        )}
        {extensionChair && (
          <Box>
            <TrainingText>{extensionChair}</TrainingText>
          </Box>
        )}
        {abductor && (
          <Box>
            <TrainingText>{abductor}</TrainingText>
          </Box>
        )}
        {adductor && (
          <Box>
            <TrainingText>{adductor}</TrainingText>
          </Box>
        )}
        {pelvicElevation && (
          <Box>
            <TrainingText>{pelvicElevation}</TrainingText>
          </Box>
        )}
        {kick && (
          <Box>
            <TrainingText>{kick}</TrainingText>
          </Box>
        )}
      </BoxTraining>
    </Content>
  );
}
