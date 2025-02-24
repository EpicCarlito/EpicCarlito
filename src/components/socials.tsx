"use client";

import { motion } from "framer-motion";
import Discord from "../../public/social/discord.svg";
import Github from "../../public/social/github.svg";
import Instagram from "../../public/social/instagram.svg";
import Starva from "../../public/social/starva.svg";

interface props {
  href: string;
  SVG: any;
}

function Social(props: props) {
  return (
    <motion.div whileHover={{ scale: 1.2, rotate: 2.5 }} className="mx-[3px]">
      <a href={props.href} target="_blank">
        <props.SVG className="h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]" />
      </a>
    </motion.div>
  );
}

export default function Socials() {
  return (
    <div className="flex flex-row justify-center">
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
    </div>
  );
}
