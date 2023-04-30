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
  BoxImgCutting,
} from "./styled";

import Arnold from "../../img/Arnold.jpg";
import Eating from "../../img/Eating.jpg";
import Cutting from "../../img/Cutting.jpg";
import CuttingCbum from "../../img/CuttingCbum.jpg";

export function Nutrition() {
  return (
    <Content>
      <Title>Saiba mais sobre alimetação</Title>
      <ContainerText>
        <BoxText>
          <Text>
            Para ganhar massa muscular ou fazer um bulking, é importante ter uma
            dieta balanceada e adequada às suas necessidades individuais. A
            seguir, estão algumas dicas para uma alimentação eficaz para ganhar
            massa muscular:
          </Text>
        </BoxText>
        <BoxImg>
          <ImgProteina src={Eating} />
        </BoxImg>

        <ContainerList>
          <ContentList>
            Consuma calorias suficientes: Para ganhar massa muscular, você
            precisa estar em um superávit calórico, que significa consumir mais
            calorias do que você queima diariamente. Isso fornece ao seu corpo
            energia extra para apoiar o crescimento muscular. Você pode calcular
            suas necessidades calóricas diárias usando uma calculadora online e
            adicionar cerca de 10-20% a esse número para atingir suas metas de
            bulking.
          </ContentList>
          <ContentList>
            Consuma proteínas suficientes: As proteínas são os blocos de
            construção do músculo, e você precisa de proteínas suficientes para
            construir e reparar o tecido muscular danificado durante o
            treinamento. A quantidade ideal de proteína que você precisa depende
            de fatores como seu peso, sexo, idade e nível de atividade física. A
            recomendação geral para bulking é consumir entre 1,6 e 2,2 gramas de
            proteína por quilo de peso corporal por dia. As melhores fontes de
            proteína são carnes magras, aves, peixes, ovos, laticínios,
            leguminosas e suplementos de proteína. intensidade e volume.
          </ContentList>
          <ContentList>
            Consuma carboidratos suficientes: Os carboidratos são a principal
            fonte de energia para o corpo e são importantes para apoiar o
            crescimento muscular. Para bulking, recomenda-se consumir
            carboidratos em torno de 2-3 gramas por quilo de peso corporal por
            dia. É importante escolher carboidratos saudáveis, como frutas,
            legumes, arroz integral, massas integrais, pães integrais e
            batata-doce.
          </ContentList>
          <ContentList>
            Consuma gorduras saudáveis: As gorduras saudáveis são importantes
            para manter níveis saudáveis de hormônios anabólicos e para a saúde
            geral. As melhores fontes de gorduras saudáveis são nozes, sementes,
            abacate, azeite de oliva, peixes gordurosos e óleo de coco. Tente
            consumir cerca de 0,5-1 grama de gordura por quilo de peso corporal
            por dia.
          </ContentList>
          <ContentList>
            Faça refeições frequentes: Comer várias vezes ao dia é importante
            para fornecer ao corpo nutrientes suficientes para o crescimento
            muscular. Tente comer de 4 a 6 refeições por dia, incluindo lanches
            saudáveis, para manter o corpo nutrido e energizado.
          </ContentList>
          <ContentList>
            Coma alimentos ricos em nutrientes: Escolher alimentos ricos em
            nutrientes é importante para a saúde geral e para apoiar o
            crescimento muscular. Certifique-se de incluir frutas e vegetais
            coloridos em sua dieta, bem como nozes, sementes e grãos integrais.
          </ContentList>
          <ContentList>
            Beba bastante água: A hidratação é importante para manter o corpo
            funcionando corretamente e para apoiar o crescimento muscular.
            Certifique-se de beber bastante água durante todo o dia e durante o
            treinamento para evitar a desidratação.
          </ContentList>
        </ContainerList>
        <BoxImg>
          <Img src={Arnold} />
        </BoxImg>

        <BoxTextDry>
          <Text>
            Para secar muscular, ou seja, realizar um processo de cutting, é
            necessário promover um déficit calórico no organismo. Isso significa
            que você precisa consumir menos calorias do que gasta ao longo do
            dia, a fim de queimar gordura e reduzir o percentual de gordura
            corporal.
          </Text>
        </BoxTextDry>
        <BoxImg>
          <Img src={Cutting} />
        </BoxImg>
        <BoxText>
          <Text>
            Para atingir esse objetivo, é importante seguir uma dieta
            equilibrada e saudável, que inclua alimentos ricos em nutrientes e
            fibras, mas que ao mesmo tempo sejam pouco calóricos. Algumas dicas
            para montar uma dieta de cutting são:
          </Text>
        </BoxText>

        <ContainerList>
          <ContentList>
            Consuma calorias suficientes: Para ganhar massa muscular, você
            precisa estar em um superávit calórico, que significa consumir mais
            calorias do que você queima diariamente. Isso fornece ao seu corpo
            energia extra para apoiar o crescimento muscular. Você pode calcular
            suas necessidades calóricas diárias usando uma calculadora online e
            adicionar cerca de 10-20% a esse número para atingir suas metas de
            bulking.
          </ContentList>
          <ContentList>
            Consuma proteínas suficientes: As proteínas são os blocos de
            construção do músculo, e você precisa de proteínas suficientes para
            construir e reparar o tecido muscular danificado durante o
            treinamento. A quantidade ideal de proteína que você precisa depende
            de fatores como seu peso, sexo, idade e nível de atividade física. A
            recomendação geral para bulking é consumir entre 1,6 e 2,2 gramas de
            proteína por quilo de peso corporal por dia. As melhores fontes de
            proteína são carnes magras, aves, peixes, ovos, laticínios,
            leguminosas e suplementos de proteína. intensidade e volume.
          </ContentList>
          <ContentList>
            Consuma carboidratos suficientes: Os carboidratos são a principal
            fonte de energia para o corpo e são importantes para apoiar o
            crescimento muscular. Para bulking, recomenda-se consumir
            carboidratos em torno de 2-3 gramas por quilo de peso corporal por
            dia. É importante escolher carboidratos saudáveis, como frutas,
            legumes, arroz integral, massas integrais, pães integrais e
            batata-doce.
          </ContentList>
          <ContentList>
            Consuma gorduras saudáveis: As gorduras saudáveis são importantes
            para manter níveis saudáveis de hormônios anabólicos e para a saúde
            geral. As melhores fontes de gorduras saudáveis são nozes, sementes,
            abacate, azeite de oliva, peixes gordurosos e óleo de coco. Tente
            consumir cerca de 0,5-1 grama de gordura por quilo de peso corporal
            por dia.
          </ContentList>
          <ContentList>
            Faça refeições frequentes: Comer várias vezes ao dia é importante
            para fornecer ao corpo nutrientes suficientes para o crescimento
            muscular. Tente comer de 4 a 6 refeições por dia, incluindo lanches
            saudáveis, para manter o corpo nutrido e energizado.
          </ContentList>
          <ContentList>
            Coma alimentos ricos em nutrientes: Escolher alimentos ricos em
            nutrientes é importante para a saúde geral e para apoiar o
            crescimento muscular. Certifique-se de incluir frutas e vegetais
            coloridos em sua dieta, bem como nozes, sementes e grãos integrais.
          </ContentList>
          <ContentList>
            Beba bastante água: A hidratação é importante para manter o corpo
            funcionando corretamente e para apoiar o crescimento muscular.
            Certifique-se de beber bastante água durante todo o dia e durante o
            treinamento para evitar a desidratação.
          </ContentList>
        </ContainerList>
        <BoxImgCutting>
          <ImgCutting src={CuttingCbum} />
        </BoxImgCutting>
      </ContainerText>
    </Content>
  );
}
