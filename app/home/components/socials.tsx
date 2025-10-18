import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import useSound from "use-sound";
import Starva from "../../../public/social/starva.svg";
import socialSound from "../../../public/sounds/socialSound.mp3";
import { scaleDown, scaleUp } from '../../components/animations';

interface props {
  href: string;
  Icon: IconType | FC;
}

const SocialLink = styled.a`
  height: 2rem;
  width: 2rem;

  @media (min-width: 48rem) {
    height: 2.5rem;
    width: 2.5rem;
  }

  ${scaleUp(1.2)}
  ${scaleDown(1.2)}
`

const SocialIcon = css`
  height: 2rem;
  width: 2rem;
  color: var(--white-but-not);
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.05));

  @media (min-width: 48rem) {
    height: 2.5rem;
    width: 2.5rem;
  }
`

function Social(props: props) {
  const { href, Icon } = props;
  const [SocialSound] = useSound(socialSound);

  return (
    <SocialLink href={href} onClick={() => {
      SocialSound();
    }} target="_blank">
      <Icon className={SocialIcon} />
    </SocialLink>
  );
}

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Divider = styled.div`
  flex-grow: 1;
  border-top: 2px solid var(--white-but-not);
`

const DividerText = styled.span`
  font-size: var(--text-base);
  padding-inline: 0.75rem;
`

function SocialsDivider() {
  return (
    <DividerContainer>
      <Divider />
      <DividerText>Socials</DividerText>
      <Divider />
    </DividerContainer>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  justify-content: center;
  gap: 0.325rem;
`

export default function Socials() {
  return (
    <>
      <SocialsDivider />
      <Container>
        <Social
          href={"https://discord.com/users/546133861751586816"}
          Icon={FaDiscord}
        />
        <Social
          href={"https://www.instagram.com/epiccarlito"}
          Icon={FaInstagram}
        />
        <Social
          href={"https://github.com/EpicCarlito"}
          Icon={AiFillGithub}
        />
        <Social
          href={"https://strava.com/athletes/126999343"}
          Icon={Starva}
        />
      </Container>
    </>

  );
}
