import { useLocation } from "react-router-dom";
import {
  Box,
  BoxTitle,
  BoxTraining,
  Content,
  Title,
  TrainingText,
} from "./styled";

interface BackProps {
  back?: string;
  bentOverRow?: string;
  frontHighPull?: string;
  benchRow?: string;
  pullclosed?: string;
  pullTriangle?: string;
  lowRow?: string;
  rowingHorse?: string;
  handsaw?: string;
  pulldown?: string;
  earth?: string;
}

export function BackPage({
  back,
  bentOverRow,
  frontHighPull,
  benchRow,
  pullclosed,
  pullTriangle,
  lowRow,
  rowingHorse,
  handsaw,
  pulldown,
  earth,
}: BackProps) {
  return (
    <Content>
      <BoxTraining>
        {bentOverRow && (
          <Box>
            <TrainingText>{bentOverRow}</TrainingText>
          </Box>
        )}
        {frontHighPull && (
          <Box>
            <TrainingText>{frontHighPull}</TrainingText>
          </Box>
        )}
        {benchRow && (
          <Box>
            <TrainingText>{benchRow}</TrainingText>
          </Box>
        )}
        {handsaw && (
          <Box>
            <TrainingText>{handsaw}</TrainingText>
          </Box>
        )}
        {pullTriangle && (
          <Box>
            <TrainingText>{pullTriangle}</TrainingText>
          </Box>
        )}
        {lowRow && (
          <Box>
            <TrainingText>{lowRow}</TrainingText>
          </Box>
        )}
        {rowingHorse && (
          <Box>
            <TrainingText>{rowingHorse}</TrainingText>
          </Box>
        )}
        {pullclosed && (
          <Box>
            <TrainingText>{pullclosed}</TrainingText>
          </Box>
        )}
        {pulldown && (
          <Box>
            <TrainingText>{pulldown}</TrainingText>
          </Box>
        )}
        {earth && (
          <Box>
            <TrainingText>{earth}</TrainingText>
          </Box>
        )}
      </BoxTraining>
    </Content>
  );
}
