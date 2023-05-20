import { useLocation, useParams } from "react-router-dom";
import { Box, BoxTitle, Content, Title, TrainingText } from "./styled";

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
      <Box>
        <TrainingText>{sideRaise}</TrainingText>
        <TrainingText>{frontElevation}</TrainingText>
        <TrainingText>{development}</TrainingText>
        <TrainingText>{arnoldDevelopment}</TrainingText>
        <TrainingText>{crossLateralRaise}</TrainingText>
        <TrainingText>{inclinedLateralRaise}</TrainingText>
        <TrainingText>{reverseCrucifix}</TrainingText>
      </Box>
    </Content>
  );
}
