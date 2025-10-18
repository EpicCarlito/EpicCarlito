"use client";

import Image from "next/image";
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

interface props {
  nowPlaying: any;
}

const SongContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: inherit;
`

const SongImage = css`
  filter: drop-shadow(3px 3px 3px rgb(0 0 0));
  border-radius: 0.50rem;
  height: 4rem;
  width: 4rem;
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

const InnerHeading = styled.p`
  font-size: var(--text-base);
`

export default function NowPlaying({ nowPlaying }: props) {
  const song = nowPlaying?.item;
  const album = song?.album;

  return (
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
  );
}
