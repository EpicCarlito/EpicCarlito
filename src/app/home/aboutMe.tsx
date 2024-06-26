"use client";

import AnimatedWaves from "@/components/animatedWaves";
import ProfileCard from "./profileCard";
import NowPlaying from "../../components/nowPlaying";

export default function AboutMe() {
  return (
    <>
      <div className="h-dvh flex flex-col justify-between">
        <div className="p-4">
          <div className="flex flex-col border border-white bg-zinc-700 p-3 sm:p-5 md:p-10">
            <div className="flex flex-col md:justify-center md:flex-row">
              <ProfileCard />
              <div className="flex flex-col gap-2 md:ml-4 p-4 text-white">
                <h1 className="justify-center text-2xl md:text-3xl lg:text-4xl">
                  Hola! I am James! 👋
                </h1>
                <div className="w-auto border-t border-black"></div>
                <div className="flex flex-row md:flex-col">
                  <div className="flex flex-col">
                    <p className="text-md md:text-2xl">
                      Rising Bronx Science Sophomore
                    </p>
                    <ul className="text-sm md:text-lg list-disc ml-5">
                      <li>Typescript & Java Coder</li>
                      <li>Long Distance Runner</li>
                      <li>Listener of Funk</li>
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
