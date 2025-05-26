"use client";

import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

const Image = css`
  height: 2rem;
  width: 2rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  border: 2px solid var(--white-but-not);
  border-radius: 0.375rem;
  padding: 0.75rem;

  @media (min-width: 48rem) {
    width: 25rem;
  }
`

const CenteredRow = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 0.25rem;
  align-self: flex-start;
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

const Desc = styled.p`
  margin-block: 0.125rem;
`

const moveUp = css`
  cursor: "pointer";
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.25rem);
  }
`

export default function ProjectsList() {
  const projects = [
    {
      title: "IntoTheDeep",
      desc: "Contributed to Bronx Science's FTC team code. Helped provide the autonomous and player-controllable modes.",
      href: "https://github.com/BxSciFTC/IntoTheDeep-24",
      language: "java",
      date: "September 2024 - March 2025",
    },
    {
      title: "FloorIsLava",
      desc: "A Minecraft plugin that is a simple survival game where lava gradually rises over time.",
      href: "https://github.com/EpicCarlito/FloorIsLava",
      language: "java",
      date: "July - August 2024",
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
    java: FaJava,
    typescript: BiLogoTypescript,
    nextjs: RiNextjsFill,
  };

  return (
    <>
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
              <Desc>{project.desc}</Desc>
              <p>From: <b>{project.date}</b></p>

              {project.href ? (
                <a
                  href={project.href}
                  className={`${CenteredRow} ${moveUp}`}>
                  <AiFillGithub className={Image} />
                  <StatusText>Source Code</StatusText>
                </a>
              ) : (
                <div className={CenteredRow}>
                  <FaLock className={Image} />
                  <StatusText>Private</StatusText>
                </div>
              )}
            </ItemContainer>
          )
        })}
      </GridContainer>
    </>
  );
}
