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

import Shoulders from "../../../img/Shoulders.jpg";

export function ShoulderTraining() {
  return (
    <Content>
      <Title>Treino de Ombros</Title>
      <ContainerText>
        <BoxText>
          <Text>
            O treino de ombros desempenha um papel importante no desenvolvimento
            muscular e na aparência estética dos membros superiores. Os ombros
            são compostos por vários músculos, sendo os principais o deltoides,
            os trapézios e os músculos rotadores do manguito rotador. Um treino
            bem estruturado para os ombros visa fortalecer e desenvolver esses
            grupos musculares, melhorar a estabilidade e a amplitude de
            movimento do ombro, além de proporcionar uma postura adequada e
            equilibrada.
          </Text>
        </BoxText>
        <Img src={Shoulders} />
        <BoxText>
          <Text>Agora veja todo os treinos de costa e sua execução:</Text>
        </BoxText>
        <ContainerList>
          <ContentList>Elevação lateral</ContentList>
          <ContentList>Elevação frontal</ContentList>
          <ContentList>Desenvolvimento</ContentList>
          <ContentList>Desenvolvimento arnold</ContentList>
          <ContentList>Elevação Lateral no cross ou polia</ContentList>
          <ContentList>Elevação lateral inclinado</ContentList>
          <ContentList>
            Crucifixo inverso na maquina ou com halteres
          </ContentList>
        </ContainerList>
      </ContainerText>
    </Content>
  );
}
