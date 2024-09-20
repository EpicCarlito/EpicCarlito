"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import spotifyLogo from "../../public/social/spotify.svg";

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
    <div className="flex flex-col ml-auto md:ml-0">
      <div className="flex flex-row">
        <a
          href="https://open.spotify.com/user/nt6yeooaj0di051fntu1q4bw8"
          target="_blank"
          className="flex flex-row items-center"
        >
          <Image
            src={spotifyLogo}
            alt={`music platform`}
            className="h-auto w-[1.25rem]"
          />
          <p className="my-auto ml-1 font-bold text-xs md:text-sm lg:text-base">
            Listening to...
          </p>
        </a>
      </div>
      <div className="border border-black rounded p-[0.375rem] mt-1">
        {isLoading ? (
          <div className="text-xs md:text-sm lg:text-base">
            Finding songs...
          </div>
        ) : nowPlaying ? (
          <div>
            {nowPlaying.is_playing != null && song ? (
              <a
                href={song?.external_urls.spotify}
                target="_blank"
                className="flex flex-row"
              >
                <Image
                  src={album.images[0].url}
                  width={50}
                  height={50}
                  alt={`${album.name} album art`}
                  className="h-[1.75rem] md:h-[3rem] w-auto rounded"
                />
                <div className="flex flex-col ml-2">
                  <p className="font-bold text-xs md:text-base lg:text-lg">
                    {song?.name}
                  </p>
                  <p className="text-xs md:text-md lg:text-base">{`by ${song?.artists[0].name}`}</p>
                </div>
              </a>
            ) : (
              <div className="text-xs md:text-sm lg:text-base">Nothing. :(</div>
            )}
          </div>
        ) : (
          <div className="text-xs md:text-sm lg:text-base">Nothing. :(</div>
        )}
      </div>
    </div>
  );
}
