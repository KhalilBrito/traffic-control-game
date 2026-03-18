import { useRef, useEffect } from "react";

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 400;

  const center = canvas.width / 2;
  const roadWidth = 80;

  // fundo
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // rua horizontal
  ctx.fillStyle = "#444";
  ctx.fillRect(0, center - roadWidth / 2, canvas.width, roadWidth);

  // rua vertical
  ctx.fillRect(center - roadWidth / 2, 0, roadWidth, canvas.height);

}, []);

  return (
    <>
      <h1>🚦 Traffic Game</h1>
      <canvas ref={canvasRef} />
    </>
  );
}