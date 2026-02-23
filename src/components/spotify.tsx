import { useEffect, useState } from "react";
import styles from "../styles/_spotify.module.scss";
import { SpotifyStorage, type SpotifyState } from "../lib/spotifyStorage";
import type { Track } from "@spotify/web-api-ts-sdk";

export default function Spotify() {
  const [state, setState] = useState<SpotifyState>(SpotifyStorage.getState());

  useEffect(() => {
    const unsubscribe = SpotifyStorage.listen((next) => {
      setState((prev) => {
        const prevId = prev.track?.item?.id;
        const nextId = next.track?.item?.id;

        if (prevId === nextId && prev.playlist === next.playlist) {
          return prev;
        }

        return next;
      });
    });

    if (window.location.pathname === "/songs") {
      SpotifyStorage.fetchPlaylist();
      SpotifyStorage.fetchTrack();
    }

    return () => unsubscribe();
  }, []);

  const track = state.track;
  const song = track?.item as Track;
  const album = song?.album;
  const playlist = state.playlist;

  return (
    <>
      {track?.is_playing && song ? (
        <a
          className={styles.container}
          href={song?.external_urls.spotify}
          target="_blank"
        >
          <img
            src={album.images[0].url}
            className={styles.songImage}
            width={64}
            height={64}
            alt={`${album.name} album art`}
          />

          <div className={styles.songInfo}>
            <h1 className={styles.songName}>{song?.name}</h1>
            <p className={styles.artist}>{`by ${song?.artists[0].name}`}</p>
          </div>
        </a>
      ) : (
        <p className={styles.innerHeader}>Nothing :(</p>
      )}

      {playlist && (
        <div>
          <h1>{playlist.name}</h1>
          <p>{playlist.description}</p>
        </div>
      )}
    </>
  );
}
