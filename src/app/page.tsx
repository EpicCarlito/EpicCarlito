import Image from "next/image";
import EpicCarlito from "../../public/epiccarlito.svg";
import Socials from "../components/socials";
import AnimatedWaves from "@/components/animatedWaves";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <AnimatedWaves />
        <div className="absolute z-[-1] w-screen h-full p-2 md:p-4">
          <div className="h-full bg-zinc-700 max-w-full p-10">
            <div className="absolute flex flex-col">
              <div className="flex flex-col mb-2 items-center">
                <Image
                  src={EpicCarlito}
                  alt=""
                  className="h-auto w-[6rem] md:w-[10rem] rounded-full mb-1"
                />
                <p className="text-3xl font-comfortaa justify-center">
                  EpicCarlito<sub className="text-sm">he/him</sub>
                </p>
              </div>
              <Socials />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
