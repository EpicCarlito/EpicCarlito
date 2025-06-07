"use client";

import { FaDiscord, FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Starva from "../../../../public/social/starva.svg"

import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import socialSound from "../../../../public/sounds/socialSound.mp3"
import useSound from "use-sound";

interface props {
  href: string;
  SVG: any;
}

const LinkSVG = styled.a`
  height: 2rem;
  width: 2rem;

  @media (min-width: 48rem) {
    height: 2.5rem;
    width: 2.5rem;
  }

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.2);
  }
`

const SocialSVG = css`
  height: 2rem;
  width: 2rem;
  color: var(--white-but-not);
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.05));

  @media (min-width: 48rem) {
    height: 2.5rem;
    width: 2.5rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.325rem;
`

function Social(props: props) {
  const [SocialSound] = useSound(socialSound);

  return (
    <LinkSVG href={props.href} onClick={() => {
      SocialSound();
    }} target="_blank">
      <props.SVG className={SocialSVG} />
    </LinkSVG>
  );
}

export default function Socials() {
  return (
    <Container>
      <Social
        href={"https://discord.com/users/546133861751586816"}
        SVG={FaDiscord}
      />
      <Social
        href={"https://www.instagram.com/epiccarlito"}
        SVG={FaInstagram}
      />
      <Social
        href={"https://github.com/EpicCarlito"}
        SVG={AiFillGithub}
      />
      <Social
        href={"https://strava.com/athletes/126999343"}
        SVG={Starva}
      />
    </Container>
  );
}
