import { Container, ContainerImg, ContainerText, Img, Text } from "./styled";

import cbum from "../../img/cbum.png";

export function Home() {
  return (
    <Container>
      <ContainerImg>
        <Img src={cbum} />
      </ContainerImg>
      <ContainerText>
        <Text>Saiba tudo sobre Academia.</Text>
      </ContainerText>
    </Container>
  );
}
