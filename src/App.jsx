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

  let carX = 0;

  function draw() {
    // limpar tela
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ruas
    ctx.fillStyle = "#444";
    ctx.fillRect(0, center - roadWidth / 2, canvas.width, roadWidth);
    ctx.fillRect(center - roadWidth / 2, 0, roadWidth, canvas.height);

    // carro
    ctx.fillStyle = "#00eaff";
    ctx.fillRect(carX, center - 10, 20, 20);

    // movimento
    carX += 2;

    requestAnimationFrame(draw);
  }

  draw();
}, []);

  return (
    <>
      <h1>🚦 Traffic Game</h1>
      <canvas ref={canvasRef} />
    </>
  );
}