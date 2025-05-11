"use client";

import { motion } from "motion/react"
import Discord from "../../public/social/discord.svg";
import Github from "../../public/social/github.svg";
import Instagram from "../../public/social/instagram.svg";
import Starva from "../../public/social/starva.svg";

import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const SocialSVG = css`
  height: 2rem;
  width: 2rem;
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
`

const margin = css`
  margin-inline: 3px;
`

interface props {
  href: string;
  SVG: any;
}

function Social(props: props) {
  return (
    <motion.a whileHover={{ scale: 1.2, rotate: 2.5 }} href={props.href} target="_blank" className={`${SocialSVG} ${margin}`}>
      <props.SVG className={SocialSVG} />
    </motion.a>
  );
}

export default function Socials() {
  return (
    <Container>
      <Social
        href={"https://discord.com/users/546133861751586816"}
        SVG={Discord}
      />
      <Social
        href={"https://www.instagram.com/epiccarlito"}
        SVG={Instagram}
      />
      <Social
        href={"https://github.com/EpicCarlito"}
        SVG={Github}
      />
      <Social
        href={"https://strava.com/athletes/126999343"}
        SVG={Starva}
      />
    </Container>
  );
}
