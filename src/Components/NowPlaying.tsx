import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import axios from 'axios';
import qs from 'qs';

// Replace these with your own values
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_CODE;

const BASE_URL = 'https://api.spotify.com/v1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

// Function to get the access token
async function getAccessToken() {
  try {
    const { data } = await axios.post(
      TOKEN_ENDPOINT,
      qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return data.access_token;
  } catch (error) {
    console.error('Error getting access token', error);
  }
}

async function getNowPlaying() {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      throw new Error('Access token could not be obtained');
    }

    const { data } = await axios.get(`${BASE_URL}/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    console.error('Error getting now playing', error);
  }
}

interface Track {
  item: {
    name: string;
    artists: {
      name: string;
    }[];
  };
}

export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<Track | null>(null);

  useEffect(() => {
    getNowPlaying().then((data) => {
      setNowPlaying(data);
    });
  }, []);

  if (!nowPlaying) {
    return <div>Not Playing Anything</div>;
  }

  return (
    <div>
      <h1>Now Playing: {nowPlaying.item.name}</h1>
      <h2>Artist: {nowPlaying.item.artists[0].name}</h2>
    </div>
  );
}