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
    margin: 1rem;
`

const Divider = styled.div`
    border-bottom: 1px solid gray;
`

const BottomSection = styled.div`
    font-family: var(--font-poppins);
    margin: 0.75rem 1rem;
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

const InfoHeading = styled.h2`
    margin-block: 0.25rem;
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
            <Divider />
            <BottomSection>
                <InfoHeading>who am i?</InfoHeading>
                <p>hi! i'm james, a long distance runner and coder. i enjoy to...</p>
                <li>make cool things with frontend</li>
                <li>read on self-improvement and psychology</li>
                <li>going on long runs</li>
                <InfoHeading>other</InfoHeading>
                <li>current bronx science sophomore ('27)</li>
                <li>ambivert as an INFP (i can't pick a side 😿)</li>
            </BottomSection>
        </Container>
    )
}