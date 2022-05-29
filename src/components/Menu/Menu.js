import styled from "styled-components";
import { useContext } from "react";
import DadosUser from "../Context/DadosUser";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {
  const { imgUser } = useContext(DadosUser);
  const { nomeUser } = useContext(DadosUser);
  const { percentual } = useContext(DadosUser);

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
          {/* <div>Hoje</div> */}
          <Circle>
            <CircularProgressbar
              text="Hoje"
              maxValue={100}
              value={percentual}
              strokeWidth="10"
              styles={buildStyles({
                textSize: "24px",
                textColor: "#fff",
                trailColor: "none",
                pathColor: `#fff`,
              })}
            />
          </Circle>
        </Link>
        <Link className="link" to="/historico">
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
  z-index: 1;

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
  z-index: 1;

  p {
    color: #52b6ff;
  }
`;

const Circle = styled.div`
  background-color: #52b6ff;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 0.5rem;
  position: absolute;
  bottom: 0.5rem;
  z-index: 2;
  right: calc(50% - 45px);
`;
