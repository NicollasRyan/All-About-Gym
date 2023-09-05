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

import legTraining from "../../../img/legTraining.jpg";

export function LegTraining() {
  return (
    <Content>
      <Title>Treino de perna</Title>
      <ContainerText>
        <BoxText>
          <Text>
            O treino de pernas é uma parte essencial do treinamento de força e
            desenvolvimento muscular. As pernas são compostas por diversos
            músculos, incluindo quadríceps, isquiotibiais, glúteos, panturrilhas
            e adutores. Um treino bem estruturado para as pernas visa fortalecer
            e desenvolver esses grupos musculares, além de melhorar a
            resistência, estabilidade e mobilidade da região inferior do corpo.
          </Text>
        </BoxText>
        <Img src={legTraining} />
        <BoxText>
          <Text>Agora veja todo os treinos de costa e sua execução:</Text>
        </BoxText>
        <ContainerList>
          <ContentList>Agachamento com barra</ContentList>
          <ContentList>Afundo com halteres</ContentList>
          <ContentList>Rack</ContentList>
          <ContentList>Leg Press</ContentList>
          <ContentList>Bugaro</ContentList>
          <ContentList>Mesa flexora</ContentList>
          <ContentList>Cadeira flexora</ContentList>
          <ContentList>Cadeira extensora</ContentList>
          <ContentList>Abdutora</ContentList>
          <ContentList>Adutora</ContentList>
          <ContentList>Elevação pelvica</ContentList>
          <ContentList>Coice</ContentList>
        </ContainerList>
      </ContainerText>
    </Content>
  );
}
