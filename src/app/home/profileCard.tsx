import { motion } from "framer-motion";
import Image from "next/image";
import EpicCarlito from "../../../public/epiccarlito.svg";
import Face from "../../../public/face.jpg";
import Socials from "../../components/socials";

export default function ProfileCard() {
  return (
    <>
      <div className="flex flex-col rounded-md border border-dashed border-black bg-[#f4a261] p-4">
        <div className="flex flex-col items-center">
          <div className="mb-1 flex flex-row">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="h-[6rem] w-[6rem] md:h-[10rem] md:w-[10rem]"
            >
              <Image
                src={EpicCarlito}
                alt=""
                className="ml-2 h-auto w-full rounded-full border border-black shadow-md"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="h-[6rem] w-[6rem] md:h-[10rem] md:w-[10rem]"
            >
              <Image
                src={Face}
                alt=""
                className="mr-2 h-auto w-full rounded-full border border-black shadow-md"
              />
            </motion.div>
          </div>
          <p className="justify-center font-comfortaa text-lg font-medium text-black md:text-3xl">
            James C<sub className="text-xs text-black md:text-sm">he/him</sub>
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
      </div>
    </>
  );
}
