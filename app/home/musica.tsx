import { styled } from "@linaria/react"
import NowPlaying from "./musicComponents/nowPlaying";
import Image from 'next/image'
import { css } from "@linaria/core";
import { miniScaleUp } from "../components/animations";
import { FaSpotify } from "react-icons/fa";
import { Suspense } from "react";
import checkString from "../components/checkString";

interface props {
    nowPlaying: any;
    playlist: any;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 75vh;

    @media (min-width: 48rem) {
        height: 100%
    }
`

const TopSection = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
`

const Divider = styled.div`
    border-bottom: 1px solid var(--white-but-not);
`

const BottomSection = styled.div`
    padding: 0.75rem 1.25rem;
    overflow: scroll;

    @media (min-width: 48rem) {
        overflow: visible;
    }
`

const InfoHeading = styled.h2`
    margin-block: 0.5rem;
`

const Artists = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.25rem;
    
    @media (min-width: 48rem) {
        gap: 1rem;
    }
`

const ArtistContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    @media (min-width: 48rem) {
        flex-direction: row;
    }
`

const ArtistName = styled.h3`
    margin-block: 0.25rem;
`

const ArtistImage = css`
    filter: drop-shadow(2px 2px 3px rgb(0 0 0));
    border-radius: 0.50rem;
    width: 5rem;
    height: 5rem;

    @media (min-width: 48rem) {
        width: 6rem;
        height: 6rem;
    }
`

const SongContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ListContainer = styled.div`
    display: flex;
    background-image: linear-gradient(to right, rgb(15 23 42), #1e293b);
    border: 2px solid var(--white-but-not);
    border-radius: 0.25rem;
    align-items: center;
    cursor: pointer;
    padding: 1rem;
    gap: 0.75rem;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const listImage = css`
    filter: drop-shadow(3px 3px 3px rgb(0 0 0));
    border-radius: 0.50rem;
`

const PlayingContainer = styled.div`
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

const Heading = styled.p`
  font-size: var(--text-lg);
  margin-left: 0.25rem;
`

const SpotifyLogo = css`
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.50));
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

export default function Musica({ nowPlaying, playlist }: props) {
    return (
        <Container>
            <TopSection>
                <PlayingContainer>
                    <HeadingContainer
                        href="https://open.spotify.com/user/nt6yeooaj0di051fntu1q4bw8"
                        target="_blank"
                    >
                        <FaSpotify color={"#1ED760"} size={"2rem"} className={SpotifyLogo} />
                        <Heading>Listening on Spotify...</Heading>
                    </HeadingContainer>
                    <Gradient className={miniScaleUp}>
                        <Suspense fallback={<InnerHeading>Finding Songs...</InnerHeading>}>
                            <NowPlaying nowPlaying={nowPlaying} />
                        </Suspense>
                    </Gradient>
                </PlayingContainer>
            </TopSection>
            <Divider />
            <BottomSection>
                <p>i enjoy listening to indie rock, future bass and electronic</p>
                <InfoHeading>monthly playlist</InfoHeading>
                {playlist && playlist.images ? (
                    <ListContainer className={miniScaleUp}>
                        <Image
                            alt="monthly playlist"
                            src={playlist.images[0].url}
                            width={96}
                            height={96}
                            className={listImage} />
                        <InfoContainer>
                            <InfoHeading>{playlist.name}</InfoHeading>
                            <p>{playlist.description}</p>
                        </InfoContainer>
                    </ListContainer>
                ) : (
                    <p>you reached the spotify api limit, no playlist then hehe</p>
                )}
                <InfoHeading>favorite artists</InfoHeading>
                <Artists>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/6eXOyTfkdOlynFf7lTCp19"
                            className={`${ArtistImage} ${miniScaleUp}`}>
                            <Image
                                alt="bedfashion"
                                src="https://i.scdn.co/image/ab6761610000e5eb018a39ffe60f9bccc9f2be10"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${miniScaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>bedfashion (underrated 🔥)</ArtistName>
                            <li>Lay Low</li>
                            <li>KK ARIZONA</li>
                            <li>Anime Dream Queen</li>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/38SKxCyfrmNWqWunb9wGHP"
                            className={`${ArtistImage} ${miniScaleUp}`}>
                            <Image
                                alt="good kid"
                                src="https://i.scdn.co/image/ab6761610000e5ebe825d8ceaa3bb7ce3151f3a5"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${miniScaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>Good Kid</ArtistName>
                            <li>{"Mimi's Delivery Service"}</li>
                            <li>Faster</li>
                            <li>Nomu</li>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/0U7iI0Dk4Ojvi17nZboNO4"
                            className={`${ArtistImage} ${miniScaleUp}`}>
                            <Image
                                alt="vacations"
                                src="https://i.scdn.co/image/ab6761610000e5eb080c868c83bba9ba37f13639"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${miniScaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>Vacations</ArtistName>
                            <li>Next Exit</li>
                            <li>On Hold</li>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/5vh3TBzvI4nASt2A1KfgcR"
                            className={`${ArtistImage} ${miniScaleUp}`}>
                            <Image
                                alt="Phoneboy"
                                src="https://i.scdn.co/image/ab6761610000e5eba41c7c4dbcea837acaabb4a9"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${miniScaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>Phoneboy</ArtistName>
                            <li>Ferrari</li>
                            <li>Roses</li>
                            <li>Open Up</li>
                        </SongContainer>
                    </ArtistContainer>
                </Artists>
                <InfoHeading>honorable mentions</InfoHeading>
                <SongContainer>
                    <li>Fairhaven Station by tanner.</li>
                    <li>With Or Without by Luka Ferraro, Álvaro Rubio</li>
                    <li>GESHUOU by INOHA</li>
                </SongContainer>
            </BottomSection>
        </Container>
    )
}