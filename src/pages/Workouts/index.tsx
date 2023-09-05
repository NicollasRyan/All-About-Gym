import { ContainerText, Content, Div, LinkTraninig, Title } from "./styled";

export function Workouts() {
  return (
    <Content>
      <Title>Veja mais sobre os tipos de treinos aqui:</Title>
      <ContainerText>
        <Div>
          <LinkTraninig to="/workouts/back">Costas</LinkTraninig>

          <LinkTraninig to="/workouts/chest">Peito</LinkTraninig>
        </Div>
        <Div>
          <LinkTraninig to="/workouts/biceps">Biceps</LinkTraninig>

          <LinkTraninig to="/workouts/triceps">Triceps</LinkTraninig>
        </Div>
        <Div>
          <LinkTraninig to="/workouts/shoulder">Ombros</LinkTraninig>

          <LinkTraninig to="/workouts/leg">Perna</LinkTraninig>
        </Div>
      </ContainerText>
    </Content>
  );
}
