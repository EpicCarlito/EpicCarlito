import { styled } from "@linaria/react"
import { scaleUp } from "@/components/animations"
import { css } from "@linaria/core"
import EpicCarlito from "../../../public/epiccarlito.svg";
import Face from "../../../public/face.png";
import Image from "next/image";

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

const ProfilePictures = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfilePicture = css`
  height: 6rem;
  width: 6rem;
  border: 1px solid black;
  border-radius: 9999px;
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.50));
  z-index: 2;

  @media (min-width: 48rem) {
    height: 8rem;
    width: 8rem;
  }
`

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
`

export default function AboutMe() {
    return (
        <Container>
            <TopSection>
                <ProfilePictures>
                    <EpicCarlito
                        className={`${ProfilePicture} ${scaleUp}`} />
                    <Image
                        src={Face}
                        alt="IRL FACE WHAT?!?!?"
                        className={`${ProfilePicture} ${scaleUp}`}
                        style={{ marginLeft: "-0.5rem" }}
                    />
                </ProfilePictures>
                <TextSection>
                <h1>Hola! I am James!</h1>
                <p>Figuring out my code along the way ¯\_(ツ)_/¯</p>
                </TextSection>
            </TopSection>
            <Divider/>
            <BottomSection>
                <p>Help me out here</p>
            </BottomSection>
        </Container>
    )
}