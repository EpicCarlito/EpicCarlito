import type { Playlist, PlaybackState } from "@spotify/web-api-ts-sdk";

export type SpotifyState = {
  playlist: Playlist | null;
  track: PlaybackState | null;
};

class spotifyStorage {
  playlistId = import.meta.env.PUBLIC_SPOTIFY_PLAYLIST_ID as string;
  state: SpotifyState = {
    playlist: null,
    track: null,
  };
  token: string | null = null;
  listeners = new Set<(state: SpotifyState) => void>();

  getState() {
    return this.state;
  }

  async getToken() {
    if (this.token) return this.token;

    const res = await fetch("/api/spotify");
    const { token } = await res.json();

    this.token = token;
    return token;
  }

  listen(listener: (state: SpotifyState) => void): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  notify() {
    const snapshot = { ...this.state };
    this.listeners.forEach((l) => l(snapshot));
  }

  async fetchPlaylist() {
    if (this.state.playlist) return;

    const token = await this.getToken();

    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${this.playlistId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok) return;

    this.state.playlist = await res.json();
    this.notify();
  }

  async fetchTrack() {
    const token = await this.getToken();

    const res = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok || res.status != 200) return;

    this.state.track = await res.json();
    this.notify();
  }
}

export const SpotifyStorage = new spotifyStorage();
