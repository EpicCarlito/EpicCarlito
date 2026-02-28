import { useEffect, useState } from "react";
import styles from "../styles/_spotify.module.scss";
import { SpotifyStorage, type SpotifyState } from "../lib/spotifyStorage";
import type { Track } from "@spotify/web-api-ts-sdk";
import { FaSpotify } from "react-icons/fa";

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

    if (window.location.pathname === "/music") {
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
    <div className={styles.container}>
      {track?.is_playing && song ? (
        <a
          data-tap="1.025"
          className={styles.songContainer}
          href={song?.external_urls.spotify}
          target="_blank"
        >
          <div className={styles.songHeading}>
            <FaSpotify size={32} />
            <h2>Currently Listening to...</h2>
          </div>
          <div className={styles.songInner}>
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
          </div>
        </a>
      ) : (
        <div className={styles.songContainer}>
          <div className={styles.songHeading}>
            <FaSpotify size={32} />
            <h2>Currently Listening to...</h2>
          </div>
          <div className={styles.songInner}>
            <h2>uh, nothing</h2>
          </div>
        </div>
      )}

      {playlist ? (
        <div className={styles.songContainer}>
          <div className={styles.songInner}>
            <h1 className={styles.songName}>current playlist</h1>
            <img className={styles.songImage} src={playlist.images[0].url} />
            <div className={styles.songInfo}>
              <h1 className={styles.songName}>{playlist.name}</h1>
              <p className={styles.artist}>{playlist.description}</p>
            </div>
          </div>
        </div>
      ) : (
          <div className={styles.songContainer}>
          <div className={styles.songInner}>
            <h1 className={styles.songName}>current playlist:</h1>
            <div className={styles.songInfo}>
              <p className={styles.artist}>the spotify api has been ratelimited !!!</p>
              <p className={styles.artist}>gosh dude, so rude</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
