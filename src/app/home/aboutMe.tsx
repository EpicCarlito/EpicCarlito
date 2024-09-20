"use client";

import AnimatedWaves from "@/components/animatedWaves";
import NowPlaying from "../../components/nowPlaying";
import ProfileCard from "./profileCard";

export default function AboutMe() {
  return (
    <>
      <div className="flex h-lvh flex-col justify-between">
        <div className="p-4">
          <div className="flex flex-col border border-white bg-zinc-700 p-5 md:p-10">
            <div className="flex flex-col md:flex-row md:justify-center">
              <ProfileCard />
              <div className="mt-3 flex flex-col px-2 text-white md:ml-4">
                <h1 className="justify-center text-2xl md:text-3xl lg:text-4xl">
                  Hola! I am James! 👋
                </h1>
                <div className="my-1 h-px border-0 bg-gray-900 md:h-[1.5px]"></div>
                <div className="mt-1 flex flex-row md:flex-col">
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm md:text-base lg:text-2xl">
                      Bronx Science Sophomore
                    </p>
                    <ul className="ml-5 list-disc text-xs md:text-base lg:text-lg">
                      <li>Typescript & Java Coder</li>
                      <li>Long Distance Runner</li>
                      <li>Kawaii Future Bass Music Enjoyer</li>
                    </ul>
                  </div>
                  <NowPlaying />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatedWaves />
      </div>
    </>
  );
}
