import {
  BoxText,
  Content,
  Text,
  Title,
  ContainerText,
  Img,
  BoxImg,
  ImgProteina,
  ImgLeg,
  ContentList,
  ContainerList,
} from "./styled";

export function BackTraining() {
  return (
    <Content>
      <Title>Treino de costas</Title>
      <ContainerText>
        <BoxText>
          <Text>
            O treino de costas é essencial para desenvolver a força, a
            estabilidade e a aparência dos músculos das costas, que desempenham
            um papel crucial na postura, equilíbrio e movimentos do corpo. Um
            treino bem estruturado para as costas deve envolver uma combinação
            de exercícios que visem os diferentes músculos dessa região.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            Os principais grupos musculares trabalhados no treino de costas
            incluem o latíssimo do dorso (ou lats), os trapézios, os romboides e
            os eretores da espinha. Além disso, outros músculos, como os
            deltoides posteriores e os bíceps, frequentemente são recrutados
            como músculos sinergistas durante os exercícios para as costas.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            É importante variar os exercícios ao longo do tempo para estimular
            os músculos das costas de diferentes maneiras e evitar a estagnação
            do progresso. Além disso, a progressão de carga e o aumento gradual
            da intensidade são fundamentais para promover ganhos de força e
            hipertrofia muscular.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            Recomenda-se realizar o treino de costas de duas a três vezes por
            semana, deixando um intervalo de descanso de 48 horas entre as
            sessões para permitir a recuperação muscular adequada. É importante
            também manter uma técnica correta de execução dos exercícios para
            evitar lesões e obter resultados eficazes.
          </Text>
        </BoxText>
        <BoxText>
          <Text>
            Como em qualquer programa de treinamento, é sempre recomendado
            buscar a orientação de um profissional qualificado, como um educador
            físico ou um personal trainer, para criar um plano de treino
            personalizado e adequado às suas necessidades e objetivos
            individuais.
          </Text>
        </BoxText>
        <BoxText>
          <Text>Agora veja todo os treinos de costa e sua execução:</Text>
        </BoxText>
        <ContainerList>
          <ContentList>Puxada alto frontal</ContentList>
          <ContentList>Remada no banco 45º com halteres</ContentList>
          <ContentList>Puxada triângulo</ContentList>
          <ContentList>Remada curvada</ContentList>
          <ContentList>Remada baixa baixa com a barra</ContentList>
          <ContentList>Remada baixa baixa com o triângulo</ContentList>
          <ContentList>Remada cavalinho</ContentList>
          <ContentList>Serrote</ContentList>
          <ContentList>Pulldown</ContentList>
          <ContentList>Levantamento terra </ContentList>
        </ContainerList>
      </ContainerText>
    </Content>
  );
}
