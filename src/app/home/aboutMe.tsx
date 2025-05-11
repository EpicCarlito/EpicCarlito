import { styled } from '@linaria/react';
import AnimatedWaves from "@/components/animatedWaves";
import ProfileCard from "./profileCard";
import NowPlaying from '@/components/nowPlaying';

const Container = styled.div`
  display: flex;
  height: 100svh;
  flex-direction: column;
  justify-content: space-between;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white; // white
  margin: 0.5rem;
  padding: 0.75rem;
  background-color: #1f2937; /* bg-gray-800 */
  
  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: center;
    padding: 2.5rem;
    margin: 1rem;
  }
`

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  padding-inline: 0.5rem;

  @media (min-width: 48rem) {
    margin-left: 1rem;
  }
`

const Intro = styled.h1`
  justify-content: center;
  font-size: var(--text-xl);

  @media (min-width: 48rem) {
    font-size: var(--text-2xl)
  }

  @media (min-width: 64rem) {
    font-size: var(--text-3xl)
  }
`

const Divider = styled.div`
  height: 1px;
  border-width: 0px;
  background-color: #111827;
  margin-bottom: 0.25rem;

  @media (min-width: 48rem) {
    height: 1.5px;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 48rem) {
    flex-direction: column;
  }
`

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
`

const School = styled.p`
  font-size: var(--text-xs);

  @media (min-width: 48rem) {
    font-size: var(--text-lg)
  }

  @media (min-width: 64rem) {
    font-size: var(--text-xl)
  }
`

const InfoList = styled.ul`
  margin-left: 1.25rem;
  font-size: var(--text-xs);

  @media (min-width: 48rem) {
    font-size: var(--text-sm)
  }

  @media (min-width: 64rem) {
    font-size: var(--text-lg)
  }
`

export default function Page() {
  return (
    <>
      <Container>
        <InfoBox>
          <ProfileCard />
          <AboutSection>
            <Intro>Hola! I am James! 👋</Intro>
            <Divider />
            <ItemContainer>
              <AboutMe>
                <School>Bronx Science Sophomore</School>
                <InfoList>
                  <li>Typescript & Java Coder</li>
                  <li>Long Distance Runner</li>
                  <li>Kawaii Future Bass Music Enjoyer</li>
                </InfoList>
              </AboutMe>
              <NowPlaying />
            </ItemContainer>
          </AboutSection>
        </InfoBox>
        <AnimatedWaves />
      </Container>
    </>
  );
}
