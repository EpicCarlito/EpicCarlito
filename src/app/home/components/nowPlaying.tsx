"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Spotify from "../../../../public/social/spotify.svg";
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #d6d3d1;
  margin-left: 0.25rem;

  @media (min-width: 48rem) {
    margin-left: 0px;
  }
`

const HeadingContainer = styled.a`
  display: flex;
  flex-direction: "column";
  align-items: center;
  text-decoration: none;
  color: inherit;
`

const SpotifyLogo = css`
  height: 1.5rem;
  width: 1.5rem;
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.50));

  @media (min-width: 48rem) {
    height: 2rem;
    width: 2rem;
  }
`

const Heading = styled.p`
  font-size: var(--text-xs);
  margin-left: 0.25rem;

  @media (min-width: 40rem) {
    font-size: var(--text-base)
  }
`

const Gradient = styled.div`
  background-image: linear-gradient(to top, rgb(15 23 42), #1e293b);
  border: 2px solid black;
  border-radius: 0.25rem;
  margin-top: 0.375rem;
  padding: 0.325rem;

  @media (min-width: 48rem) {
    background-image: linear-gradient(to right, rgb(15 23 42), #1e293b);
    padding: 0.625rem;
  }
`

const InnerHeading = styled.p`
  font-size: var(--text-xs);

  @media (min-width: 40rem) {
    font-size: var(--text-base)
  }
`

const SongContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: inherit;
`

const SongImage = css`
  border: 1px solid #d6d3d1;
  border-radius: 0.25rem;
  height: 2rem;
  width: 2rem;
  filter: drop-shadow(3px 3px 5px rgb(214 211 209 / 0.25));

  @media (min-width: 48rem) {
    height: 3rem;
    width: 3rem;
  }

  @media (min-width: 64rem) {
    height: 4rem;
    width: 4rem;
  }
`

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`

const SongName = styled.p`
  font-size: var(--text-xs);
  font-weight: bold;
  margin-block: 0.125rem;
  
  @media (min-width: 48rem) {
    font-size: var(--text-lg)
  }
`

const Artist = styled.p`
  font-size: var(--text-xs);
  margin-block: 0.125rem;

  @media (min-width: 48rem) {
    font-size: var(--text-base)
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
      <HeadingContainer
        href="https://open.spotify.com/user/nt6yeooaj0di051fntu1q4bw8"
        target="_blank"
      >
        <Spotify className={SpotifyLogo} />
        <Heading>Listening on Spotify...</Heading>
      </HeadingContainer>
      <Gradient>
        {isLoading ? (
          <InnerHeading>Finding Songs...</InnerHeading>
        ) : nowPlaying ? (
          <>
            {nowPlaying.is_playing != null && song ? (
              <SongContainer
                href={song?.external_urls.spotify}
                target="_blank"
              >
                <Image
                  src={album.images[0].url}
                  width={64}
                  height={64}
                  alt={`${album.name} album art`}
                  className={SongImage}
                />
                <SongInfo>
                  <SongName>{song?.name}</SongName>
                  <Artist>{`by ${song?.artists[0].name}`}</Artist>
                </SongInfo>
              </SongContainer>
            ) : (
              <InnerHeading>Nothing :(</InnerHeading>
            )}
          </>
        ) : (
          <InnerHeading>Nothing :(</InnerHeading>
        )}
      </Gradient>
    </Container>
  );
}
