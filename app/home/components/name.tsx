import { styled } from "@linaria/react"

interface props {
  delay: number;
}

const Container = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: clamp(var(--text-5xl), 5vw + 1rem, var(--text-8xl));
  font-family: var(--font-sen);
  font-weight: 800;
  margin-block: 0;

  perspective: 31.25rem;
  transform: rotateX(-2deg);
  transform-style: preserve-3d;
`

const Letter = styled.span<props>`
  display: inline-block;
  cursor: default;

  animation-name: ZoomIn, zoomOut, moveUp;
  animation-duration: 1s, 1s, 1s;
  animation-timing-function: ease-in-out, ease-in-out, ease-in-out;
  animation-delay: 0s, ${props => props.delay + 1}s;
  animation-fill-mode: forwards, forwards;

  @keyframes ZoomIn {
      from {
          transform: translateZ(25rem);
          opacity: 0;
      }
      to {
          transform: translateZ(-6.25rem);
          opacity: 1;
      }
  }

  @keyframes zoomOut {
      0% {
          transform: translateZ(-6.25rem);
      }
      50% {
          transform: translateZ(5.5rem);
      }
      100% {
          transform: translateZ(0);
      }
  }
`

export default function Name() {
  return (
    <Container>
      <Letter delay={0.05}>E</Letter>
      <Letter delay={0.10}>p</Letter>
      <Letter delay={0.15}>i</Letter>
      <Letter delay={0.20}>c</Letter>
      <Letter delay={0.25}>C</Letter>
      <Letter delay={0.30}>a</Letter>
      <Letter delay={0.25}>r</Letter>
      <Letter delay={0.20}>l</Letter>
      <Letter delay={0.15}>i</Letter>
      <Letter delay={0.10}>t</Letter>
      <Letter delay={0.05}>o</Letter>
    </Container>
  )
}
