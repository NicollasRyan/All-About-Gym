import { useLocation, useParams } from "react-router-dom";
import {
  Box,
  BoxTitle,
  BoxTraining,
  Content,
  Title,
  TrainingText,
} from "./styled";

interface SholderProps {
  sholder?: string;
  sideRaise?: string;
  frontElevation?: string;
  development?: string;
  arnoldDevelopment?: string;
  crossLateralRaise?: string;
  inclinedLateralRaise?: string;
  reverseCrucifix?: string;
}

export function ShoulderPage({
  sholder,
  sideRaise,
  frontElevation,
  development,
  arnoldDevelopment,
  crossLateralRaise,
  inclinedLateralRaise,
  reverseCrucifix,
}: SholderProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const trimmedPathname = pathname.replace(/^\/+/g, "");

  const urlParts = trimmedPathname.split("/");
  const day = urlParts[urlParts.length - 1];

  return (
    <Content>
      <BoxTitle>
        <Title>
          {sholder &&
            `${
              day === "Terca" ? "Terça" : `${day}`
            } você vai fazer ${sholder} (Shoulder Day)`}
        </Title>
      </BoxTitle>
      <BoxTraining>
        {sideRaise && (
          <Box>
            <TrainingText>{sideRaise}</TrainingText>
          </Box>
        )}
        {frontElevation && (
          <Box>
            <TrainingText>{frontElevation}</TrainingText>
          </Box>
        )}
        {development && (
          <Box>
            <TrainingText>{development}</TrainingText>
          </Box>
        )}
        {arnoldDevelopment && (
          <Box>
            <TrainingText>{arnoldDevelopment}</TrainingText>
          </Box>
        )}
        {crossLateralRaise && (
          <Box>
            <TrainingText>{crossLateralRaise}</TrainingText>
          </Box>
        )}
        {inclinedLateralRaise && (
          <Box>
            <TrainingText>{inclinedLateralRaise}</TrainingText>
          </Box>
        )}
        {reverseCrucifix && (
          <Box>
            <TrainingText>{reverseCrucifix}</TrainingText>
          </Box>
        )}
      </BoxTraining>
    </Content>
  );
}
