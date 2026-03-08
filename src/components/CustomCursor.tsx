import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        width: 400,
        height: 400,
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%)",
        borderRadius: "50%",
        transition: "left 0.1s ease, top 0.1s ease",
      }}
    />
  );
};

export default CustomCursor;
