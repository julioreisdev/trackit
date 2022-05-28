import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import DadosUser from "../Context/DadosUser";

export default function ListarHabitos({ controlador, setControlador }) {
  const { config } = useContext(DadosUser);

  const [habitos, setHabitos] = useState([]);

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

  function Habitos({ h }) {
    const dias = [
      {
        day: "D",
        id: 0,
      },
      {
        day: "S",
        id: 1,
      },
      {
        day: "T",
        id: 2,
      },
      {
        day: "Q",
        id: 3,
      },
      {
        day: "Q",
        id: 4,
      },
      {
        day: "S",
        id: 5,
      },
      {
        day: "S",
        id: 6,
      },
    ];

    function Dias({ d, h }) {
      for (let i = 0; i < h.days.length; i++) {
        if (d.id === h.days[i]) {
          return (
            <Dia color="#fff" background="#CFCFCF">
              {d.day}
            </Dia>
          );
        }
      }
      return (
        <Dia color="#DBDBDB" background="#fff">
          {d.day}
        </Dia>
      );
    }

    function deletar(h) {
      const resposta = window.confirm(`Deletar ${h.name}?`);

      if (resposta) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`;
        const promise = axios.delete(URL, config);

        promise
          .then((response) => {
            setControlador(controlador + 1);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    return (
      <Habito>
        <p>{h.name}</p>
        <div>
          {dias.map((d) => (
            <Dias d={d} h={h} />
          ))}
        </div>
        <span onClick={() => deletar(h)}>
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </Habito>
    );
  }

  return (
    <Container>
      {habitos.map((h, index) => (
        <Habitos key={index} h={h} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 1rem 85px 1rem;
`;

const Habito = styled.div`
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 3px;
  position: relative;
  word-wrap: break-word;

  div {
    display: flex;
  }

  p {
    margin-bottom: 1rem;
    color: #666;
  }

  ion-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Dia = styled.p`
  width: 25px;
  text-align: center;
  border-radius: 3px;
  margin-right: 0.5rem;
  color: ${(props) => props.color} !important;
  background-color: ${(props) => props.background};
  padding: 0.2rem;
  border: 1px solid #d4d4d4;
`;
