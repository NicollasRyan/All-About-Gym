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

import bicepsTraining from "../../../img/bicepsTraining.jpg";

export function BicepsTraining() {
  return (
    <Content>
      <Title>Treino de biceps</Title>
      <ContainerText>
        <BoxText>
          <Text>
            O treino de bíceps é uma parte importante do treinamento de força e
            desenvolvimento muscular dos membros superiores. Os bíceps são um
            grupo muscular composto por dois músculos principais: o bíceps
            braquial e o braquial anterior.
          </Text>
        </BoxText>
        <Img src={bicepsTraining} />
        <BoxText>
          <Text>
            O bíceps braquial é o músculo mais proeminente e conhecido dos
            braços. Ele está localizado na parte frontal do braço e é
            responsável por flexionar o cotovelo, ou seja, ele permite que você
            dobre o braço na direção do ombro. Além disso, o bíceps braquial
            também desempenha um papel importante na supinação do antebraço, que
            é o movimento de girar a palma da mão para cima.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            Ao realizar o treino de bíceps, é importante manter uma boa técnica,
            controlar a carga e o volume de treinamento e permitir tempo
            adequado para a recuperação muscular. Lembre-se de que o treinamento
            de bíceps deve ser combinado com um programa de treinamento global,
            visando o desenvolvimento equilibrado de todos os grupos
          </Text>
        </BoxText>
        <BoxText>
          <Text>Agora veja todo os treinos de costa e sua execução:</Text>
        </BoxText>
        <ContainerList>
          <ContentList>Rosca direta com halteres</ContentList>
          <ContentList>Martelo</ContentList>
          <ContentList>Rosca barra W</ContentList>
          <ContentList>Rosca corda</ContentList>
          <ContentList>Rosca com halteres no banco inclinado</ContentList>
          <ContentList>Remada baixa baixa com o triângulo</ContentList>
          <ContentList>Banco scott</ContentList>
          <ContentList>Rosca bíceps concentrada</ContentList>
        </ContainerList>
      </ContainerText>
    </Content>
  );
}
