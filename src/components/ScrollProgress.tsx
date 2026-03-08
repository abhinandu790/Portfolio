import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
    >
      <div className="h-full w-full animate-gradient" style={{
        backgroundImage: "var(--gradient-aurora)",
        backgroundSize: "200% 200%",
      }} />
    </motion.div>
  );
};

export default ScrollProgress;
