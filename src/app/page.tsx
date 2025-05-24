import { styled } from '@linaria/react';
import AnimatedWaves from "@/app/home/components/animatedWaves";
import Home from './home/home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export default function Page() {
  return (
    <>
      <Container>
        <Home />
        <AnimatedWaves />
      </Container>
    </>
  );
}
