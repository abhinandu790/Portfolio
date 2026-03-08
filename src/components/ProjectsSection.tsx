import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Navigation, Brain, Vote, ArrowUpRight, MapPin, Leaf, ChevronDown } from "lucide-react";

interface Project {
  icon: typeof Shield;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  color: string;
  number: string;
  date: string;
  team?: string;
  link?: string;
}

const projects: Project[] = [
  {
    icon: Vote,
    title: "DPoll",
    tagline: "Decentralized Digital Voting Platform",
    description: "Secure voting platform with 2FA voter registration (Aadhaar + OTP via Twilio), blockchain-backed immutable vote storage, anonymous polling with double-vote prevention, real-time result histograms, admin dashboard for election management, and comprehensive audit logs for full transparency.",
    tech: ["Django", "PostgreSQL", "Blockchain", "Twilio", "REST API"],
    color: "#fbbf24",
    number: "01",
    date: "Jan – May 2025",
    link: "https://github.com/abhinandu790/DPOLL-agile-project-",
  },
  {
    icon: Brain,
    title: "Accessibility Finder",
    tagline: "Inclusive navigation platform",
    description: "Web app to find and review disability-friendly places with visual accessibility meter, wheelchair/parking/restroom/elevator tracking, user reviews with accessibility ratings, photo uploads, Firebase Auth, and real-time updates. Tracks 10+ accessibility features including braille signage, audio assistance, and wide doorways.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Accessibility APIs"],
    color: "#22d3ee",
    number: "02",
    date: "Jul 2025",
    link: "https://github.com/abhinandu790/Starlet_Frontend",
  },
  {
    icon: Navigation,
    title: "Sahachaari",
    tagline: "Smart Traffic Control Assistant",
    description: "AI-powered platform for urban traffic management using YOLOv8 & OpenCV for real-time vehicle detection, emergency route clearance for ambulances, citizen incident reporting (accidents, potholes, waterlogging), public parking viewer, and an admin dashboard with analytics, heatmaps & AI-driven signal recommendations.",
    tech: ["React", "Django", "YOLOv8", "OpenCV", "Leaflet.js", "SQLite", "Python"],
    color: "#8b5cf6",
    number: "03",
    date: "Jul 2025",
    link: "https://github.com/abhinandu790/Kotech",
  },
  {
    icon: Shield,
    title: "ResQWay",
    tagline: "Smart Healthcare & Emergency Response",
    description: "AI-powered web platform connecting citizens, ambulances, hospitals, blood banks & volunteers through a unified dashboard. Features AI-based route optimization with live traffic, hospital auto-allocation by ICU/ER availability, emergency QR codes, organ transport GPS tracking, real-time blood stock management, verified volunteer network, and disaster mode with triage coordination.",
    tech: ["React", "Django", "SQLite", "Google Maps API", "Firebase", "Redis", "MQTT"],
    color: "#ec4899",
    number: "04",
    date: "Oct 2025",
    link: "https://github.com/abhinandu790/ResQWay",
  },
  {
    icon: MapPin,
    title: "Knightlee",
    tagline: "Smart Safety-Aware Navigation Platform",
    description: "Safety-first navigation platform that scores every lane based on lighting, accident history & crowd density. Features safe route analysis with black spot detection, danger zone alerts, community incident reporting, SOS emergency button, live location sharing, nearest safe points finder, and a Women Night Safety Mode that avoids isolated dark lanes.",
    tech: ["React", "Django", "Mapbox GL JS", "SQLite", "JWT", "TailwindCSS"],
    color: "#14b8a6",
    number: "05",
    date: "Dec 2025",
    link: "https://github.com/abhinandu790/Knightlee",
  },
  {
    icon: Leaf,
    title: "EcoSphere X",
    tagline: "Sustainability & Carbon Footprint Tracker",
    description: "A sustainability platform helping individuals track, analyze, and reduce their carbon footprint through everyday activities. Features EcoScan (product carbon scanner via barcode/bill upload), EcoMiles (transportation emission tracker), EcoWatt Insights (home energy monitor), EcoPlate (food delivery impact tracker), EcoCycle Log (waste management tracker), and a gamified EcoScore & Rewards system with leaderboards.",
    tech: ["React Native", "Expo", "Django", "PostgreSQL", "Cloudflare", "REST API"],
    color: "#22c55e",
    number: "06",
    date: "2025",
  },
];

const ProjectAccordionItem = ({ project, index, inView, isOpen, onToggle }: {
  project: Project;
  index: number;
  inView: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="group"
    >
      <motion.div
        className="glass-card overflow-hidden transition-all duration-500"
        style={{
          borderColor: isOpen ? `${project.color}30` : undefined,
          boxShadow: isOpen ? `0 10px 40px -10px ${project.color}15` : undefined,
        }}
        animate={isOpen ? { scale: 1.01 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Clickable header */}
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 p-5 md:p-6 text-left transition-all duration-300 hover:bg-white/[0.02]"
        >
          <motion.span
            className="text-2xl font-heading opacity-15 shrink-0"
            style={{ color: project.color }}
            animate={isOpen ? { opacity: 0.4, scale: 1.15, rotate: -5 } : { opacity: 0.15, scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {project.number}
          </motion.span>
          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${project.color}12` }}
            animate={isOpen ? { rotate: 8, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <project.icon size={18} style={{ color: project.color }} />
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg md:text-xl text-foreground">{project.title}</h3>
            <p className="text-[9px] font-mono uppercase tracking-[0.15em] mt-0.5" style={{ color: project.color }}>
              {project.tagline}
            </p>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground hidden md:block shrink-0">{project.date}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
            className="shrink-0"
          >
            <ChevronDown size={18} className="text-muted-foreground" />
          </motion.div>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                <motion.div
                  className="border-t pt-4 mb-4"
                  style={{ borderColor: `${project.color}15` }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
                <motion.p
                  className="text-sm text-muted-foreground leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {project.description}
                </motion.p>

                {project.team && (
                  <p className="text-[11px] font-mono text-muted-foreground mb-4 opacity-70">👥 {project.team}</p>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {project.tech.map((t, ti) => (
                    <motion.span
                      key={t}
                      className="tag-pill"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + ti * 0.05, type: "spring", stiffness: 300 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-xs font-mono transition-colors"
                      style={{ color: project.color }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      whileHover={{ x: 3, transition: { duration: 0.2 } }}
                    >
                      View on GitHub <ArrowUpRight size={14} />
                    </motion.a>
                  )}
                </div>
                <span className="text-[9px] font-mono text-muted-foreground mt-3 block md:hidden">{project.date}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="floating-orb w-96 h-96 top-1/3 left-1/2 -translate-x-1/2" style={{ background: "rgba(139, 92, 246, 0.04)" }} />

      <div className="max-w-4xl mx-auto">
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
              style={{ background: "#f97316" }}
              animate={inView ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            Projects
          </motion.span>
          <h2 className="section-title mb-4">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            From hackathon prototypes to real-world platforms — each one pushed me further.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {projects.map((project, i) => (
            <ProjectAccordionItem
              key={project.title}
              project={project}
              index={i}
              inView={inView}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
