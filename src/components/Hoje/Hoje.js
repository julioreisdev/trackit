import Menu from "../Menu/Menu";
import styled from "styled-components";

export default function Hoje() {
  return (
    <Container>
      <Menu />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color:  #E5E5E5;
`;
