import {
  BoxText,
  Content,
  Text,
  Title,
  ContainerList,
  ContentList,
  ContainerText,
  Img,
  BoxImg,
} from "./styled";

import dor from "../../img/dor.jpg";
import bench from "../../img/bench.jpg";

export function Prioritization() {
  return (
    <Content>
      <Title>O que é priorização de treino?</Title>
      <ContainerText>
        <BoxText>
          <Text>
            Periodização de treino na musculação é um método de planejamento do
            treinamento que visa otimizar o desempenho físico e reduzir o risco
            de lesões através da variação estruturada de intensidade, volume,
            frequência e exercícios ao longo do tempo.
          </Text>
        </BoxText>
        <BoxImg>
          <Img src={dor} />
        </BoxImg>
        <BoxText>
          <Text>
            Basicamente, a periodização é dividida em diferentes fases, cada uma
            com objetivos e métodos específicos. As três principais fases da
            periodização são:
          </Text>
        </BoxText>
        <ContainerList>
          <ContentList>
            Fase de Base ou de Adaptção: É o período inicial do treinamento que
            tem como objetivo desenvolver a base física do indivíduo, por meio
            de exercícios básicos e de baixa a moderada intensidade e volume,
            buscando uma adaptação muscular e articular.
          </ContentList>
          <ContentList>
            Fase Intermediária ou de Hipertrofia: Nesta fase, o objetivo é o
            aumento da massa muscular, utilizando exercícios com maior
            intensidade e volume.
          </ContentList>
          <ContentList>
            Fase de Pico ou de Força Máxima: Essa fase tem como objetivo
            maximizar a força muscular, utilizando exercícios com altíssima
            intensidade e menor volume.
          </ContentList>
        </ContainerList>
        <BoxText>
          <Text>
            Dentro dessas fases, o treinador ou o atleta pode fazer variações
            como a mudança dos exercícios, das cargas, do número de repetições e
            séries, entre outros fatores, para garantir uma progressão gradual e
            evitar a adaptação do corpo aos mesmos estímulos.
          </Text>
        </BoxText>
        <BoxImg>
          <Img src={bench} />
        </BoxImg>
        <BoxText>
          <Text>
            A periodização de treino é importante para evitar a estagnação no
            treinamento e prevenir lesões, pois permite um aumento gradual da
            carga de trabalho, proporcionando uma adaptação progressiva do corpo
            às demandas do treinamento. Além disso, a periodização permite uma
            melhor distribuição dos esforços ao longo do ano, evitando excessos
            ou falta de estímulos.
          </Text>
        </BoxText>
      </ContainerText>
    </Content>
  );
}
