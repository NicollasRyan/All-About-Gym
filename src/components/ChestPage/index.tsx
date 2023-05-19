import { useLocation } from "react-router-dom";
import { Box, BoxTitle, Content, Title, TrainingText } from "./styled";

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
            } fazer ${chest} (Chest Day)`}
        </Title>
      </BoxTitle>
      <Box>
        <TrainingText>{benchPress}</TrainingText>
        <TrainingText>{inclineBenchPress}</TrainingText>
        <TrainingText>{peckDeck}</TrainingText>
        <TrainingText>{benchPressSitting}</TrainingText>
        <TrainingText>{highCrossOver}</TrainingText>
        <TrainingText>{crossOverMedium}</TrainingText>
        <TrainingText>{crossOverBass}</TrainingText>
      </Box>
    </Content>
  );
}
