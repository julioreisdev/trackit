import { useState } from "react";
import styled from "styled-components";

export default function FormCriarHabito({ tap, setTap }) {
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  function Dias(d, index) {
    const [click, setClick] = useState(false);

    function select(e) {
      setClick(!click);
    }

    return (
      <Dia
        key={index}
        onClick={(e) => select(e)}
        color={click ? "#fff" : "#CFCFCF"}
        background={click ? "#CFCFCF" : "#fff"}
      >
        {d}
      </Dia>
    );
  }

  return (
    <Container>
      <form>
        <input type="text" required placeholder="nome do hábito" />
        <div>{dias.map((d, index) => Dias(d, index))}</div>
        <Botoes>
          <p value="cancelar" onClick={() => setTap(false)}>
            Cancelar
          </p>
          <button value="salvar">Salvar</button>
        </Botoes>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;

  form {
    padding: 1rem;
    background-color: #fff;
    border-radius: 3px;

    input {
      padding: 0.5rem 0.25rem;
      width: 100%;
      font-size: 1rem;
      color: #666666;
      font-family: "Lexend Deca", sans-serif;
    }
  }

  div {
    display: flex;
    margin-top: 0.5rem;
  }
`;

const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 0.5rem;

  button[value="salvar"] {
    background-color: #52b6ff;
    padding: 0.3rem 0.75rem 0.4rem 0.75rem;
    font-family: "Lexend Deca", sans-serif;
    border: none;
    border-radius: 3px;
    color: #fff;
  }

  p[value="cancelar"] {
    color: #52b6ff;
    border: none;
    background-color: #fff;
    width: 75px;
    margin-right: 1rem;
    font-family: "Lexend Deca", sans-serif;
  }

  button {
    font-size: 0.9rem;
  }
`;

const Dia = styled.p`
  width: 25px;
  text-align: center;
  border-radius: 3px;
  margin-right: 0.75rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  /**/
  padding: 0.2rem;
  border: 1px solid #d4d4d4;
`;
