import { AccessToken } from "@spotify/web-api-ts-sdk";
import { NextApiRequest, NextApiResponse } from "next";

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
  refresh: string
) {
  const basic = Buffer.from(`${id}:${secret}`).toString("base64");
  const body = `grant_type=refresh_token&refresh_token=${encodeURIComponent(
    refresh
  )}`;
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  const accessToken: AccessToken = await response.json();

  return accessToken;
}

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string;
  const secret = process.env.NEXT_PUBLIC_SPOTIFY_SECRET as string;
  const refresh = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH as string;

  try {
    // const refreshToken = await codeForRefresh();
    const accessToken: AccessToken = await getAccessToken(
      clientId,
      secret,
      refresh
    );

    const token = accessToken.access_token;
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
}
