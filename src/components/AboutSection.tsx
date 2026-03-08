import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Rocket, Lightbulb, ArrowUpRight, Briefcase } from "lucide-react";

const traits = [
  { icon: GraduationCap, label: "BCA Student", desc: "SreenarayanaGuru Open University — pursuing Computer Science since 2025", color: "#8b5cf6" },
  { icon: Rocket, label: "Hackathon Champion", desc: "1st Prize at Starlet 4.0 & 2nd Prize at Code Revolt — Dhruv 2025", color: "#fbbf24" },
  { icon: Lightbulb, label: "Problem Solver", desc: "Real-world challenges → Digital solutions with React, Django & more", color: "#ec4899" },
];

const techStack = ["React", "Node.js", "Express.js", "MongoDB", "Django", "PostgreSQL", "Python", "JavaScript", "HTML/CSS", "Figma", "Git", "Postman", "Jira"];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="floating-orb w-80 h-80 -top-20 -right-20" style={{ background: "rgba(139, 92, 246, 0.08)" }} />
      <div className="floating-orb w-60 h-60 -bottom-10 -left-10" style={{ background: "rgba(236, 72, 153, 0.06)" }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <motion.span
              className="section-label"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ background: "#8b5cf6" }}
                animate={inView ? { scale: [1, 1.5, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              />
              About Me
            </motion.span>

            <h2 className="section-title mb-8">
              {"Crafting the ".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="gradient-text-aurora inline-block"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              >
                digital future
              </motion.span>
              ,
              <br className="hidden md:block" />
              {"one line of code at a time.".split(" ").map((word, i) => (
                <motion.span
                  key={`b-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              {[
                <>
                  I'm <span className="text-foreground font-semibold">Abhinandana T U</span> — a BCA student from
                  Thrissur, Kerala, passionate about creating visually appealing and user-friendly web interfaces.
                </>,
                <>
                  I recently completed a <span className="text-violet font-medium">MERN stack internship</span> at
                  Maitexa Technologies in Kozhikode, where I built full-stack web applications using MongoDB, Express.js,
                  React.js, and Node.js in an Agile environment.
                </>,
                <>
                  From emergency response platforms to decentralized voting systems, I explore how technology can
                  create real change. I believe great software is where{" "}
                  <span className="text-violet font-medium">elegant design</span> meets{" "}
                  <span className="text-orange font-medium">purposeful engineering</span>.
                </>,
              ].map((content, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                  animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.7, delay: 0.6 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  {content}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-10 overflow-hidden border-t border-b border-border/30 py-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            >
              <div className="marquee-track">
                {[...Array(2)].map((_, j) => (
                  <div key={j} className="flex gap-8 items-center">
                    {techStack.map((s) => (
                      <span key={`${j}-${s}`} className="text-sm font-mono text-muted-foreground whitespace-nowrap flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(139, 92, 246, 0.5)" }} />
                        {s}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, x: 50, y: 30, scale: 0.85, filter: "blur(10px)" }}
                animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 0.3 + 0.18 * i, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="glass-card-hover p-5 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${trait.color}15` }}
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <trait.icon size={22} style={{ color: trait.color }} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-foreground">{trait.label}</h3>
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowUpRight size={14} />
                      </motion.div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{trait.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
