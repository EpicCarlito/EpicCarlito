import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import EpicCarlito from "../../../public/epiccarlito.svg";
import Face from "../../../public/face.png";
import Socials from "../../components/socials";

const GoDown = dynamic(() => import("@/components/goDown"), { ssr: false })

export default function ProfileCard() {
  return (
    <>
      <div className="flex flex-col rounded-md border border-dashed border-black bg-[#f4a261] p-4">
        <div className="flex flex-col items-center">
          <div className="mb-1 flex flex-row">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="h-[6rem] w-[6rem] md:h-[10rem] md:w-[10rem] z-2"
            >
              <EpicCarlito className="ml-2 h-auto w-full rounded-full border border-black shadow-md" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="h-[6rem] w-[6rem] md:h-[10rem] md:w-[10rem] z-0 hover:z-1"
            >
              <Image
                src={Face}
                alt="IRL FACE WHAT?!?!?"
                className="mr-2 h-auto w-full rounded-full border border-black shadow-md"
              />
            </motion.div>
          </div>
          <p className="justify-center font-comfortaa text-lg font-medium text-black md:text-3xl">
            James C<span className="text-xs text-black md:text-sm ml-1">he/him</span>
          </p>
          <p className="font-comforta justify-center text-sm text-black">
            (Username: EpicCarlito)
          </p>
        </div>
        <div className="my-1 flex items-center justify-between">
          <div className="flex-grow border-t border-black"></div>
          <span className="px-3 text-sm text-black">Socials</span>
          <div className="flex-grow border-t border-black"></div>
        </div>
        <Socials />
        <GoDown />
      </div>
    </>
  );
}
