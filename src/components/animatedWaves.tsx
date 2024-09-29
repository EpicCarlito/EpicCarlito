"use client";

import { motion } from "framer-motion";
import { renderToStaticMarkup } from "react-dom/server";

interface props {
  color: string;
  delay: number;
  reverse?: boolean;
}

function AnimatedWave(props: props) {
  const wave = (
    <svg
      className="h-auto w-full"
      viewBox="0 0 960 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,50.51c171.02-66.65,275.9-68.04,480,0,175.42,54.2,286.81,65.74,480,0v99.49H0V50.51Z"
        fill={props.color}
      />
    </svg>
  );

  const svgAsString = renderToStaticMarkup(wave);
  const encodedWaveSvg = encodeURIComponent(svgAsString);
  const svgWidth = 960;

  return (
    <motion.div
      initial={{
        backgroundPositionX: props.reverse ? `-${svgWidth}px` : `${svgWidth}px`,
      }}
      animate={{
        backgroundPositionX: props.reverse ? `${svgWidth}px` : `-${svgWidth}px`,
      }}
      transition={{
        ease: "linear",
        repeat: Infinity,
        duration: props.delay,
      }}
      className="col-start-1 row-start-1 overflow-hidden"
      style={{
        background: `url('data:image/svg+xml;utf8,${encodedWaveSvg}')`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `${svgWidth}px 150px`,
        height: "150px",
      }}
    ></motion.div>
  );
}

export default function AnimatedWaves() {
  return (
    <div className="bottom-0 grid border-b-2 border-white">
      <AnimatedWave color={"#ffd769"} delay={8} />
      <AnimatedWave color={"#b9b0a2"} delay={10} />
      <AnimatedWave color={"#7289da"} delay={8} reverse={true} />
    </div>
  );
}
