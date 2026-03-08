import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Code2, Palette, Trophy, Zap, Globe, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import HeroScene3D from "./HeroScene3D";
import useTextScramble from "@/hooks/useTextScramble";

const roles = ["Frontend Developer", "MERN Stack Developer", "Hackathon Winner", "Problem Solver", "Tech Explorer"];

const floatingBadges = [
  { label: "React", icon: "⚛️", x: "10%", y: "20%", delay: 0.5 },
  { label: "MERN Stack", icon: "🔷", x: "85%", y: "15%", delay: 0.7 },
  { label: "Django", icon: "🐍", x: "5%", y: "70%", delay: 0.9 },
  { label: "🏆 Winner", icon: "", x: "88%", y: "65%", delay: 1.1 },
  { label: "Node.js", icon: "🟢", x: "15%", y: "45%", delay: 1.3 },
  { label: "Figma", icon: "🎨", x: "80%", y: "40%", delay: 0.6 },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const scrambled = useTextScramble(roles[roleIndex], true, 25);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroScene3D />

      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay, duration: 0.6, type: "spring", stiffness: 200 }}
          className="absolute z-20 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-md border"
          style={{
            left: badge.x,
            top: badge.y,
            background: "rgba(139, 92, 246, 0.08)",
            borderColor: "rgba(139, 92, 246, 0.2)",
            color: "rgba(255, 255, 255, 0.7)",
            animation: `float ${6 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
          }}
        >
          {badge.icon && <span>{badge.icon}</span>}
          {badge.label}
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        {[300, 450, 600].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 1.5 }}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: `rgba(139, 92, 246, ${0.08 - i * 0.02})`,
              animation: `spin ${30 + i * 10}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="section-label">
            <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "#8b5cf6" }} />
            <span className="font-mono">{scrambled}</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 font-body"
          >
            Hi, I'm
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading tracking-tight leading-[1.05] mb-2">
            <span className="gradient-text-aurora inline-block">
              {"Abhinandana T U".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-32 h-[2px] mx-auto my-8 origin-center relative"
        >
          <div className="absolute inset-0 animate-gradient" style={{ backgroundImage: "var(--gradient-aurora)", backgroundSize: "200% 200%" }} />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: "#8b5cf6", boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed font-body"
        >
          Motivated front-end web developer crafting visually appealing, responsive web interfaces.
          Skilled in React, Django & modern technologies. Based in Thrissur, Kerala.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#projects"
            className="btn-primary group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Code2 size={16} />
            Explore My Work
            <motion.span className="inline-block" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline group"
            whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Palette size={16} />
            Let's Connect
          </motion.a>
          <motion.a
            href="/Abhinandana_T_U_Resume.pdf"
            download="Abhinandana_T_U_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex items-center justify-center gap-8 md:gap-12 mb-16"
        >
          {[
            { icon: Trophy, value: "2+", label: "Hackathon Wins" },
            { icon: Zap, value: "4+", label: "Projects" },
            { icon: Globe, value: "1", label: "Internship" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.15 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <stat.icon size={14} className="text-violet" />
                <span className="text-2xl font-heading gradient-text">{stat.value}</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={18} />
          </motion.div>
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 z-[5]" style={{ background: "linear-gradient(to top, #06020f, transparent)" }} />
    </section>
  );
};

export default HeroSection;
