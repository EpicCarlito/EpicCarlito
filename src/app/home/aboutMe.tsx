import { styled } from '@linaria/react';
import AnimatedWaves from "@/app/home/animatedWaves";
import ProfileCard from "../../components/profileCard";
import NowPlaying from '@/components/nowPlaying';
import Name from '@/components/name';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 2rem 1.5rem;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default function Page() {
  return (
    <>
      <Container>
        <Header>
          <Name />
          <p>Java and TypeScript Coder</p>
        </Header>
        <h1>WHATTHAHAHTHTA</h1>
      </Container>
    </>
  );
}
