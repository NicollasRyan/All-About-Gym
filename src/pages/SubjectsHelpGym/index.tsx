import {
  Content,
  Title,
  ContainerList,
  ContentList,
  ContainerText,
  Img,
  BoxImg,
} from "./styled";

import belt from "../../img/belt.jpg";
import gloves from "../../img/gloves.jpg";
import pulse from "../../img/pulse.jpg";
import kneePad from "../../img/kneePad.jpg";
import strep from "../../img/strep.jpg";

export function SubjectsHelpGym() {
  return (
    <Content>
      <Title>Saiba mais sobre os materias para auxiliar na academia:</Title>
      <ContainerText>
        <ContainerList>
          <ContentList>
            Strap: é um acessório utilizado no treinamento de musculação e
            levantamento de peso para melhorar a aderência e a segurança durante
            os exercícios que envolvem a pegada. Ele consiste em uma tira de
            material resistente, geralmente nylon, que é enrolada em torno do
            pulso e conectada a uma alça ou gancho.
            <BoxImg>
              <Img src={strep} />
            </BoxImg>
          </ContentList>
          <ContentList>
            Luvas de treino: São luvas acolchoadas, geralmente feitas de couro
            ou materiais sintéticos, que oferecem proteção e aderência durante
            exercícios que envolvem pegada, como levantamento de peso e barras.
            Elas ajudam a reduzir o atrito e proporcionam uma melhor aderência,
            evitando lesões nas mãos.
            <BoxImg>
              <Img src={gloves} />
            </BoxImg>
          </ContentList>
          <ContentList>
            Cinturão de levantamento de peso: É um acessório utilizado para
            fornecer suporte lombar durante exercícios de levantamento de peso,
            como agachamentos, levantamento terra e supino. O cinturão ajuda a
            estabilizar a coluna vertebral, reduzindo o risco de lesões e
            permitindo levantar cargas mais pesadas com segurança.
            <BoxImg>
              <Img src={belt} />
            </BoxImg>
          </ContentList>
          <ContentList>
            joelheira: é um tipo específico de joelheira projetada para fornecer
            suporte adicional ao joelho durante os treinos de musculação e
            exercícios de força na academia. Ela é especialmente útil em
            exercícios que envolvem agachamentos, levantamentos de peso, lunges
            e outros movimentos que colocam uma carga significativa sobre a
            articulação do joelho.
            <BoxImg>
              <Img src={kneePad} />
            </BoxImg>
          </ContentList>
          <ContentList>
            A pulseira de pulso: é geralmente feita de materiais elásticos, como
            nylon ou neoprene, e possui uma faixa ajustável que é envolvida em
            torno do pulso, fornecendo compressão e suporte à articulação. Ela
            ajuda a evitar o movimento excessivo do pulso, o que pode ocorrer
            durante exercícios pesados, e fornece estabilidade adicional ao
            realizar levantamentos ou movimentos que exijam força dos membros
            superiores.
            <BoxImg>
              <Img src={pulse} />
            </BoxImg>
          </ContentList>
        </ContainerList>
      </ContainerText>
    </Content>
  );
}
