import { useEffect, useState } from "react";
import styles from "../styles/_spotify.module.scss";

export default function Spotify() {
  const [track, setTrack] = useState<any>(null);
  const [playlist, setPlaylist] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRes = await fetch("/api/spotify");
      const fetchedToken = JSON.parse(await fetchedRes.text()).token;
      const playlistId = import.meta.env.PUBLIC_SPOTIFY_PLAYLIST_ID as string;

      const currentPlaylist = await fetchSpotify(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        fetchedToken,
        true,
      );
      const currentTrack = await fetchSpotify(
        "https://api.spotify.com/v1/me/player/currently-playing",
        fetchedToken,
      );

      setPlaylist(currentPlaylist);
      setTrack(currentTrack);
    };

    fetchData();
  }, []);

  const song = track?.item;
  const album = song?.album;

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
    </>
  );
}

function checkString(string: String) {
  if (string.includes("&#x27;")) return string.replaceAll("&#x27;", "'");
  if (string.includes("'")) return string.replaceAll("'", "&apos;");
  return string;
}

async function fetchSpotify(
  url: string,
  accessToken: string,
  isPlaylist?: Boolean,
) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const resText = await response.text();

  try {
    const resJSON = JSON.parse(resText);
    if (isPlaylist) {
      let resInfo = {
        name: resJSON.name,
        description: checkString(resJSON.description as string),
        images: resJSON.images,
      };
      return resInfo;
    } else {
      return resJSON;
    }
  } catch (error) {
    return null;
  }
}
