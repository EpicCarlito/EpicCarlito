"use client";

import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { renderToStaticMarkup } from "react-dom/server";

interface props {
  color: string;
  delay: number;
  reverse?: boolean;
}

interface gridProps {
  svgWidth: number;
  delay: number;
  reverse?: boolean;
}

const Container = styled.div`
  display: grid;
  position: absolute; 
  border-bottom: 2px solid var(--white-but-not);
  width: 100%;
  height: 150px;
  bottom: 0px;
`

const ForceGrid = styled.div<gridProps>`
  grid-column-start: 1;
  grid-row-start: 1;
  overflow: hidden;
  animation: waveMovement ${props => props.delay}s linear infinite;

  @keyframes waveMovement {
    0% {
      background-position-x: ${props => props.reverse ? `-${props.svgWidth}px` : `${props.svgWidth}px`};
    }
    100% {
      background-position-x: ${props => props.reverse ? `${props.svgWidth}px` : `-${props.svgWidth}px`};
    }
  }
`;

const waveStyle = css`
  height: "auto";
  width: 100%;
`

const waveSVG = (color: string) => {
  return renderToStaticMarkup(
    <svg
      className={waveStyle}
      viewBox="0 0 960 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,50.51c171.02-66.65,275.9-68.04,480,0,175.42,54.2,286.81,65.74,480,0v99.49H0V50.51Z"
        fill={color}
      />
    </svg>
  )
}

function AnimatedWave(props: props) {
  const { color, delay, reverse } = props;
  const encodedWaveSvg = encodeURIComponent(waveSVG(color));
  const svgWidth = 960;

  return (
    <ForceGrid
      svgWidth={svgWidth}
      delay={delay}
      reverse={reverse}
      style={{
        background: `url('data:image/svg+xml;utf8,${encodedWaveSvg}')`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `${svgWidth}px 150px`,
        height: "150px"
      }}
    ></ForceGrid>
  );
}

export default function AnimatedWaves() {
  return (
    <Container>
      <AnimatedWave color={"#ffd769"} delay={8} />
      <AnimatedWave color={"#b9b0a2"} delay={10} />
      <AnimatedWave color={"#7289da"} delay={8} reverse={true} />
    </Container>
  );
}
