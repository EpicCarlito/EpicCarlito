import Image from "next/image";
import Link from "next/link";
import discord from "../../public/social/discord.svg";
import instagram from "../../public/social/instagram.svg";
import github from "../../public/social/github.svg";
import starva from "../../public/social/starva.svg";

export default function Socials() {
    return (
        <div className="flex flex-row justify-center">
        <Link
          href="https://discord.com/users/546133861751586816"
          className="mr-[0.25rem]"
        >
          <Image
            src={discord}
            alt=""
            height={35}
            width={35}
            className="hover:-translate-y-1 duration-200"
          ></Image>
        </Link>
        <Link
          href="https://www.instagram.com/epiccarlito"
          className="mr-[0.25rem]"
        >
          <Image
            src={instagram}
            alt=""
            height={35}
            width={35}
            className="hover:-translate-y-1 duration-200"
          ></Image>
        </Link>
        <Link
          href="https://github.com/EpicCarlito"
          className="mr-[0.25rem]"
        >
          <Image
            src={github}
            alt=""
            height={35}
            width={35}
            className="hover:-translate-y-1 duration-200"
          ></Image>
        </Link>
        <Link
          href="https://strava.com/athletes/126999343"
          className="mr-[0.25rem]"
        >
          <Image
            src={starva}
            alt="Strava"
            height={35}
            width={35}
            className="hover:-translate-y-1 duration-200"
          ></Image>
        </Link>
      </div>
    )
}