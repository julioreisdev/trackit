import { ThreeDots } from "react-loader-spinner";
import styled from 'styled-components';

export default function LoaderBotao () {
  return (
    <Container>
      <ThreeDots color="#fff" height={20} width={40} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;