import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <Container>
      <form>
        <input
          id="email"
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          id="password"
          type="password"
          placeholder="senha"
          required
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />
        <Botao type="submit">Entrar</Botao>
        <Link to="/cadastro" className="link">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  form {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      padding: 0.7rem 0.5rem;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    p {
      color: #52b6ff;
      text-decoration: underline;
      text-align: center;
      margin-top: 1rem;
    }
  }
`;

const Botao = styled.button`
  padding: 0.5rem;
  border: 1px solid #52b6ff;
  border-radius: 3px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #52b6ff;
`;