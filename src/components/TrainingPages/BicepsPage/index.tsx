import { useLocation, useParams } from "react-router-dom";
import {
  Box,
  BoxTitle,
  BoxTraining,
  Content,
  Title,
  TrainingText,
} from "./styled";

interface BicepsProps {
  biceps?: string;
  dumbbellThread?: string;
  dumbbellHammer?: string;
  wBar?: string;
  threadRoper?: string;
  inclineBenchThread?: string;
  scottBank?: string;
  concentratedThread?: string;
}

export function BicepsPage({
  biceps,
  dumbbellThread,
  dumbbellHammer,
  wBar,
  threadRoper,
  inclineBenchThread,
  scottBank,
  concentratedThread,
}: BicepsProps) {
  return (
    <Content>
      <BoxTraining>
        {dumbbellThread && (
          <Box>
            <TrainingText>{dumbbellThread}</TrainingText>
          </Box>
        )}
        {dumbbellHammer && (
          <Box>
            <TrainingText>{dumbbellHammer}</TrainingText>
          </Box>
        )}
        {wBar && (
          <Box>
            <TrainingText>{wBar}</TrainingText>
          </Box>
        )}
        {threadRoper && (
          <Box>
            <TrainingText>{threadRoper}</TrainingText>
          </Box>
        )}
        {inclineBenchThread && (
          <Box>
            <TrainingText>{inclineBenchThread}</TrainingText>
          </Box>
        )}
        {scottBank && (
          <Box>
            <TrainingText>{scottBank}</TrainingText>
          </Box>
        )}
        {concentratedThread && (
          <Box>
            <TrainingText>{concentratedThread}</TrainingText>
          </Box>
        )}
      </BoxTraining>
    </Content>
  );
}
