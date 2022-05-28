import Menu from "../Menu/Menu";
import styled from "styled-components";

export default function Historico() {
  return (
    <Container>
      <Menu />
      <Titulo></Titulo>
      <Mensagem></Mensagem>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;
`;

const Titulo = styled.h2`
  padding: 90px 1rem 1rem 1rem;
  font-size: 1.5rem;
  color: #126ba5;

  :before {
    content: "Histórico";
  }
`;

const Mensagem = styled.p`
  padding: 0 1rem;
  color: #666;

  :before {
    content: "Em breve você poderá ver o histórico dos seus hábitos aqui!";
  }
`;
