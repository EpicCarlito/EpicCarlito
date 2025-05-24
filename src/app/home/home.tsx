"use client"

import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useState } from 'react';
import { ImInfo } from "react-icons/im";
import { MdLibraryMusic, MdConstruction } from "react-icons/md";
import { BsEnvelopePaperFill } from "react-icons/bs";

import { scaleDown, scaleUp } from '@/components/animations';
import Socials from '@/app/home/components/socials';
import Name from './components/name';
import DraggableWindow from '@/app/home/components/DraggableWindow';

import AboutMe from "./aboutMe";
import Musica from './musica';

interface props {
  name: string;
  Icon: any;
  children?: React.ReactNode;
}

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f2937;
  border: 1px solid var(--white-but-not);
  padding: 2rem;
  gap: 0.75rem;

  @media (min-width: 48rem) {
    padding: 3rem;
  }
`

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`

const ButtonIcon = css`
  cursor: pointer;
  height: 3rem;
  width: 3rem;

  @media (min-width: 48rem) {
    height: 4rem;
    width: 4rem;
  }
`

const ButtonText = styled.p`
  font-size: var(--text-sm);
  font-weight: bolder;
`

const SocialsDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 0.25rem;
`

const Divider = styled.div`
  flex-grow: 1;
  border-top: 2px solid var(--white-but-not);
`

const SocialsText = styled.span`
  font-size: var(--text-base);
  padding-inline: 0.75rem;
`

export default function Home() {
  return (
    <>
      <Container>
        <ItemContainer>
          <Name />
          <Buttons>
            <ToggleButton name='about' Icon={ImInfo}>
              <AboutMe />
            </ToggleButton>
            <ToggleButton name='música' Icon={MdLibraryMusic}>
              <Musica />
            </ToggleButton>
            <ToggleButton name='projects' Icon={MdConstruction} />
            <ToggleButton name='poems' Icon={BsEnvelopePaperFill} />
          </Buttons>
          <SocialsDivider>
            <Divider />
            <SocialsText>Socials</SocialsText>
            <Divider />
          </SocialsDivider>
          <Socials />
        </ItemContainer>
      </Container>
    </>
  );
}

function ToggleButton(props: props) {
  const { name, Icon, children } = props;
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <ButtonContainer onClick={() => setShowPopup(!showPopup)}>
        <Icon className={`${ButtonIcon} ${scaleUp} ${scaleDown}`} />
        <ButtonText>{name}</ButtonText>
      </ButtonContainer>

      {showPopup && (
      <DraggableWindow name={name} setState={setShowPopup}>
        {children}
      </DraggableWindow>
      )}
    </>
  )
}
