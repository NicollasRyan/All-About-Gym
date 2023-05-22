import { useLocation } from "react-router-dom";
import {
  Box,
  BoxTitle,
  BoxTraining,
  Content,
  Title,
  TrainingText,
} from "./styled";

interface ChestProps {
  chest?: string;
  benchPress?: string;
  inclineBenchPress?: string;
  peckDeck?: string;
  benchPressSitting?: string;
  highCrossOver?: string;
  crossOverMedium?: string;
  crossOverBass?: string;
}

export function ChestPage({
  chest,
  benchPress,
  inclineBenchPress,
  peckDeck,
  benchPressSitting,
  highCrossOver,
  crossOverMedium,
  crossOverBass,
}: ChestProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const trimmedPathname = pathname.replace(/^\/+/g, "");

  const urlParts = trimmedPathname.split("/");
  const day = urlParts[urlParts.length - 1];

  return (
    <Content>
      <BoxTitle>
        <Title>
          {chest &&
            `${
              day === "Terca" ? "Terça" : `${day}`
            } você vai fazer ${chest} (Chest Day)`}
        </Title>
      </BoxTitle>
      <BoxTraining>
        {benchPress && (
          <Box>
            <TrainingText>{benchPress}</TrainingText>
          </Box>
        )}
        {inclineBenchPress && (
          <Box>
            <TrainingText>{inclineBenchPress}</TrainingText>
          </Box>
        )}
        {peckDeck && (
          <Box>
            <TrainingText>{peckDeck}</TrainingText>
          </Box>
        )}
        {benchPressSitting && (
          <Box>
            <TrainingText>{benchPressSitting}</TrainingText>
          </Box>
        )}
        {highCrossOver && (
          <Box>
            <TrainingText>{highCrossOver}</TrainingText>
          </Box>
        )}
        {crossOverMedium && (
          <Box>
            <TrainingText>{crossOverMedium}</TrainingText>
          </Box>
        )}
        {crossOverBass && (
          <Box>
            <TrainingText>{crossOverBass}</TrainingText>
          </Box>
        )}
      </BoxTraining>
    </Content>
  );
}
