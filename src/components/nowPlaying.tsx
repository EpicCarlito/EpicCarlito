"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Spotify from "../../public/social/spotify.svg";
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #d6d3d1;
  margin-left: 0.25rem;

  @media (min-width: 768px) {
    margin-left: 0px;
  }
`

const Gradient = styled.div`
  background-image: linear-gradient(to top, rgb(15 23 42), #1e293b);
  border-width: 2px;
  border-color: black;
  border-radius: 0.25rem;
  margin-top: 0.375rem;
  padding: 0.375rem;

  @media (min-width: 768px) {
    background-image: linear-gradient(to right, rgb(15 23 42), #1e293b);
  }
`

const SpotifyLogo = css`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.375rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`

const Heading = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.375rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`

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
    <Container>
      <div className={`display: flex; flex-direction: row;`}>
        <a
          href="https://open.spotify.com/user/nt6yeooaj0di051fntu1q4bw8"
          target="_blank"
          className={`display: flex; flex-direction: row; align-items: center;`}
        >
          <Spotify className={SpotifyLogo}/>
          <Heading>Listening on Spotify...</Heading>
        </a>
      </div>
      <Gradient>
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
      </Gradient>
    </Container>
  );
}
