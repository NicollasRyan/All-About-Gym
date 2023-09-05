import {
  BoxText,
  Content,
  Text,
  Title,
  ContainerText,
  ContentList,
  ContainerList,
  Img,
} from "./styled";

import triceps from "../../../img/triceps.jpg";

export function TricepsTraining() {
  return (
    <Content>
      <Title>Treino de triceps</Title>
      <ContainerText>
        <BoxText>
          <Text>
            O treino de tríceps é uma parte essencial do treinamento de força e
            desenvolvimento muscular dos membros superiores. Os tríceps são um
            grupo muscular localizado na parte posterior do braço e são
            compostos por três cabeças: cabeça longa, cabeça lateral e cabeça
            medial. O treinamento adequado do tríceps visa fortalecer e
            desenvolver essas três cabeças, proporcionando braços mais definidos
            e tonificados.
          </Text>
        </BoxText>
        <Img src={triceps} />
        <BoxText>
          <Text>Agora veja todo os treinos de costa e sua execução:</Text>
        </BoxText>
        <ContainerList>
          <ContentList>Triceps barra</ContentList>
          <ContentList>Triceps corda</ContentList>
          <ContentList>Rosca barra W</ContentList>
          <ContentList>frances com halter ou polia</ContentList>
          <ContentList>Supino fechado</ContentList>
          <ContentList>Remada baixa baixa com o triângulo</ContentList>
          <ContentList>Testa com halteres ou barra</ContentList>
          <ContentList>Testa na polia</ContentList>
        </ContainerList>
      </ContainerText>
    </Content>
  );
}
