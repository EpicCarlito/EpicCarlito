import Image from "next/image";
import EpicCarlito from "../../../public/epiccarlito.svg";
import Socials from "../../components/socials";
import Face from "../../../public/face.jpg";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <>
      <div className="flex flex-col border border-dashed border-black rounded-md bg-[#f4a261] p-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-row mb-1">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="h-[6rem] md:h-[10rem] w-[6rem] md:w-[10rem]"
            >
              <Image
                src={EpicCarlito}
                alt=""
                className="w-full h-auto ml-2 border border-black rounded-full shadow-md"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="h-[6rem] md:h-[10rem] w-[6rem] md:w-[10rem]"
            >
              <Image
                src={Face}
                alt=""
                className="w-full h-auto mr-2 border border-black rounded-full shadow-md"
              />
            </motion.div>
          </div>
          <p className="justify-center text-lg font-medium text-black md:text-3xl font-comfortaa">
            James C<sub className="text-xs text-black md:text-sm">he/him</sub>
          </p>
          <p className="justify-center text-sm text-black font-comforta">
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
    </>
  );
}
