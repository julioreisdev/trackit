import Menu from "../Menu/Menu";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import DadosUser from "../Context/DadosUser";
import axios from "axios";
import FormCriarHabito from "./FormCriarHabito";
import ListarHabitos from "./ListarHabitos";

export default function Habitos() {
  const [send, setSend] = useState(false);
  const [controlador, setControlador] = useState(0);

  const textoSemHabitos =
    "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";

  const { config } = useContext(DadosUser);
  const { habitos, setHabitos } = useContext(DadosUser);

  const [tap, setTap] = useState(false);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.get(URL, config);

    promise
      .then((response) => {
        setHabitos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [controlador]);

  return (
    <Container>
      <Menu />
      <Cabecalho>
        <h2>Meus hábitos</h2>
        <p onClick={() => setTap(true)}>+</p>
      </Cabecalho>
      {tap ? (
        <FormCriarHabito
          tap={tap}
          setTap={setTap}
          send={send}
          setSend={setSend}
          controlador={controlador}
          setControlador={setControlador}
        />
      ) : null}
      {habitos.length === 0 ? <Frase>{textoSemHabitos}</Frase> : null}
      <ListarHabitos
        controlador={controlador}
        setControlador={setControlador}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;
`;

const Cabecalho = styled.div`
  padding: 90px 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    color: #126ba5;
  }

  p {
    font-size: 1.5rem;
    padding: 0.1rem 0.75rem 0.4rem 0.75rem;
    background-color: #52b6ff;
    border-radius: 3px;
    color: #fff;
  }
`;

const Frase = styled.p`
  color: #666666;
  padding: 1rem;
`;
