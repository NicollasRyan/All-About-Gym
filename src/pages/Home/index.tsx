import {
  Body,
  ContainerBox,
  ContainerHome,
  ContainerImg,
  ContainerText,
  Img,
  Text,
} from "./styled";

import cbum from "../../img/cbum.png";

export function Home() {
  return (
    <Body>
      <ContainerHome>
        <ContainerBox>
          <ContainerImg>
            <Img src={cbum} />
          </ContainerImg>
          <ContainerText>
            <Text>Saiba tudo sobre Academia.</Text>
          </ContainerText>
        </ContainerBox>
      </ContainerHome>
    </Body>
  );
}
