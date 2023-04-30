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
  ImgProteina,
} from "./styled";

import proteina from "../../img/proteina.jpg";
import Zolim from "../../img/Zolim.jpg";

export function Nutrition() {
  return (
    <Content>
      <Title>Saiba mais sobre alimetação</Title>
      <ContainerText>
        <BoxText>
          <Text>
            Hipertrofia é o aumento do tamanho ou volume das células, tecidos ou
            órgãos do corpo, devido ao aumento da quantidade de proteínas
            contráteis e outras estruturas celulares.
          </Text>
        </BoxText>
        <BoxImg>
          <ImgProteina src={proteina} />
        </BoxImg>
        <BoxText>
          <Text>
            No contexto do treinamento de musculação, a hipertrofia refere-se ao
            aumento da massa muscular, ou seja, a hipertrofia muscular. Esse
            processo ocorre quando o músculo é submetido a um estresse ou
            sobrecarga, como o levantamento de peso, e ocorre microlesões nas
            fibras musculares. O corpo então se adapta a essas microlesões
            reparando-as e aumentando a quantidade de proteínas contráteis no
            músculo, resultando em um aumento do seu tamanho e força.
          </Text>
        </BoxText>
        <BoxText>
          <Text>
            Hipertrofia muscular é o aumento do tamanho das fibras musculares em
            resposta a um estímulo de treinamento adequado. Para ganhar
            hipertrofia muscular, é necessário seguir uma combinação de
            treinamento de força, alimentação balanceada e descanso suficiente.
            Aqui estão algumas dicas mais específicas para ajudá-lo a ganhar
            hipertrofia:
          </Text>
        </BoxText>
        <ContainerList>
          <ContentList>
            Treinamento de força: O treinamento de força é essencial para
            estimular a hipertrofia muscular. É importante realizar exercícios
            compostos, que trabalham vários grupos musculares ao mesmo tempo,
            como agachamentos, levantamento terra, supino, entre outros. Além
            disso, é importante variar os exercícios e o número de séries e
            repetições para evitar a estagnação do ganho de massa muscular.
          </ContentList>
          <ContentList>
            Sobrecarga progressiva: É importante aumentar gradualmente a carga
            de trabalho para que o corpo se adapte ao estresse. Aumentar o peso
            e/ou o número de repetições e séries é uma forma de sobrecarga
            progressiva.
          </ContentList>
          <ContentList>
            Alimentação adequada: A alimentação é crucial para o ganho de massa
            muscular, já que o músculo é feito de proteína. Certifique-se de
            consumir proteína suficiente para atender às suas necessidades de
            crescimento muscular. Além disso, certifique-se de consumir
            carboidratos e gorduras saudáveis ​​para fornecer energia e suporte
            ao processo de construção muscular.
          </ContentList>
          <ContentList>
            Descanso e recuperação: O músculo cresce durante o descanso e a
            recuperação, portanto, é importante descansar o suficiente entre as
            sessões de treinamento e dormir o suficiente todas as noites.
          </ContentList>
          <ContentList>
            Foco na técnica: É importante realizar os exercícios com a técnica
            correta para evitar lesões e garantir o recrutamento máximo das
            fibras musculares envolvidas no movimento.
          </ContentList>
          <ContainerList>
            Suplementação: Alguns suplementos podem ajudar no ganho de
            hipertrofia, como a creatina, que ajuda na produção de energia
            durante o treino, e os BCAAs, que auxiliam na recuperação muscular.
          </ContainerList>
        </ContainerList>
        <BoxText>
          <Text>
            Lembre-se de que o ganho de hipertrofia é um processo individual e
            pode levar tempo. Mantenha-se motivado, seja consistente e tenha
            paciência para alcançar seus objetivos de ganho de massa muscular.
            Consultar um profissional de educação física ou nutricionista também
            pode ajudá-lo a desenvolver um plano de treinamento e alimentação
            personalizado.
          </Text>
        </BoxText>
        <BoxImg></BoxImg>
      </ContainerText>
    </Content>
  );
}
