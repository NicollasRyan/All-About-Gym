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
} from "./styled";

import proteina from "../../img/proteina.jpg";
import Leg from "../../img/Leg.jpg";
import Dino from "../../img/Dino.jpg";

export function Hypertrophy() {
  return (
    <Content>
      <Title>O que é a hipertrofia?</Title>
      <ContainerText>
        <BoxText>
          <Text>
            A hipertrofia muscular é um processo complexo que envolve diversos
            fatores. Para ganhar massa muscular, é necessário seguir um plano de
            treinamento de força adequado, que envolve uma combinação de
            exercícios compostos (que trabalham vários grupos musculares ao
            mesmo tempo) e isolados (que trabalham um grupo muscular
            específico).
          </Text>
        </BoxText>
        <BoxImg>
          <ImgLeg src={Leg} />
        </BoxImg>
        <BoxText>
          <Text>
            O treinamento de força deve ser baseado em princípios como
            sobrecarga progressiva, variedade de exercícios, volume e
            intensidade. A sobrecarga progressiva significa que é necessário
            aumentar gradualmente a carga de trabalho ao longo do tempo, seja
            aumentando o peso dos exercícios, o número de repetições e séries ou
            diminuindo o tempo de descanso entre as séries.
          </Text>
        </BoxText>
        <BoxText>
          <Text>
            A variedade de exercícios é importante para evitar a estagnação no
            ganho de massa muscular. É importante variar os exercícios e os
            ângulos de treinamento para que os músculos sejam estimulados de
            maneiras diferentes. Por exemplo, em vez de sempre fazer supino
            reto, é possível variar para supino inclinado, declinado ou com
            halteres.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            O volume e a intensidade são importantes para estimular o
            crescimento muscular. O volume se refere ao número total de séries e
            repetições realizadas durante o treino, enquanto a intensidade se
            refere à carga de trabalho utilizada. É importante encontrar um
            equilíbrio entre o volume e a intensidade para obter resultados
            eficazes.
          </Text>
        </BoxText>
        <BoxText>
          <Text>
            A alimentação é fundamental para o ganho de massa muscular. É
            importante consumir proteína suficiente para fornecer os aminoácidos
            necessários para a síntese proteica. Além disso, carboidratos e
            gorduras saudáveis ​​são importantes para fornecer energia e suporte
            ao processo de construção muscular. O consumo de suplementos
            alimentares, como proteínas em pó e aminoácidos de cadeia ramificada
            (BCAAs), também pode ajudar no processo de ganho de massa muscular.
          </Text>
        </BoxText>
        <BoxImg>
          <ImgProteina src={proteina} />
        </BoxImg>
        <BoxText>
          <Text>
            A recuperação é fundamental para o ganho de hipertrofia. O músculo
            cresce durante o descanso e a recuperação, portanto, é importante
            descansar o suficiente entre as sessões de treinamento e dormir o
            suficiente todas as noites. Além disso, a hidratação adequada e a
            redução do estresse também podem ajudar no processo de recuperação.
          </Text>
        </BoxText>
        <BoxText>
          <Text>
            Por fim, é importante lembrar que o ganho de massa muscular é um
            processo individual que pode levar tempo. É necessário ser
            consistente, seguir um plano de treinamento e alimentação adequado e
            ter paciência para alcançar os objetivos desejados. Consultar um
            profissional de educação física ou nutricionista pode ser útil para
            desenvolver um plano de treinamento e alimentação personalizado.
          </Text>
        </BoxText>
        <BoxImg>
          <Img src={Dino} alt="Zolim" />
        </BoxImg>
      </ContainerText>
    </Content>
  );
}
