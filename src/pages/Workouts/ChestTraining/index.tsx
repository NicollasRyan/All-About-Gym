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

export function ChestTraining() {
  return (
    <Content>
      <Title>Treino de peito</Title>
      <ContainerText>
        <BoxText>
          <Text>
            O treino de peito é uma parte importante do treinamento de força e
            desenvolvimento muscular da parte superior do corpo. O peito é
            composto principalmente pelo músculo peitoral maior, que é
            responsável por movimentos como a flexão do braço em direção ao
            centro do corpo e a adução do braço em direção ao centro do peito.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            Um treino bem estruturado para o peito visa fortalecer e desenvolver
            o músculo peitoral maior, proporcionando um peitoral mais definido e
            simétrico. Além disso, outros músculos, como o peitoral menor, os
            deltoides e os tríceps, também são trabalhados como músculos
            sinergistas durante os exercícios para o peito.
          </Text>
        </BoxText>
      </ContainerText>
    </Content>
  );
}
