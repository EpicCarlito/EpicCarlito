"use client"

import Image from "next/image";
import EpicCarlito from "../../public/epiccarlito.svg";
import Socials from "./socials";
import Face from "../../public/face.jpg";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <>
      <div className="absolute flex flex-row">
        <div className="flex flex-col border border-dashed border-black rounded-md bg-[#f4a261] p-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-row mb-1">
              <motion.div
                whileHover={{ scale: 1.1, z: 1 }}
                className="h-[6rem] md:h-[10rem] w-[6rem] md:w-[10rem]"
              >
                <Image
                  src={EpicCarlito}
                  alt=""
                  className="h-auto w-full border border-black rounded-full shadow-md ml-2"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, z: 1 }}
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
            <span className="px-3 text-black">Socials</span>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <Socials />
        </div>
        <div className="flex flex-col ml-4 p-4">
          <h1 className="text-3xl">Hola! I am James! 👋</h1>
          <p className="text-xl">
            Freshman who likes to code using Typescript and Java.
          </p>
        </div>
      </div>
    </>
  );
}
