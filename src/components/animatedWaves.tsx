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
    <svg viewBox="0 0 1000 125" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 42.9533C178.148 -12.5894 287.4 -13.7474 500 42.9533C682.727 88.1203 798.763 97.7368 1000 42.9533V125.861H0V42.9533Z"
        fill={props.color}
        className="w-[1000px] h-[126px]"
      />
    </svg>
  );

  const svgAsString = renderToStaticMarkup(wave);
  const encodedWaveSvg = encodeURIComponent(svgAsString);

  return (
    <motion.div
      initial={
        props.reverse
          ? { backgroundPositionX: "0px" }
          : { backgroundPositionX: "1000px" }
      }
      animate={
        props.reverse
          ? { backgroundPositionX: "1000px" }
          : { backgroundPositionX: "0px" }
      }
      transition={{
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: props.delay,
      }}
      className="absolute bottom-0 overflow-hidden w-[100%] h-[46px] md:h-[96px] lg:h-[126px]"
      style={{
        background: `url('data:image/svg+xml;utf8,${encodedWaveSvg}')`,
      }}
    ></motion.div>
  );
}

export default function AnimatedWaves() {
  return (
    <div className="bottom-0">
      <AnimatedWave color={"#ffd769"} delay={4} />
      <AnimatedWave color={"#b9b0a2"} delay={6} />
      <AnimatedWave color={"#7289da"} delay={4} reverse={true} />
    </div>
  );
}
