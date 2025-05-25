"use client"

import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ImInfo } from "react-icons/im";
import { MdLibraryMusic, MdConstruction } from "react-icons/md";
import { FaCircleExclamation } from "react-icons/fa6";

import { scaleDown, scaleUp } from '@/components/animations';
import Socials from '@/app/home/components/socials';
import Name from './components/name';
import DraggableWindow from '@/app/home/components/DraggableWindow';

import AboutMe from "./aboutMe";
import Musica from './musica';
import useCheckMobile from '@/hooks/useCheckMobile';

interface props {
  name: string;
  Icon: any;
  nowPlaying?: any;
  notChecked?: boolean;
  setNotChecked?: Dispatch<SetStateAction<boolean>>;
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
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 48rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
  const [nowPlaying, setNowPlaying] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notChecked, setNotChecked] = useState(false);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data: any) => {
        setNotChecked(true);
        setNowPlaying(data.nowPlaying);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Container>
        <ItemContainer>
          <Name />
          <Buttons>
            <ToggleButton name='about' Icon={ImInfo}>
              <AboutMe />
            </ToggleButton>
            <ToggleButton
              name='música'
              nowPlaying={nowPlaying}
              notChecked={notChecked}
              setNotChecked={setNotChecked}
              Icon={MdLibraryMusic}>
              <Musica nowPlaying={nowPlaying} isLoading={isLoading} />
            </ToggleButton>
            <ToggleButton name='projects' Icon={MdConstruction} />
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

function ToggleButton({
  name,
  Icon,
  nowPlaying,
  notChecked,
  setNotChecked,
  children
}: props) {
  const [showPopup, setShowPopup] = useState(false);
  const isMobile = useCheckMobile();

  const handleClick = () => {
    setShowPopup(!showPopup)
    if (notChecked && setNotChecked) setNotChecked(false);
  }

  return (
    <>
      <ButtonContainer onClick={handleClick}>
        <div>
          <Icon className={`${ButtonIcon} ${scaleUp} ${scaleDown}`} />
          {notChecked && nowPlaying && (
            <FaCircleExclamation color="red" style={{ position: 'absolute' }} />
          )}
        </div>
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