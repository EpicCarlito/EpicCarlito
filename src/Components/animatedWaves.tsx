import { renderToStaticMarkup } from "react-dom/server";

function animatedWave(color: string, delay: string, direction?: string) {
  const wave = (
    <svg viewBox="0 0 1000 126" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 42.9533C178.148 -12.5894 287.4 -13.7474 500 42.9533C682.727 88.1203 798.763 97.7368 1000 42.9533V125.861H0V42.9533Z"
        fill={color}
      />
    </svg>
  );

  const svgAsString = renderToStaticMarkup(wave);
  const encodedWaveSvg = encodeURIComponent(svgAsString);

  return (
    <div
      style={{
        background: `url('data:image/svg+xml;utf8,${encodedWaveSvg}')`,
        backgroundSize: "1000px 126px",
        animation: `wave ${delay}s linear infinite`,
        animationDirection: direction
      }} 
      className="absolute bottom-0 h-[126px] w-[100%]"
    >
    </div>
  );
}

export default function animatedWaves() {
  return (
    <>
      {animatedWave("#ffd769", "4")}
      {animatedWave("#b9b0a2", "6")}
      {animatedWave("#7289da", "4", "reverse")}
    </>
  );
}