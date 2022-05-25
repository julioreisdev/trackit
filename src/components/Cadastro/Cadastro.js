import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import FormCadastro from "./FormCadastro";
import DisableAll from "../Disable/DisableAll";
import { useState } from "react";

export default function Cadastro() {
  const [disable, setDisable] = useState(false);

  return (
    <Container>
      <Logo src={logo} alt="Logo TrackIt" />
      <FormCadastro disable={setDisable} />
      {disable ? <DisableAll /> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  margin-top: 80px;
  width: 80%;
`;
