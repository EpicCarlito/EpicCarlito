"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import discord from "../../public/social/discord.svg";
import github from "../../public/social/github.svg";
import instagram from "../../public/social/instagram.svg";
import starva from "../../public/social/starva.svg";

interface props {
  href: string;
  src: any;
  alt: string;
}

function Social(props: props) {
  return (
    <motion.div whileHover={{ scale: 1.2, rotate: 2.5 }} className="mx-[3px]">
      <a href={props.href} target="_blank">
        <Image
          src={props.src}
          alt={props.alt}
          className="h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]"
        ></Image>
      </a>
    </motion.div>
  );
}

export default function Socials() {
  return (
    <div className="flex flex-row justify-center">
      <Social
        href={"https://discord.com/users/546133861751586816"}
        src={discord}
        alt={"discordIcon"}
      />
      <Social
        href={"https://www.instagram.com/epiccarlito"}
        src={instagram}
        alt={"discordIcon"}
      />
      <Social
        href={"https://github.com/EpicCarlito"}
        src={github}
        alt={"discordIcon"}
      />
      <Social
        href={"https://strava.com/athletes/126999343"}
        src={starva}
        alt={"discordIcon"}
      />
    </div>
  );
}
