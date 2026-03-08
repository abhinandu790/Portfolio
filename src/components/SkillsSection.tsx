import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Code2, Paintbrush, Server, GitBranch, Globe,
  Database, Flame, Layers, Cpu, Terminal, Palette,
  FileCode, Box, Wrench
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2, level: 55, color: "#61dafb", category: "frontend" },
  { name: "JavaScript", icon: Terminal, level: 45, color: "#f7df1e", category: "frontend" },
  { name: "HTML/CSS", icon: Globe, level: 90, color: "#e34f26", category: "frontend" },
  { name: "Bootstrap", icon: Layers, level: 78, color: "#7952b3", category: "frontend" },
  { name: "Node.js", icon: Server, level: 35, color: "#68a063", category: "backend" },
  { name: "Express.js", icon: Server, level: 35, color: "#ffffff", category: "backend" },
  { name: "MongoDB", icon: Database, level: 50, color: "#47a248", category: "backend" },
  { name: "PostgreSQL", icon: Database, level: 60, color: "#336791", category: "backend" },
  { name: "Django", icon: FileCode, level: 65, color: "#44b78b", category: "backend" },
  { name: "Python", icon: Cpu, level: 68, color: "#3776ab", category: "backend" },
  { name: "MySQL", icon: Database, level: 58, color: "#4479a1", category: "backend" },
  { name: "Java", icon: Code2, level: 42, color: "#f89820", category: "languages" },
  { name: "C Programming", icon: Terminal, level: 45, color: "#a8b9cc", category: "languages" },
  { name: "C++", icon: Terminal, level: 40, color: "#00599c", category: "languages" },
  { name: "OOP", icon: Box, level: 50, color: "#8b5cf6", category: "languages" },
  { name: "Data Structures", icon: Layers, level: 48, color: "#ec4899", category: "languages" },
  { name: "Git/GitHub", icon: GitBranch, level: 75, color: "#f05032", category: "tools" },
  { name: "Figma", icon: Paintbrush, level: 55, color: "#a259ff", category: "tools" },
  { name: "Postman", icon: Wrench, level: 55, color: "#ff6c37", category: "tools" },
  { name: "Jira", icon: Wrench, level: 45, color: "#0052cc", category: "tools" },
];

const categories = [
  { id: "all", label: "All", emoji: "🚀" },
  { id: "frontend", label: "Frontend", emoji: "🎨" },
  { id: "backend", label: "Backend", emoji: "⚙️" },
  { id: "languages", label: "Languages", emoji: "💻" },
  { id: "tools", label: "Tools", emoji: "🔧" },
];

const SkillCard = ({ skill, index, inView }: { skill: typeof skills[0]; index: number; inView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.85, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay: 0.04 * index, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.25 } }}
      className="glass-card-hover p-5 relative group cursor-default"
      style={{
        boxShadow: hovered ? `0 0 30px -8px ${skill.color}40` : undefined,
        borderColor: hovered ? `${skill.color}30` : undefined,
      }}
    >
      <motion.div
        className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-10 blur-xl"
        animate={hovered ? { opacity: 0.3, scale: 1.8 } : { opacity: 0.1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{ background: skill.color }}
      />

      <div className="flex items-start gap-4">
        <motion.div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${skill.color}15` }}
          whileHover={{ rotate: 12, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <skill.icon size={20} style={{ color: skill.color }} />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-body font-semibold text-foreground mb-1">{skill.name}</h4>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(139, 92, 246, 0.1)" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.4, delay: 0.06 * index, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full relative overflow-hidden"
              style={{ background: skill.color }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
              />
            </motion.div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px] font-mono text-muted-foreground capitalize">{skill.category}</span>
            <span className="text-[10px] font-mono" style={{ color: skill.color }}>{skill.level}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedCounter = ({ value, inView }: { value: string; inView: boolean }) => {
  const numMatch = value.match(/(\d+)/);
  const [count, setCount] = useState(0);
  const target = numMatch ? parseInt(numMatch[1]) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    if (!inView || !numMatch) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  if (!numMatch) return <span>{value}</span>;
  return <span>{count}{suffix}</span>;
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? skills : skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="floating-orb w-72 h-72 bottom-0 right-0" style={{ background: "rgba(139, 92, 246, 0.05)" }} />
      <div className="floating-orb w-60 h-60 top-20 -left-10" style={{ background: "rgba(236, 72, 153, 0.04)" }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: "#8b5cf6" }}
              animate={inView ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            Skills
          </motion.span>
          <h2 className="section-title">
            My <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mt-4">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-500 ${
                activeFilter === cat.id
                  ? "text-white shadow-lg"
                  : "text-muted-foreground border border-border hover:border-violet/30"
              }`}
              style={activeFilter === cat.id ? {
                backgroundImage: "var(--gradient-fire)",
                boxShadow: "0 0 30px -8px rgba(139, 92, 246, 0.5)",
              } : {}}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-8 md:gap-16 mt-14"
        >
          {[
            { value: "20+", label: "Technologies" },
            { value: "4", label: "Categories" },
            { value: "CCBP 4.0", label: "Certified" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.15, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <div className="text-2xl font-heading gradient-text">
                <AnimatedCounter value={stat.value} inView={inView} />
              </div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
