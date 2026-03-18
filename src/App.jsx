import { useRef, useEffect } from "react";

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 400;

    ctx.fillStyle = "white";
    ctx.fillRect(180, 180, 40, 40);
  }, []);

  return (
    <>
      <h1>🚦 Traffic Game</h1>
      <canvas ref={canvasRef} />
    </>
  );
}