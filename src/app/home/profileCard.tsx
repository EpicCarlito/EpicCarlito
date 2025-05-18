"use client"

import { motion } from "motion/react"
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import Image from "next/image";
import EpicCarlito from "../../../public/epiccarlito.svg";
import Face from "../../../public/face.png";
import Socials from "../../components/socials";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  border-style: dashed;
  border-color: black;
  border-width: 1px;
  background-color: #f4a261;
  padding: 1rem;
`

const TopPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfilePictures = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.25rem;
`

const ProfilePicture = css`
  height: 6rem;
  width: 6rem;
  border: 1px solid black;
  border-radius: 9999px;
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.50));
  z-index: 2;

  @media (min-width: 48rem) {
    height: 10rem;
    width: 10rem;
  }
`

const Name = styled.h1`
  justify-content: center;
  font-family: Comfortaa;
  font-size: 1.125rem;
  font-weight: 500;
  color: black;

  @media (min-width: 48rem) {
    font-size: 1.875rem;
  }
`

const Pronouns = styled.span`
  color: black;
  font-size: 0.75rem;
  margin-left: 0.25rem;

  @media (min-width: 48rem) {
    font-size: 0.875rem;
  }
`

const SocialsDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 0.25rem;
`

const Divider = styled.div`
  flex-grow: 1;
  border-top: 1px solid black;
`

const SocialsText = styled.span`
  color: black;
  font-size: 0.875rem;
  padding-inline: 0.75rem;
`

const OnlineProfile = motion.create(EpicCarlito);
const RealProfile = motion.create(Image);

export default function ProfileCard() {
  return (
    <>
      <Container>
        <TopPart>
          <ProfilePictures>
            <OnlineProfile
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className={ProfilePicture} />
            <RealProfile
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              src={Face}
              alt="IRL FACE WHAT?!?!?"
              className={ProfilePicture}
              style={{ marginLeft: "-0.5rem" }} />
          </ProfilePictures>
          <Name>
            James<Pronouns>he/him</Pronouns>
          </Name>
        </TopPart>
        <SocialsDivider>
          <Divider />
          <SocialsText>Socials</SocialsText>
          <Divider />
        </SocialsDivider>
        <Socials />
      </Container>
    </>
  );
}
