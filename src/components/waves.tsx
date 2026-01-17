import Wave from "react-wavify";
import styles from "../styles/_waves.module.scss";

function AnimatedWave({ pos }: { pos: number }) {
  return (
    <Wave
      className={styles.wave}
      fill={`url(#gradient-${pos})`}
      style={{ filter: `url(#wave-shadow-${pos})` }}
      options={{
        height: 10 * pos + 15,
        amplitude: 20,
        speed: 0.15 + pos * 0.075,
        points: 3 + pos - 1,
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
            floodColor="#000"
            floodOpacity="0.6"
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
    <div className={styles.container}>
      <AnimatedWave pos={0} />
      <AnimatedWave pos={1} />
      <AnimatedWave pos={2} />
    </div>
  );
}
