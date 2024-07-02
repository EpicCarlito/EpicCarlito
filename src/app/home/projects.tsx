"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Java from "../../../public/languages/java.svg";
import TypeScript from "../../../public/languages/typescript.svg";
import JavaScript from "../../../public/languages/javascript.svg";
import GitHub from "../../../public/social/github.svg";
import Locked from "../../../public/emojis/locked.svg";
import NextJS from "../../../public/frameworks/nextjs.svg";

export default function Projects() {
  const projects = [
    {
      title: "maureen",
      desc: "A Next.js website to replace my best friend's old carrd. Made to practice making websites in Next.js.",
      href: "https://github.com/EpicCarlito/maureen",
      language: "nextjs",
      date: "May 2024",
    },
    {
      title: "TicTacToe",
      desc: "A basic tictactoe game using JavaFX. Created to improve my knowledge of Java and learn the JavaFX library.",
      href: "https://github.com/EpicCarlito/TicTacToe",
      language: "java",
      date: "April 2024",
    },
    {
      title: "discordjs-template",
      desc: "A bare bones Discord.js v14 template with a basic command handler and event handler.",
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
      <div className="w-full h-full">
        <div className="p-4">
          <div className="flex flex-col h-full p-3 border border-white bg-zinc-700 sm:p-5 md:p-10">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="flex items-center justify-center md:mt-1">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-3 my-2 border-2 border-black rounded-md md:border md:border-white md:mx-2"
                  >
                    <div className="flex flex-row items-center mb-2">
                      <Image
                        src={type[project.language]}
                        width={36}
                        height={36}
                        alt={`${project.language}'s logo`}
                      />
                      <h2 className="mt-1 ml-1 text-2xl font-semibold">
                        {project.title}
                      </h2>
                    </div>
                    <div className="flex-grow border-t border-black"></div>
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
                          className="cursor-pointer flex ml-[-0.25rem]"
                          href={project.href}
                        >
                          <Image
                            src={GitHub}
                            width={32}
                            height={32}
                            alt={`${project.language}'s logo`}
                          />
                          <h2 className="font-semibold text-lg mt-[0.125rem] ml-1">
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
