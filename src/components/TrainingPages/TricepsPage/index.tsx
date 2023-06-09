import { useLocation, useParams } from "react-router-dom";
import {
  Box,
  BoxTitle,
  BoxTraining,
  Content,
  Title,
  TrainingText,
} from "./styled";

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
  return (
    <Content>
      <BoxTraining>
        {barTriceps && (
          <Box>
            <TrainingText>{barTriceps}</TrainingText>
          </Box>
        )}
        {ropeTriceps && (
          <Box>
            <TrainingText>{ropeTriceps}</TrainingText>
          </Box>
        )}
        {french && (
          <Box>
            <TrainingText>{french}</TrainingText>
          </Box>
        )}
        {closedBenchPress && (
          <Box>
            <TrainingText>{closedBenchPress}</TrainingText>
          </Box>
        )}
        {forehead && (
          <Box>
            <TrainingText>{forehead}</TrainingText>
          </Box>
        )}
        {foreheadPulley && (
          <Box>
            <TrainingText>{foreheadPulley}</TrainingText>
          </Box>
        )}
      </BoxTraining>
    </Content>
  );
}
