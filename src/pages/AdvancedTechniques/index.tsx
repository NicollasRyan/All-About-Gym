import {
  Content,
  Title,
  ContainerList,
  ContentList,
  ContainerText,
  Img,
  Text,
  BoxText,
} from "./styled";

import belt from "../../img/belt.jpg";
import gloves from "../../img/gloves.jpg";
import pulse from "../../img/pulse.jpg";
import kneePad from "../../img/kneePad.jpg";
import strep from "../../img/strep.jpg";

export function AdvancedTechniques() {
  return (
    <Content>
      <Title>Saiba mais sobre as Tecnicas avançadas:</Title>
      <ContainerText>
        <BoxText>
          <Text>
            Existem várias técnicas avançadas que podem ser incorporadas ao
            treinamento de academia para promover desafio adicional, estimular o
            crescimento muscular e melhorar a força. Aqui estão algumas técnicas
            avançadas que podem ser utilizadas:
          </Text>
        </BoxText>
        <ContainerList>
          <ContentList>
            Supersets: Consiste em realizar dois exercícios consecutivos sem
            descanso entre eles. Pode ser feito com exercícios que trabalham o
            mesmo grupo muscular (supersets de isolamento) ou exercícios que
            trabalham grupos musculares diferentes (supersets compostos). Isso
            aumenta a intensidade do treino e economiza tempo.
          </ContentList>
          <ContentList>
            Drop sets: Envolve realizar uma série de exercícios até a falha
            muscular e, em seguida, reduzir imediatamente o peso e continuar o
            exercício com outra série até a falha. Isso permite um aumento
            adicional de volume e fadiga muscular.
          </ContentList>
          <ContentList>
            Rest-pause: Consiste em realizar uma série até a falha muscular,
            fazer uma breve pausa de 10 a 15 segundos e, em seguida, continuar o
            exercício com mais algumas repetições até a falha. Essa técnica
            ajuda a aumentar a intensidade e a fadiga muscular.
          </ContentList>
          <ContentList>
            Negativas: Focam na fase excêntrica do movimento, que é a fase de
            alongamento do músculo. Nessa técnica, você usa um peso mais pesado
            do que consegue levantar sozinho e, em seguida, recebe assistência
            para levantar o peso e faz a fase excêntrica lentamente e
            controladamente. Isso ajuda a recrutar mais fibras musculares e
            promover o crescimento muscular.
          </ContentList>
          <ContentList>
            Repetições forçadas: Consistem em realizar repetições extras após a
            falha muscular com a assistência de um parceiro de treino ou através
            de técnicas como o uso de elásticos de resistência ou máquinas
            assistidas. Isso permite que você leve os músculos além da falha e
            promova um estímulo adicional de crescimento.
          </ContentList>
          <ContentList>
            Pirâmides: São séries em que você aumenta ou diminui gradualmente o
            peso a cada série. Por exemplo, em uma pirâmide crescente, você
            começa com um peso mais leve e aumenta o peso a cada série, enquanto
            em uma pirâmide decrescente, você começa com um peso mais pesado e
            diminui o peso a cada série. Isso ajuda a recrutar diferentes tipos
            de fibras musculares e aumentar a intensidade do treino.
          </ContentList>
        </ContainerList>
      </ContainerText>
    </Content>
  );
}
