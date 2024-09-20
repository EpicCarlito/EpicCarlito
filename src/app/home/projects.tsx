"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Locked from "../../../public/emojis/locked.svg";
import NextJS from "../../../public/frameworks/nextjs.svg";
import Java from "../../../public/languages/java.svg";
import JavaScript from "../../../public/languages/javascript.svg";
import TypeScript from "../../../public/languages/typescript.svg";
import GitHub from "../../../public/social/github.svg";

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

  const type: { [key: string]: string } = {
    java: Java,
    typescript: TypeScript,
    javascript: JavaScript,
    nextjs: NextJS,
  };

  return (
    <>
      <div className="h-full w-full">
        <div className="p-4">
          <div className="flex h-full flex-col border border-white bg-zinc-700 px-4 pb-4 lg:px-10 lg:pb-10">
            <h1 className="pt-4 text-center text-3xl font-bold lg:pt-10">
              Projects
            </h1>
            <div className="flex items-center justify-center md:mt-1">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="mt-4 flex flex-col rounded-md border-2 border-black p-4 md:mx-2 md:mt-2 md:border md:border-white md:p-3"
                  >
                    <div className="mb-2 flex flex-row items-center">
                      <Image
                        src={type[project.language]}
                        width={36}
                        height={36}
                        alt={`${project.language}'s logo`}
                      />
                      <h2 className="my-auto ml-1 mt-1 text-center text-2xl font-semibold">
                        {project.title}
                      </h2>
                    </div>
                    <div className="my-1 h-px border-0 bg-white"></div>
                    <div className="mb-[0.125rem]">
                      <p className="mt-1">{project.desc}</p>
                      <p>
                        From: <b>{project.date}</b>
                      </p>
                    </div>

                    {project.href ? (
                      <div className="flex flex-row items-center">
                        <motion.a
                          whileHover={{ y: -2 }}
                          className="ml-[-0.25rem] flex cursor-pointer"
                          href={project.href}
                        >
                          <Image
                            src={GitHub}
                            width={32}
                            height={32}
                            alt={`${project.language}'s logo`}
                          />
                          <h2 className="ml-1 mt-[0.125rem] text-lg font-semibold">
                            Source Code
                          </h2>
                        </motion.a>
                      </div>
                    ) : (
                      <div className="flex flex-row items-center">
                        <Image
                          src={Locked}
                          width={32}
                          height={32}
                          alt={`no can see`}
                        />
                        <h2 className="ml-1 text-lg font-semibold">Private</h2>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
