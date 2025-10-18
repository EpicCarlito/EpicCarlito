import { styled } from '@linaria/react';
import Waves from "./components/waves";
import Home from './home/page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 109lvh;
  width: 100%;
  overflow: hidden;
  touch-action: none;

  @media (min-width: 40rem) {
    height: 100lvh;
  }
`;

export default async function Page() {
  return (
    <Container>
      <Home />
      <Waves />
    </Container>
  );
}
