import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import DadosUser from "../Context/DadosUser";
import LoaderBotao from "../Loader/LoaderBotao";

export default function FormCriarHabito({
  tap,
  setTap,
  send,
  setSend,
  controlador,
  setControlador,
}) {
  const { config } = useContext(DadosUser);
  const { nomeHabito, setNomeHabito } = useContext(DadosUser);

  const [dom, setDom] = useState({
    id: 0,
    selected: false,
  });
  const [seg, setSeg] = useState({
    id: 1,
    selected: false,
  });
  const [ter, setTer] = useState({
    id: 2,
    selected: false,
  });
  const [qua, setQua] = useState({
    id: 3,
    selected: false,
  });
  const [qui, setQui] = useState({
    id: 4,
    selected: false,
  });
  const [sex, setSex] = useState({
    id: 5,
    selected: false,
  });
  const [sab, setSab] = useState({
    id: 6,
    selected: false,
  });

  const idsDias = [dom, seg, ter, qua, qui, sex, sab];

  const dias = [
    {
      day: "D",
      id: 0,
      selected: false,
    },
    {
      day: "S",
      id: 1,
      selected: false,
    },
    {
      day: "T",
      id: 2,
      selected: false,
    },
    {
      day: "Q",
      id: 3,
      selected: false,
    },
    {
      day: "Q",
      id: 4,
      selected: false,
    },
    {
      day: "S",
      id: 5,
      selected: false,
    },
    {
      day: "S",
      id: 6,
      selected: false,
    },
  ];

  function select(e, d, click, setClick) {
    setClick(!click);
    d.selected = !click;

    if (d.id === 0) {
      setDom({
        id: 0,
        selected: !click,
      });
    } else if (d.id === 1) {
      setSeg({
        id: 1,
        selected: !click,
      });
    } else if (d.id === 2) {
      setTer({
        id: 2,
        selected: !click,
      });
    } else if (d.id === 3) {
      setQua({
        id: 3,
        selected: !click,
      });
    } else if (d.id === 4) {
      setQui({
        id: 4,
        selected: !click,
      });
    } else if (d.id === 5) {
      setSex({
        id: 5,
        selected: !click,
      });
    } else if (d.id === 6) {
      setSab({
        id: 6,
        selected: !click,
      });
    }
  }

  function Dias(d) {
    const [click, setClick] = useState(false);
    return (
      <Dia
        key={d.id}
        onClick={(e) => select(e, d, click, setClick)}
        color={click ? "#fff" : "#CFCFCF"}
        background={click ? "#CFCFCF" : "#fff"}
      >
        {d.day}
      </Dia>
    );
  }

  function submit(e) {
    e.preventDefault();

    setSend(true);

    const selecionados = [];

    for (let i = 0; i < idsDias.length; i++) {
      if (idsDias[i].selected) {
        selecionados.push(idsDias[i].id);
      }
    }

    if (selecionados.length === 0) {
      for (let i = 0; i < 7; i++) {
        selecionados.push(i);
      }
    }

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promise = axios.post(
      URL,
      {
        name: nomeHabito,
        days: selecionados,
      },
      config
    );

    promise
      .then((response) => {
        console.log("OK");
        setTap(false);
        setSend(false);
        setNomeHabito("");
        setControlador(controlador + 1);
      })
      .catch((err) => {
        console.log(err);
        console.log("ERROR");
        alert("TENTE NOVAMENTE!");
        setSend(false);
      });
  }

  return (
    <Container>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          required
          placeholder="nome do hábito"
          onChange={(e) => setNomeHabito(e.target.value)}
          value={nomeHabito}
        />
        <div>{dias.map((d) => Dias(d))}</div>
        <Botoes>
          <p value="cancelar" onClick={() => setTap(false)}>
            Cancelar
          </p>
          <button value="salvar">
            {send ? <LoaderBotao w="40" h="10" /> : "Salvar"}
          </button>
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
