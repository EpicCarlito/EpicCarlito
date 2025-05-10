"use client";

import { motion } from "motion/react"
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import Locked from "../../../public/emojis/locked.svg";
import NextJS from "../../../public/frameworks/nextjs.svg";
import Java from "../../../public/languages/java.svg";
import JavaScript from "../../../public/languages/javascript.svg";
import TypeScript from "../../../public/languages/typescript.svg";
import { IoLogoGithub } from "react-icons/io";

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const InfoBox = styled.div`
  padding: 1rem;
`

const InnerBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #d6d3d1;
  background-color: #1f2937;
  border-color: white;
  border-width: 1px;
  padding-inline: 1rem;
  padding-block: 1rem;

  @media (min-width: 1024px) {
    padding-inline: 2.5rem;
    padding-block: 2.5rem;
  }
`

const Heading = styled.h1`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.875rem;
  font-weight: 700;
`

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 0.25rem;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  border-width: 2px;
  border-color: black;
  margin-top: 1rem;
  padding-inline: 0.75rem;
  padding-block: 0.5rem;

  @media (min-width: 768px) {
    margin-inline: 0.5rem;
    margin-block: 0.5rem;
    border-width: 1px;
    border-color: white;
    padding-inline: 1rem;
    padding-block: 0.75rem;
  }
`

const CenteredRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ProjectTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-block: auto;
  margin-top: 0.25rem;
`

const Divider = styled.div`
  height: 1px;
  border-width: 0px;
  margin-block: 0.25rem;
  background-color: white;
`

const StatusText = styled.h2`
  margin-left: 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
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
          <InnerBox>
            <Heading>Projects</Heading>
            <CenteredContainer>
              <GridContainer>
                {projects.map((project) => {
                  const Icon = type[project.language];

                  return (
                    <ItemsContainer
                      key={project.title}
                    >
                      <div className={`margin-bottom: 1px; ${CenteredRow}`}>
                        <Icon className={`height: 2rem; width: 2rem;`} />
                        <ProjectTitle>{project.title}</ProjectTitle>
                      </div>
                      <Divider />
                      <div className={`margin-bottom: 0.125rem;`}>
                        <p className={`margin-top: 0.25rem;`}>{project.desc}</p>
                        <p>
                          From: <b>{project.date}</b>
                        </p>
                      </div>

                      {project.href ? (
                        <div className={CenteredRow}>
                          <motion.a
                            href={project.href}
                            className={`display: flex; align-items: center; cursor: pointer;`}
                            whileHover={{ y: -2 }}
                          >
                            <IoLogoGithub className={`height: 2rem; width: 2rem;`} />
                            <StatusText>Source Code</StatusText>
                          </motion.a>
                        </div>
                      ) : (
                        <div className={CenteredRow}>
                          <Locked className={`height: 2rem; width: 2rem;`} />
                          <StatusText>Private</StatusText>
                        </div>
                      )}
                    </ItemsContainer>
                  )
                })}
              </GridContainer>
            </CenteredContainer>
          </InnerBox>
        </InfoBox>
      </Container>
    </>
  );
}
