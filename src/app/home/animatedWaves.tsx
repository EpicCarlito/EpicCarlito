import { styled } from "@linaria/react";
import Wave from "react-wavify";

interface props {
  color: string;
  height: number;
}

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 175px;
`

function AnimatedWave(props: props) {
  const { color, height } = props;

  return (
    <Wave 
      fill={color}
      paused={false}
      style={{ gridColumnStart: 1, gridRowStart: 1, overflow: "hidden" }}
      options={{
        height: height,
        amplitude: 30,
        speed: height / 100,
        points: 2
      }}
    />
  );
}

export default function AnimatedWaves() {
  return (
    <Container>
      <AnimatedWave color={"#ffd769"} height={20} />
      <AnimatedWave color={"#b9b0a2"} height={35} />
      <AnimatedWave color={"#7289da"} height={50} />
    </Container>
  );
}