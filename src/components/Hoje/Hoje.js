import Menu from "../Menu/Menu";
import styled from "styled-components";
import Dia from "./Dia";
import { useContext, useEffect, useState } from "react";
import DadosUser from "../Context/DadosUser";
import axios from "axios";

export default function Hoje({ atualizar, setAtualizar }) {
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const numeroDiaSemana = data.getDay();
  const diaSemana = Dia(numeroDiaSemana);
  const [habitosHoje, setHabitosHoje] = useState([]);

  const { config } = useContext(DadosUser);
  const { setPercentual } = useContext(DadosUser);

  let cont = 0;

  function porcent(h) {
    for (let i = 0; i < h.length; i++) {
      if (h[i].done) {
        cont++;
      }
    }
  }

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
  }, [atualizar]);

  const naoHabitos = habitosHoje.length === 0;

  function Habito({ h }) {
    const [completo, setCompleto] = useState(false);

    function marcaDesmarcaHabito() {
      if (h.done) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`;
        const promise = axios.post(URL, {}, config);
        promise
          .then((response) => {})
          .catch((err) => {
            console.log(err);
          });
      } else {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`;
        const promise = axios.post(URL, {}, config);
        promise
          .then((response) => {})
          .catch((err) => {
            console.log(err);
          });
      }
    }

    function completarHabito() {
      setCompleto(!completo);
      marcaDesmarcaHabito();
      setAtualizar(!atualizar);
    }

    return (
      <ContainerHabito>
        <ContainerHabitoSection>
          <div>
            <h3>{h.name}</h3>
            <p value="atual">
              <span>Sequência atual: </span>
              <Span
                color={
                  completo || h.highestSequence === h.currentSequence
                    ? "#8FC549"
                    : "#666"
                }
              >
                {h.currentSequence}
              </Span>
            </p>
            <p value="recorde">
              <span>Seu recorde: </span>
              <Span
                color={
                  h.highestSequence === h.currentSequence ? "#8FC549" : "#666"
                }
              >
                {h.highestSequence}
              </Span>
            </p>
          </div>
          <Icone
            onClick={() => completarHabito()}
            color={completo || h.done ? "#8FC549" : "#EBEBEB"}
          >
            <ion-icon name="checkbox"></ion-icon>
          </Icone>
        </ContainerHabitoSection>
      </ContainerHabito>
    );
  }

  porcent(habitosHoje);

  setPercentual((cont * 100) / habitosHoje.length);

  return (
    <Container>
      <Menu />
      <Data>{`${diaSemana} ${dia < 10 ? `0${dia}` : dia}/${
        mes < 10 ? `0${mes}` : mes
      }`}</Data>
      <Subtitulo color={naoHabitos ? "grey" : "#8FC549"}>
        {naoHabitos
          ? "Nenhum hábito concluído ainda"
          : `${Math.round(
              (cont * 100) / habitosHoje.length
            )}% dos hábitos concluídos`}
      </Subtitulo>
      {habitosHoje.map((h) => (
        <Habito h={h} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
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

const ContainerHabito = styled.div`
  padding: 0.5rem 1rem;

  :last-child {
    padding-bottom: 100px;
  }
`;

const ContainerHabitoSection = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const Icone = styled.span`
  font-size: 4rem;
  color: ${(props) => props.color} !important;
`;

const Span = styled.span`
  color: ${(props) => props.color};
`;
