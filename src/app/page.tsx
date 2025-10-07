
import { styled } from '@linaria/react';
import AnimatedWaves from "@/components/animatedWaves";
import Home from './home/home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
  width: 100%;
  overflow: hidden;
`;

export default async function Page() {
  return (
    <>
      <Container>
        <Home />
        <AnimatedWaves />
      </Container>
    </>
  );
}
