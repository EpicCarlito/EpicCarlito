import Wave from "react-wavify";
import "../styles/_waves.scss";
import { useMemo } from "react";

function AnimatedWave({ pos }: { pos: number }) {
  const waveConfig = useMemo(() => {
    return {
      amplitude: Math.random() * 20 + (20 * pos),
    };
  }, []);

  return (
    <Wave
      className="wave"
      fill={`url(#gradient-${pos})`}
      style={{ filter: `url(#wave-shadow-${pos})` }}
      options={{
        height: 25,
        amplitude: waveConfig.amplitude,
        speed: 0.1 * pos,
        points: 2,
      }}
    >
      <defs>
        <filter
          id={`wave-shadow-${pos}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="6"
            floodColor="#000000"
            floodOpacity="0.75"
          />
        </filter>

        <linearGradient id={`gradient-${pos}`} gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#ffd769" />
          <stop offset="65%" stopColor="#b6b2d8" />
          <stop offset="100%" stopColor="#7289da" />
        </linearGradient>
      </defs>
    </Wave>
  );
}

export default function AnimatedWaves() {
  return (
    <div className="container">
      <AnimatedWave pos={1} />
      <AnimatedWave pos={2} />
      <AnimatedWave pos={3} />
    </div>
  );
}
