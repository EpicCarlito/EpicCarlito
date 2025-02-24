"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Spotify from "../../public/social/spotify.svg";

export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data: any) => {
        setNowPlaying(data.nowPlaying);
        setIsLoading(false);
      });
  }, []);

  const song = nowPlaying?.item;
  const album = song?.album;

  return (
    <div className="flex flex-col text-stone-300 ml-1 md:ml-0">
      <div className="flex flex-row">
        <a
          href="https://open.spotify.com/user/nt6yeooaj0di051fntu1q4bw8"
          target="_blank"
          className="flex flex-row items-center"
        >
          <Spotify className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem]" />
          <p className="flex items-center text-xs font-bold md:text-sm lg:text-base ml-1.5">
            Listening on Spotify...
          </p>
        </a>
      </div>
      <div className="bg-gradient-to-t md:bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-black rounded mt-1.5 p-[0.375rem]">
        {isLoading ? (
          <div className="text-xs md:text-sm lg:text-base">
            Finding songs...
          </div>
        ) : nowPlaying ? (
          <div className="md:p-1">
            {nowPlaying.is_playing != null && song ? (
              <a
                href={song?.external_urls.spotify}
                target="_blank"
                className="flex flex-row items-center space-x-3"
              >
                <Image
                  src={album.images[0].url}
                  width={64}
                  height={64}
                  alt={`${album.name} album art`}
                  className="h-[2rem] w-auto border border-stone-300 rounded sm:h-[2.5rem] md:h-[3.5rem]"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-xs font-semibold sm:text-sm md:text-base lg:text-lg">
                    {song?.name}
                  </p>
                  <p className="text-xs sm:text-sm md:text-md lg:text-base">
                    {`by ${song?.artists[0].name}`}
                  </p>
                </div>
              </a>
            ) : (
              <div className="text-xs sm:text-sm md:text-md">Nothing :(</div>
            )}
          </div>
        ) : (
          <div className="text-xs sm:text-sm md:text-md">Nothing :(</div>
        )}
      </div>
    </div>
  );
}
