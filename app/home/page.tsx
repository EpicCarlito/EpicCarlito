"use client"

import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useState } from 'react';

import { scaleDown, scaleUp } from '../components/animations';
import Name from './components/name';
import Socials from './components/socials';

import { useSound } from 'use-sound';
import openSound from "../../public/sounds/openSound.mp3";
import DraggableWindow from '../components/DraggableWindow';
import useCheckMobile from '../hooks/useCheckMobile';

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
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

export default function Home() {
  return (
    <>
      <Container>
        <ItemContainer>
          <Name />
          <Socials />
        </ItemContainer>
      </Container>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`

const ButtonText = styled.p`
  font-size: var(--text-sm);
  font-weight: bolder;
`

function ToggleButton({
  name,
  Icon,
  children
}: props) {
  const [OpenSound] = useSound(openSound);
  const [showPopup, setShowPopup] = useState(false);
  const isMobile = useCheckMobile();

  const handleClick = () => {
    OpenSound()
    setShowPopup(!showPopup)
  }

  return (
    <>
      <ButtonContainer onClick={handleClick}>
        <Icon className={`${ButtonIcon} ${scaleUp} ${scaleDown}`} />
        <ButtonText>{name}</ButtonText>
      </ButtonContainer>

      {showPopup && (
        <DraggableWindow name={name} isMobile={isMobile} setState={setShowPopup}>
          {children}
        </DraggableWindow>
      )}
    </>
  )
}