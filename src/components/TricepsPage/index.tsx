import { useLocation, useParams } from "react-router-dom";
import { Box, BoxTitle, Content, Title, TrainingText } from "./styled";

interface TricepsProps {
  triceps?: string;
  barTriceps?: string;
  ropeTriceps?: string;
  french?: string;
  closedBenchPress?: string;
  forehead?: string;
  foreheadPulley?: string;
}

export function TricepsPage({
  triceps,
  barTriceps,
  ropeTriceps,
  french,
  closedBenchPress,
  forehead,
  foreheadPulley,
}: TricepsProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const trimmedPathname = pathname.replace(/^\/+/g, "");

  const urlParts = trimmedPathname.split("/");
  const day = urlParts[urlParts.length - 1];

  return (
    <Content>
      <BoxTitle>
        <Title>
          {triceps &&
            `${day === "Terca" ? "Terça" : `${day}`} fazer ${triceps}`}
        </Title>
      </BoxTitle>
      <Box>
        <TrainingText>{barTriceps}</TrainingText>
        <TrainingText>{ropeTriceps}</TrainingText>
        <TrainingText>{french}</TrainingText>
        <TrainingText>{closedBenchPress}</TrainingText>
        <TrainingText>{closedBenchPress}</TrainingText>
        <TrainingText>{forehead}</TrainingText>
        <TrainingText>{foreheadPulley}</TrainingText>
      </Box>
    </Content>
  );
}
