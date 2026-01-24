import type { AccessToken } from "@spotify/web-api-ts-sdk";

// async function codeForRefresh() {
//   const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
//   const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_SECRET;
//   const clientCode = process.env.NEXT_PUBLIC_SPOTIFY_CODE;
//   const redirectUri = encodeURIComponent("http://localhost:3000/callback");

//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${Buffer.from(
//         `${clientId}:${clientSecret}`
//       ).toString("base64")}`,
//     },
//     body: `grant_type=authorization_code&code=${clientCode}&redirect_uri=${redirectUri}`,
//   });

//   const data = await response.json();
//   return data.refresh_token;
// }

export async function getAccessToken(
  id: string,
  secret: string,
  refresh: string,
) {
  const basic = Buffer.from(`${id}:${secret}`).toString("base64");
  const body = `grant_type=refresh_token&refresh_token=${encodeURIComponent(
    refresh,
  )}`;
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Spotify access token");
  }

  return response.json();
}

export async function GET() {
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  const secret = import.meta.env.SPOTIFY_SECRET;
  const refresh = import.meta.env.SPOTIFY_REFRESH;

  try {
    const accessToken: AccessToken = await getAccessToken(
      clientId,
      secret,
      refresh,
    );

    return new Response(JSON.stringify({ token: accessToken.access_token }));
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "An error occurred while fetching data.",
      }),
      { status: 500 },
    );
  }
}
