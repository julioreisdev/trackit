import styled from "styled-components";
import { useContext } from "react";
import DadosUser from "../Context/DadosUser";

export default function Menu() {
  const { imgUser, setImgUser } = useContext(DadosUser);
  const { nomeUser, setNomeUser } = useContext(DadosUser);

  return (
    <Container>
      <h1>TrackIt</h1>
      <img src={imgUser} alt={nomeUser} />
    </Container>
  );
}

const Container = styled.header`
  background-color: #126ba5;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 1px 5px gray;
  font-family: "Playball", cursive;

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
