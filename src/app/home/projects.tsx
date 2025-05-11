"use client";

import { motion } from "motion/react"
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import GitHub from "../../../public/social/github.svg"
import Locked from "../../../public/emojis/locked.svg";
import NextJS from "../../../public/frameworks/nextjs.svg";
import Java from "../../../public/languages/java.svg";
import JavaScript from "../../../public/languages/javascript.svg";
import TypeScript from "../../../public/languages/typescript.svg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1f2937;
  border: 1px solid var(--white-but-not);
  padding-inline: 2rem;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  
  @media (min-width: 48rem) {
    padding-bottom: 2rem;
    padding-top: 1rem;
  }
`

const Heading = styled.h1`
  text-align: center;
  font-size: var(--text-3xl);
`

const Image = css`
  height: 2rem;
  width: 2rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-top: 0.5rem;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid var(--white-but-not);
  border-radius: 0.375rem;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
`

const CenteredRow = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 0.25rem;
`

const ProjectTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-block: 0;
`

const Divider = styled.div`
  height: 1px;
  border-width: 0px;
  margin-block: 0.375rem;
  background-color: white;
`

const StatusText = styled.h2`
  margin-block: 0;
  font-size: 1.125rem;
  font-weight: 600;
`

const desc = styled.p`
  margin-block: 0;
`

export default function Projects() {
  const projects = [
    {
      title: "FloorIsLava",
      desc: "A Minecraft plugin that is a simple survival game where lava gradually rises over time.",
      href: "https://github.com/EpicCarlito/FloorIsLava",
      language: "java",
      date: "July - August 2024",
    },
    {
      title: "maureen",
      desc: "A Next.js website to replace my best friend's old carrd. Made to practice making websites in Next.js.",
      href: "https://github.com/EpicCarlito/maureen",
      language: "nextjs",
      date: "May 2024",
    },
    {
      title: "discordjs-template",
      desc: "A bare-bones Discord.js v14 template that lets you create a basic Discord bot with a command, event, button, and modal handler.",
      href: "https://github.com/EpicCarlito/discordjs-template",
      language: "typescript",
      date: "April 2024",
    },
    {
      title: "EmailChecker",
      desc: "A simple way to check if an email exists! Created to be used for a discord bot to check emails.",
      href: "https://github.com/EpicCarlito/EmailChecker",
      language: "typescript",
      date: "July - August 2023",
    },
  ];

  const type: { [key: string]: any } = {
    java: Java,
    typescript: TypeScript,
    javascript: JavaScript,
    nextjs: NextJS,
  };

  return (
    <>
      <Container>
        <InfoBox>
          <Heading>Projects</Heading>
          <GridContainer>
            {projects.map((project) => {
              const Icon = type[project.language];

              return (
                <ItemContainer
                  key={project.title}
                >
                  <div className={CenteredRow}>
                    <Icon className={Image} />
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </div>
                  <Divider />
                  <desc>{project.desc}</desc>
                  <p>From: <b>{project.date}</b></p>
                  
                  {project.href ? (
                    <motion.a
                      href={project.href}
                      className={CenteredRow}
                      style={{ cursor: "pointer" }}
                      whileHover={{ y: -2 }}>
                      <GitHub className={Image} />
                      <StatusText>Source Code</StatusText>
                    </motion.a>
                  ) : (
                    <div className={CenteredRow}>
                      <Locked className={Image} />
                      <StatusText>Private</StatusText>
                    </div>
                  )}
                </ItemContainer>
              )
            })}
          </GridContainer>
        </InfoBox>
      </Container>
    </>
  );
}
