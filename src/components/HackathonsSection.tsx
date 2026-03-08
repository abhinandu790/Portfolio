import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, Lightbulb, Rocket, Star, GraduationCap, Briefcase, Code, TrendingUp, Users, Zap, Heart } from "lucide-react";

const impactStats = [
  { number: "5+", label: "Hackathons", icon: Rocket, color: "#8b5cf6" },
  { number: "2", label: "Wins", icon: Trophy, color: "#fbbf24" },
  { number: "2", label: "Special Mentions", icon: Star, color: "#06b6d4" },
  { number: "4+", label: "Projects Shipped", icon: TrendingUp, color: "#10b981" },
];

const strengths = [
  { icon: Zap, title: "Rapid Builder", desc: "Idea to prototype in hours — thrives under pressure", color: "#ec4899" },
  { icon: Users, title: "Team Player", desc: "Collaborative leader across cross-functional teams", color: "#8b5cf6" },
  { icon: Heart, title: "Impact-Driven", desc: "Builds solutions that solve real-world problems", color: "#f97316" },
];

const experiences = [
  {
    icon: GraduationCap,
    title: "CCBP 4.0 — NxtWave",
    description: "Kickstarted my journey with full-stack development, DSA, and industry-ready skills.",
    tags: ["Feb 2023", "Full Stack", "DSA"],
    color: "#22d3ee",
  },
  {
    icon: Code,
    title: "TinkerHub DCS CUSAT — Useless Projects",
    description: "Celebrated creativity and collaboration at TinkerHub's fun community event.",
    tags: ["Nov 2024", "Community", "Fun Builds"],
    color: "#f97316",
  },
  {
    icon: Briefcase,
    title: "MERN Internship — Maitexa Technologies",
    description: "Built full-stack apps with the MERN stack during an on-site internship in Kozhikode.",
    tags: ["May–Jun 2025", "Kozhikode", "MERN Stack"],
    color: "#10b981",
  },
  {
    icon: Lightbulb,
    title: "Starlet 4.0 — 1st Prize 🥇",
    description: "Won 1st place building the Accessibility Finder at Mind Empowered's hackathon.",
    tags: ["During Internship", "1st Place", "Mind Empowered"],
    color: "#fbbf24",
  },
  {
    icon: Rocket,
    title: "KoTech — Special Mention 🌟",
    description: "Received Special Mention for Sahachaari — an AI-powered traffic management tool.",
    tags: ["KoTech", "Special Mention", "Sahachaari"],
    color: "#06b6d4",
  },
  {
    icon: Rocket,
    title: "Code Revolt — 2nd Prize 🥈",
    description: "Secured 2nd place at Dhruv 2025 with ResQWay under intense time pressure.",
    tags: ["Dhruv 2025", "2nd Place", "AI/ML"],
    color: "#8b5cf6",
  },
  {
    icon: Rocket,
    title: "Aventron — Special Mention 🌟",
    description: "Built Knightlee — a safe navigation app with AI risk scoring and SOS support.",
    tags: ["Dec 6, 2025", "Knightlee", "Special Mention"],
    color: "#14b8a6",
  },
  {
    icon: Trophy,
    title: "PEC Hacks — MLH Hackathon",
    description: "Competed at PEC Hacks in Chennai — an MLH hackathon with innovators across India.",
    tags: ["Dec 27, 2025", "MLH", "Chennai"],
    color: "#ec4899",
  },
  {
    icon: Star,
    title: "Building the Future",
    description: "4+ projects, 2 wins, 2 special mentions — every challenge pushes me further.",
    tags: ["ResQWay", "DPoll", "Serial Builder"],
    color: "#fbbf24",
  },
];

const AnimatedNumber = ({ value, inView }: { value: string; inView: boolean }) => {
  const numMatch = value.match(/(\d+)/);
  const [count, setCount] = useState(0);
  const target = numMatch ? parseInt(numMatch[1]) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    if (!inView || !numMatch) return;
    let start = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  if (!numMatch) return <span>{value}</span>;
  return <span>{count}{suffix}</span>;
};

const HackathonsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hackathons" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="floating-orb w-80 h-80 -top-20 -left-20" style={{ background: "rgba(251, 191, 36, 0.05)" }} />
      <div className="floating-orb w-60 h-60 bottom-10 right-10" style={{ background: "rgba(139, 92, 246, 0.04)" }} />

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
            transition={{ duration: 0.5, type: "spring" }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: "hsl(var(--violet))" }}
              animate={inView ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            Achievements
          </motion.span>
          <h2 className="section-title mb-4">
            Built to <span className="gradient-text-aurora">deliver</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Real results from real challenges — here's what I've accomplished so far.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.85, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.05, boxShadow: `0 20px 40px -15px ${stat.color}30`, transition: { duration: 0.25 } }}
              className="glass-card p-6 text-center group"
            >
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${stat.color}15` }}
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon size={20} style={{ color: stat.color }} />
              </motion.div>
              <div className="text-3xl font-heading font-bold text-foreground mb-1">
                <AnimatedNumber value={stat.number} inView={inView} />
              </div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.3 + 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
              className="glass-card p-5 flex items-start gap-4 group hover:border-violet/20 transition-all duration-500"
            >
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${s.color}15` }}
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <s.icon size={18} style={{ color: s.color }} />
              </motion.div>
              <div>
                <h4 className="font-heading text-sm font-bold text-foreground mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div id="journey"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="font-heading text-xl mb-10 text-center text-foreground">
            My <span className="gradient-text">Story</span>
          </h3>

          <div className="relative">
            {/* Animated timeline line */}
            <motion.div
              className="absolute top-0 left-8 md:left-1/2 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(236,72,153,0.4), rgba(251,191,36,0.4))" }}
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: "blur(10px)" }}
                  animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                    <motion.div
                      className="glass-card p-6 group hover:border-violet/20 transition-all duration-500"
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                        boxShadow: `0 15px 30px -10px ${exp.color}20`,
                        transition: { duration: 0.25 },
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <motion.div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${exp.color}15` }}
                          whileHover={{ rotate: 15, scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <exp.icon size={18} style={{ color: exp.color }} />
                        </motion.div>
                        <h4 className="font-heading text-lg text-foreground">{exp.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.tags.map((tag, ti) => (
                          <motion.span
                            key={tag}
                            className="tag-pill text-[10px]"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.8 + 0.15 * i + ti * 0.05, type: "spring", stiffness: 300 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative z-10 w-10 h-10 rounded-full bg-card border-2 flex items-center justify-center flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-lg"
                    style={{ borderColor: `${exp.color}60`, boxShadow: `0 0 20px ${exp.color}20` }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + 0.15 * i, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.4, boxShadow: `0 0 35px ${exp.color}50`, transition: { duration: 0.2 } }}
                  >
                    <span className="text-sm font-mono">{i + 1}</span>
                  </motion.div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonsSection;
