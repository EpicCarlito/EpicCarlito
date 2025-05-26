import { styled } from "@linaria/react"
import NowPlaying from "./components/nowPlaying";
import Image from 'next/image'
import { css } from "@linaria/core";

interface props {
    nowPlaying: any;
    isLoading: boolean;
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
    padding: 1rem 1.5rem;
    overflow: scroll;

    @media (min-width: 48rem) {
        overflow: visible;
    }
`

const InfoHeading = styled.h2`
    margin-block: 0.75rem;
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
    gap: 0.5rem;

    @media (min-width: 48rem) {
        flex-direction: row;
    }
`

const ArtistName = styled.h3`
    margin-block: 0.25rem;
`

const ArtistImage = css`
    width: 5rem;
    height: 5rem;
    border-radius: 9999px;
    border: 1px solid var(--white-but-not);

    @media (min-width: 48rem) {
        width: 6rem;
        height: 6rem;
    }
`

const SongName = styled.li`
  list-style: none;

  &::before {
    content: '•';
    margin-right: 0.5rem;
  }
`;

const SongContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const scaleUp = css`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;


export default function Musica({ nowPlaying, isLoading }: props) {
    return (
        <Container>
            <TopSection>
                <NowPlaying nowPlaying={nowPlaying} isLoading={isLoading} />
            </TopSection>
            <Divider />
            <BottomSection>
                <p>i enjoy listening to indie rock, future bass and electronic</p>
                <InfoHeading>favorite artists</InfoHeading>
                <Artists>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/38SKxCyfrmNWqWunb9wGHP"
                            className={`${ArtistImage} ${scaleUp}`}>
                            <Image
                                alt="good kid"
                                src="https://i.scdn.co/image/ab6761610000e5ebe825d8ceaa3bb7ce3151f3a5"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${scaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>good kid</ArtistName>
                            <SongName>First Rate Town</SongName>
                            <SongName>Alchemist</SongName>
                            <SongName>Summer</SongName>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/581C5Qwl87TskfBEzuoisu"
                            className={`${ArtistImage} ${scaleUp}`}>
                            <Image
                                alt="Cafuné"
                                src="https://i.scdn.co/image/ab6761610000e5ebc8ff003610ebb5bab7add76b"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${scaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>Cafuné</ArtistName>
                            <SongName>Shadowboxing</SongName>
                            <SongName>Shadow</SongName>
                            <SongName>Tek it</SongName>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/29O9ZebFa65aIEvMaW5pQY"
                            className={`${ArtistImage} ${scaleUp}`}>
                            <Image
                                alt="snail's house"
                                src="https://i.scdn.co/image/ab6761610000517437ce1606bdfa85907d4add14"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${scaleUp}`} />
                        </a>

                        <SongContainer>
                            <ArtistName>snail&apos;s house</ArtistName>
                            <SongName>Moon Rabbit</SongName>
                            <SongName>Digit Tattoo</SongName>
                            <SongName>Cosmo Funk</SongName>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/7cvljqLNhWNFMb8wP2NImJ"
                            className={`${ArtistImage} ${scaleUp}`}>
                            <Image
                                alt="moe's shop"
                                src="https://i.scdn.co/image/ab6761610000e5eb18cc2390dfccdd20efddb5a9"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${scaleUp}`} />
                        </a>

                        <SongContainer>
                            <ArtistName>moe&apos;s shop</ArtistName>
                            <SongName>WONDER POP</SongName>
                            <SongName>WWW</SongName>
                            <SongName>LOVE RECORD</SongName>
                        </SongContainer>
                    </ArtistContainer>
                </Artists>
            </BottomSection>
        </Container>
    )
}