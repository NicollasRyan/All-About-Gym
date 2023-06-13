import {
  BoxText,
  Content,
  Text,
  Title,
  ContainerText,
  Img,
  BoxImg,
} from "./styled";

import Mentalty from "../../img/Mentalty.jpg";
import bench from "../../img/bench.jpg";

export function Prioritization() {
  return (
    <Content>
      <Title>O que é priorização de treino?</Title>
      <ContainerText>
        <BoxText>
          <Text>
            A priorização de treino muscular pode ser uma estratégia útil para
            ajudar a alcançar um desenvolvimento muscular mais equilibrado e
            efetivo. No entanto, é importante lembrar que essa estratégia deve
            ser usada com moderação e equilíbrio.
          </Text>
        </BoxText>
        <BoxImg>
          <Img src={Mentalty} />
        </BoxImg>
        <BoxText>
          <Text>
            Um dos principais motivos pelos quais as pessoas optam por priorizar
            um grupo muscular em seu treinamento é para corrigir desequilíbrios
            musculares. Por exemplo, alguém pode ter um grupo muscular mais
            fraco ou subdesenvolvido em comparação com outros grupos musculares,
            o que pode levar a lesões ou a uma aparência desigual do corpo.
            Nesses casos, é importante dedicar mais tempo e esforço ao
            treinamento do grupo muscular mais fraco para ajudar a equilibrar o
            desenvolvimento muscular.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            Outra razão pela qual as pessoas podem priorizar o treinamento de um
            grupo muscular específico é para fins estéticos. Por exemplo, alguém
            pode desejar aprimorar a aparência muscular dos braços, pernas ou
            abdômen. Nesses casos, é importante incluir exercícios específicos
            para esses grupos musculares em seu treinamento e aumentar a
            frequência de treinamento dessas áreas do corpo.
          </Text>
        </BoxText>

        <BoxText>
          <Text>
            Para priorizar um grupo muscular específico em seu treinamento, é
            importante seguir um plano de treinamento adequado que inclua
            exercícios específicos para esse grupo muscular. Por exemplo, se
            alguém deseja priorizar o desenvolvimento dos braços, pode incluir
            mais exercícios para bíceps e tríceps em seu treinamento. Também
            pode ser útil aumentar a frequência de treinamento desses músculos,
            incluindo-os em sessões de treinamento adicionais ao longo da
            semana.
          </Text>
        </BoxText>
        <BoxText>
          <Text>
            No entanto, é importante lembrar que a priorização excessiva de um
            grupo muscular pode levar a desequilíbrios musculares e lesões.
            Portanto, é importante seguir um plano de treinamento equilibrado e
            variado que inclua exercícios para todos os principais grupos
            musculares do corpo. Também é importante variar o tipo e a
            intensidade dos exercícios ao longo do tempo para evitar o estresse
            excessivo em um grupo muscular específico.
          </Text>
        </BoxText>
        <BoxImg>
          <Img src={bench} />
        </BoxImg>
        <BoxText>
          <Text>
            Em resumo, a priorização de treino muscular pode ser uma estratégia
            útil para alcançar um desenvolvimento muscular mais equilibrado e
            efetivo. No entanto, é importante usar essa estratégia com moderação
            e equilíbrio, e seguir um plano de treinamento adequado que inclua
            exercícios para todos os principais grupos musculares do corpo.
          </Text>
        </BoxText>
      </ContainerText>
    </Content>
  );
}
