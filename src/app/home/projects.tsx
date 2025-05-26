import { styled } from "@linaria/react"
import ProjectsList from "./components/projectsList";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 75vh;

    @media (min-width: 48rem) {
        height: 100%
    }
`

const BottomSection = styled.div`
    padding: 1rem 1.5rem;
    overflow: scroll;

    @media (min-width: 48rem) {
        overflow: visible;
    }
`

export default function Musica() {
    return (
        <Container>
            <BottomSection>
                <ProjectsList />
            </BottomSection>
        </Container>
    )
}