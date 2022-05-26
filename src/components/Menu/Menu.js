import styled from "styled-components";
import { useContext } from "react";
import DadosUser from "../Context/DadosUser";
import { Link } from "react-router-dom";

export default function Menu() {
  const { imgUser } = useContext(DadosUser);
  const { nomeUser } = useContext(DadosUser);

  return (
    <Container>
      <Header>
        <h1>TrackIt</h1>
        <img src={imgUser} alt={nomeUser} />
      </Header>
      <Footer>
        <Link className="link" to="/habitos">
          <p>Hábitos</p>
        </Link>
        <Link className="link" to="/hoje">
          <div>Hoje</div>
        </Link>
        <Link className="link" to="/historio">
          <p>Histórico</p>
        </Link>
      </Footer>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.header`
  background-color: #126ba5;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 1px 5px gray;
  font-family: "Playball", cursive;
  position: fixed;
  top: 0;

  h1 {
    font-size: 2.5rem;
    color: #fff;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 -1px 5px gainsboro;

  p {
    color: #52b6ff;
  }

  div {
    font-weight: bold;
    width: 90px;
    height: 90px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #52b6ff;
    position: absolute;
    bottom: 0.5rem;
    right: calc(50% - 45px);
  }
`;
