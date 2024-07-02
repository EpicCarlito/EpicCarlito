"use client";

import { useState, useEffect } from "react";
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
    <div className="flex flex-col mt-0 ml-2 md:ml-0 md:mt-1">
      <div className="flex flex-row">
        <a
          href="https://open.spotify.com/user/31iyd3ibo5i53uaic62rcehjpsbu"
          target="_blank"
          className="flex flex-row items-center"
        >
          <Image
            src={spotifyLogo}
            alt={`music platform`}
            className="h-auto w-[1.25rem]"
          />
          <p className="ml-1 text-sm font-bold md:text-md md:mt-1">Listening to...</p>
        </a>
      </div>
      <div className="border border-black rounded p-[0.375rem] mt-1">
        {isLoading ? (
          <div>Finding songs...</div>
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
                <div className="flex flex-col ml-2 text-sm">
                  <p className="font-bold md:text-lg">{song?.name}</p>
                  <p className="md:text-md">{`by ${song?.artists[0].name}`}</p>
                </div>
              </a>
            ) : (
              <div>Nothing. :(</div>
            )}
          </div>
        ) : (
          <div>Nothing. :(</div>
        )}
      </div>
    </div>
  );
}
