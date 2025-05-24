import { styled } from "@linaria/react"
import NowPlaying from "./components/nowPlaying";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const TopSection = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 1.5rem;
`

const Divider = styled.div`
    border-bottom: 1px solid var(--white-but-not);
`

const BottomSection = styled.div`
    margin: 1rem 1.5rem;

`

export default function Musica() {
    return (
        <Container>
            <TopSection>
                <NowPlaying />
            </TopSection>
            <Divider/>
            <BottomSection>
                <p>Help me out here</p>
            </BottomSection>
        </Container>
    )
}