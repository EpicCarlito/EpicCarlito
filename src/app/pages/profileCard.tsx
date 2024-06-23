"use client";

import Image from "next/image";
import EpicCarlito from "../../../public/epiccarlito.svg";
import Socials from "../../components/socials";
import Face from "../../../public/face.jpg";
import AnimatedWaves from "@/components/animatedWaves";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <>
      <div className="h-dvh flex flex-col justify-between">
        <div className="p-4">
          <div className="flex flex-col border border-black bg-zinc-700 p-5 md:p-10">
            {/* <NavBar /> */}
            <div className="flex flex-col md:justify-center md:flex-row">
              <div className="flex flex-col border border-dashed border-black rounded-md bg-[#f4a261] p-4">
                <div className="flex flex-col items-center">
                  <div className="flex flex-row mb-1">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-[6rem] md:h-[10rem] w-[6rem] md:w-[10rem]"
                    >
                      <Image
                        src={EpicCarlito}
                        alt=""
                        className="h-auto w-full border border-black rounded-full shadow-md ml-2"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-[6rem] md:h-[10rem] w-[6rem] md:w-[10rem]"
                    >
                      <Image
                        src={Face}
                        alt=""
                        className="h-auto w-full border border-black rounded-full shadow-md mr-2"
                      />
                    </motion.div>
                  </div>
                  <p className="font-medium text-lg md:text-3xl font-comfortaa justify-center">
                    James C<sub className="text-xs md:text-sm">he/him</sub>
                  </p>
                  <p className="text-sm font-comfortaa justify-center">
                    (Username: EpicCarlito)
                  </p>
                </div>
                <div className="flex items-center justify-between my-1">
                  <div className="flex-grow border-t border-black"></div>
                  <span className="px-3 text-sm text-black">Socials</span>
                  <div className="flex-grow border-t border-black"></div>
                </div>
                <Socials />
              </div>

              <div className="flex flex-col gap-2 ml-4 p-4 text-white">
                <h1 className="justify-center text-2xl md:text-4xl">
                  Hola! I am James! 👋
                </h1>
                <div className="w-auto border-t border-black"></div>
                <p className="text-md md:text-2xl">
                  Rising Bronx Science Sophomore
                </p>
                <ul className="text-sm md:text-lg list-disc ml-5">
                  <li>Typescript & Java Coder</li>
                  <li>Long Distance Runner</li>
                  <li>Casually enjoys graphic design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <AnimatedWaves />
      </div>
    </>
  );
}
