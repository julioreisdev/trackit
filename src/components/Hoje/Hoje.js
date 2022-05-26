import Menu from "../Menu/Menu";
import styled from "styled-components";
import Dia from "./Dia";
import { useContext, useEffect, useState } from "react";
import DadosUser from "../Context/DadosUser";
import axios from "axios";

export default function Hoje() {
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const numeroDiaSemana = data.getDay();
  const diaSemana = Dia(numeroDiaSemana);
  const [habitosHoje, setHabitosHoje] = useState([]);

  const { config } = useContext(DadosUser);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const promise = axios.get(URL, config);

    promise
      .then((response) => {
        setHabitosHoje(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const naoHabitos = habitosHoje.length === 0;

  return (
    <Container>
      <Menu />
      <Data>{`${diaSemana} ${dia < 10 ? `0${dia}` : dia}/${
        mes < 10 ? `0${mes}` : mes
      }`}</Data>
      <Subtitulo color={naoHabitos ? "grey" : "#8FC549"}>
        {naoHabitos
          ? "Nenhum hábito concluído ainda"
          : "x% dos hábitos concluídos"}
      </Subtitulo>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
`;

const Data = styled.div`
  padding-top: 90px;
  color: #126ba5;
  padding-left: 1rem;
  font-size: 1.5rem;
`;

const Subtitulo = styled.p`
  padding: 0.5rem 1rem;
  color: ${(props) => props.color};
`;
