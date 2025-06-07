"use client";

import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

interface props {
  nowPlaying: any;
  isLoading: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #d6d3d1;
  gap: 0.375rem;
`

const HeadingContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`

const SpotifyLogo = css`
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.50));
`

const Heading = styled.p`
  font-size: var(--text-lg);
  margin-left: 0.25rem;
`

const Gradient = styled.div`
  background-image: linear-gradient(to right, rgb(15 23 42), #1e293b);
  border: 2px solid var(--white-but-not);
  border-radius: 0.25rem;
  padding: 1rem;
`

const InnerHeading = styled.p`
  font-size: var(--text-base);
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
  height: 4rem;
  width: 4rem;
  filter: drop-shadow(3px 3px 5px rgb(214 211 209 / 0.25));
`

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`

const SongName = styled.p`
  font-size: var(--text-2xl);
  font-weight: bold;
  margin-block: 0.125rem;
`

const Artist = styled.p`
  font-size: var(--text-base);
  margin-block: 0.125rem;
`

export default function NowPlaying({ nowPlaying, isLoading }: props) {
  const song = nowPlaying?.item;
  const album = song?.album;
  

  return (
    <Container>
      <HeadingContainer
        href="https://open.spotify.com/user/nt6yeooaj0di051fntu1q4bw8"
        target="_blank"
      >
        <FaSpotify color={"#1ED760"} size={"2rem"} className={SpotifyLogo} />
        <Heading>Listening on Spotify...</Heading>
      </HeadingContainer>
      <Gradient>
        {isLoading ? (
          <InnerHeading>Finding Songs...</InnerHeading>
        ) : nowPlaying ? (
          <>
            {nowPlaying?.is_playing && song ? (
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
