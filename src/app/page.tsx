import Image from "next/image";
import Link from "next/link";
import EpicCarlito from "../../public/epiccarlito.svg";
import discord from "../../public/social/discord.svg";
import instagram from "../../public/social/instagram.svg";
import github from "../../public/social/github.svg";

export default function Home() {
  return (
    <>
    <div className="absolute z-[-1] w-screen h-full md:p-4 bg-zinc-900">
        <div className="w-screen h-full bg-zinc-700 max-w-full">
          <div>
            <div className="flex flex-col">
              <Image
                src={EpicCarlito}
                alt=""
                height={250}
                width={250}
                className="rounded-full"
              ></Image>
              <p className="text-3xl font-comfortaa">
                EpicCarlito<sub className="text-sm">he/him</sub>
              </p>
              <div className="flex flex-col">
                <Link href="https://discord.com/users/546133861751586816">
                  <Image
                    src={discord}
                    alt=""
                    height={35}
                    width={35}
                    className="hover:-translate-y-1 duration-200"
                  ></Image>
                </Link>
                <Link href="https://www.instagram.com/epiccarlito">
                  <Image
                    src={instagram}
                    alt=""
                    height={35}
                    width={35}
                    className="hover:-translate-y-1 duration-200"
                  ></Image>
                </Link>
                <Link href="https://github.com/EpicCarlito">
                  <Image
                    src={github}
                    alt=""
                    height={35}
                    width={35}
                    className="hover:-translate-y-1 duration-200"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
