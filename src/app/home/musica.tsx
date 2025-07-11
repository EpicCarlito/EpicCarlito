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
                <p>i am lazy, here is my monthly playlist: <a href={"https://open.spotify.com/playlist/4yjcOQctOJzSUCaaaJItHC?si=5a4a9d99ac244d27"}>july playlist</a></p>
                <InfoHeading>favorite artists</InfoHeading>
                <Artists>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl"
                            className={`${ArtistImage} ${scaleUp}`}>
                            <Image
                                alt="two door cinema club"
                                src="https://i.scdn.co/image/ab6761610000e5eb86faeb97a905a571b2c361a0"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${scaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>two door cinema club</ArtistName>
                            <li>Undercover Martyn</li>
                            <li>What You Know</li>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/24kKjYHpxr9bHyAJqChG68"
                            className={`${ArtistImage} ${scaleUp}`}>
                            <Image
                                alt="keanu bicol"
                                src="https://i.scdn.co/image/ab6761610000e5eb38d41024be8e40092480baa4"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${scaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>Keanu Bicol</ArtistName>
                            <li>i won&apos;t run</li>
                            <li>don&apos;t know</li>
                            <li>summer love</li>
                        </SongContainer>
                    </ArtistContainer>
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
                            <li>Witches</li>
                            <li>Down with the King</li>
                            <li>Tell Me You Know</li>
                        </SongContainer>
                    </ArtistContainer>
                    <ArtistContainer>
                        <a
                            href="https://open.spotify.com/artist/581C5Qwl87TskfBEzuoisu"
                            className={`${ArtistImage} ${scaleUp}`}>
                            <Image
                                alt="Cafuné"
                                src="https://i.scdn.co/image/ab676161000051744d72dc74c11df7baf1d08508"
                                width={96}
                                height={96}
                                className={`${ArtistImage} ${scaleUp}`} />
                        </a>
                        <SongContainer>
                            <ArtistName>Cafuné</ArtistName>
                            <li>Tek It</li>
                            <li>Friction</li>
                            <li>Demise</li>
                        </SongContainer>
                    </ArtistContainer>
                </Artists>
            </BottomSection>
        </Container>
    )
}