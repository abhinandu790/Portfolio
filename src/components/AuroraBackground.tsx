import { useEffect, useRef } from "react";

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep dark purple base
      ctx.fillStyle = "#06020f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aurora blobs
      const blobs = [
        { x: 0.3, y: 0.2, r: 400, color: "rgba(139, 92, 246, 0.12)", speed: 1 },
        { x: 0.7, y: 0.3, r: 350, color: "rgba(236, 72, 153, 0.08)", speed: 1.3 },
        { x: 0.5, y: 0.7, r: 300, color: "rgba(139, 92, 246, 0.06)", speed: 0.8 },
        { x: 0.2, y: 0.8, r: 250, color: "rgba(168, 85, 247, 0.05)", speed: 1.1 },
      ];

      blobs.forEach((blob) => {
        const x = canvas.width * blob.x + Math.sin(time * blob.speed) * 80;
        const y = canvas.height * blob.y + Math.cos(time * blob.speed * 0.7) * 60;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default AuroraBackground;
