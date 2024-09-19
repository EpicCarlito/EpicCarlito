"use client";

import AnimatedWaves from "@/components/animatedWaves";
import ProfileCard from "./profileCard";
import NowPlaying from "../../components/nowPlaying";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-between h-svh">
        <div className="p-4">
          <div className="flex flex-col p-3 border border-white bg-zinc-700 sm:p-5 md:p-10">
            <div className="flex flex-col md:justify-center md:flex-row">
              <ProfileCard />
              <div className="flex flex-col mt-3 sm:mt-5 md:mt-10 px-2 text-white md:ml-4">
                <h1 className="justify-center text-2xl md:text-3xl lg:text-4xl">
                  Hola! I am James! 👋
                </h1>
                <div className="h-px md:h-[1.5px] my-1 bg-gray-900 border-0"></div>
                <div className="flex flex-row md:flex-col">
                  <div className="flex flex-col mr-2">
                    <p className="text-xs md:text-2xl">
                      Bronx Science Sophomore
                    </p>
                    <ul className="ml-5 text-xs list-disc md:text-lg">
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
