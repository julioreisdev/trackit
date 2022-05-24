import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import FormLogin from "./FormLogin";

export default function Login() {
  return (
    <Container>
      <Logo src={logo} alt="Logo TrackIt" />
      <FormLogin />
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
