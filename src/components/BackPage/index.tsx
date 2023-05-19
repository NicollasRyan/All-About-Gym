import { useLocation } from "react-router-dom";
import { Box, BoxTitle, Content, Title, TrainingText } from "./styled";

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
  const location = useLocation();
  const pathname = location.pathname;

  const trimmedPathname = pathname.replace(/^\/+/g, "");

  const urlParts = trimmedPathname.split("/");
  const day = urlParts[urlParts.length - 1];

  return (
    <Content>
      <BoxTitle>
        <Title>
          {back &&
            `${day === "Terca" ? "Terça" : `${day}`} fazer ${back} (Back Day)`}
        </Title>
      </BoxTitle>
      <Box>
        <TrainingText>{bentOverRow}</TrainingText>
        <TrainingText>{frontHighPull}</TrainingText>
        <TrainingText>{benchRow}</TrainingText>
        <TrainingText>{pullclosed}</TrainingText>
        <TrainingText>{pullTriangle}</TrainingText>
        <TrainingText>{lowRow}</TrainingText>
        <TrainingText>{rowingHorse}</TrainingText>
        <TrainingText>{handsaw}</TrainingText>
        <TrainingText>{pulldown}</TrainingText>
        <TrainingText>{earth}</TrainingText>
      </Box>
    </Content>
  );
}
