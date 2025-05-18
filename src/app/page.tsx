import { styled } from '@linaria/react';
import AnimatedWaves from "@/app/home/animatedWaves";
import AboutMe from './home/aboutMe';

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
        <AboutMe />
        <AnimatedWaves />
      </Container>
    </>
  );
}
