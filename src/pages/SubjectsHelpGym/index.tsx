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
  ImgCutting,
  BoxTextDry,
} from "./styled";

import Arnold from "../../img/Arnold.jpg";
import Eating from "../../img/Eating.jpg";
import Cutting from "../../img/Cutting.jpg";
import CuttingCbum from "../../img/CuttingCbum.jpg";

export function SubjectsHelpGym() {
  return (
    <Content>
      <Title>Saiba mais sobre os materias para auxiliar na academia:</Title>
      <ContainerText>
        <ContainerList>
          <ContentList>
            Steps ou caixas pliométricas: São plataformas elevadas utilizadas
            para realizar exercícios de cardio, condicionamento físico e
            treinamento de pernas, como step-ups, saltos e agachamentos. Eles
            ajudam a melhorar a resistência cardiovascular e a força das pernas.
          </ContentList>
          <ContentList>
            Elásticos de resistência: São faixas elásticas que oferecem
            resistência durante os exercícios. Podem ser usados para trabalhar
            diferentes grupos musculares, como peito, costas, ombros, braços e
            pernas. Os elásticos de resistência são leves, portáteis e permitem
            realizar uma variedade de movimentos, tanto para fortalecimento
            muscular como para exercícios de reabilitação.
          </ContentList>
          <ContentList>
            Caneleiras: São acessórios usados nas pernas, com pesos adicionais,
            que ajudam a intensificar os exercícios de membros inferiores, como
            agachamentos, levantamento de pernas e ponte de quadril. As
            caneleiras são ajustáveis e proporcionam uma resistência extra para
            fortalecer e tonificar os músculos das pernas e glúteos.
          </ContentList>
          <ContentList>
            Luvas de treino: São luvas acolchoadas, geralmente feitas de couro
            ou materiais sintéticos, que oferecem proteção e aderência durante
            exercícios que envolvem pegada, como levantamento de peso e barras.
            Elas ajudam a reduzir o atrito e proporcionam uma melhor aderência,
            evitando lesões nas mãos.
          </ContentList>
          <ContentList>
            Cinturão de levantamento de peso: É um acessório utilizado para
            fornecer suporte lombar durante exercícios de levantamento de peso,
            como agachamentos, levantamento terra e supino. O cinturão ajuda a
            estabilizar a coluna vertebral, reduzindo o risco de lesões e
            permitindo levantar cargas mais pesadas com segurança.
          </ContentList>
          <ContentList>
            Tornozeleiras de peso: São faixas ajustáveis que envolvem os
            tornozelos e possuem pesos incorporados. Elas são utilizadas para
            aumentar a resistência durante exercícios de membros inferiores,
            como elevação de pernas, chute e abdução de quadril, fortalecendo os
            músculos das pernas.
          </ContentList>
        </ContainerList>
        <BoxImg>
          <Img src={Arnold} />
        </BoxImg>
      </ContainerText>
    </Content>
  );
}
