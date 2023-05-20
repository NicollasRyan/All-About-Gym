import { useLocation, useParams } from "react-router-dom";
import { Box, BoxTitle, Content, Title, TrainingText } from "./styled";

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
  const location = useLocation();
  const pathname = location.pathname;

  const trimmedPathname = pathname.replace(/^\/+/g, "");

  const urlParts = trimmedPathname.split("/");
  const day = urlParts[urlParts.length - 1];

  return (
    <Content>
      <BoxTitle>
        <Title>
          {biceps &&
            `${day === "Terca" ? "Terça" : `${day}`} você vai fazer ${biceps}`}
        </Title>
      </BoxTitle>
      <Box>
        <TrainingText>{dumbbellThread}</TrainingText>
        <TrainingText>{dumbbellHammer}</TrainingText>
        <TrainingText>{wBar}</TrainingText>
        <TrainingText>{threadRoper}</TrainingText>
        <TrainingText>{inclineBenchThread}</TrainingText>
        <TrainingText>{scottBank}</TrainingText>
        <TrainingText>{concentratedThread}</TrainingText>
      </Box>
    </Content>
  );
}
