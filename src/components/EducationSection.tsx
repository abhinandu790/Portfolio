import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="floating-orb w-64 h-64 -bottom-10 -right-10" style={{ background: "hsl(var(--cyan) / 0.06)" }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--cyan))" }} />
            Education
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text-aurora">journey</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.93, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card-hover p-8 md:p-10 relative group"
        >
          {/* Accent line */}
          <div
            className="absolute top-0 left-8 right-8 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--cyan) / 0.5), transparent)" }}
          />

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Icon */}
            <div className="flex-shrink-0">
              <motion.div
                animate={inView ? { rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: "hsl(var(--cyan) / 0.1)" }}
              >
                <GraduationCap size={28} style={{ color: "hsl(var(--cyan))" }} />
              </motion.div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Sree Narayana Guru Open University, Kollam
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Distance Education Programme
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} style={{ color: "hsl(var(--cyan))" }} />
                  2025 – 2028 (3 Years)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: "hsl(var(--pink))" }} />
                  Thrissur, Kerala
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen size={14} style={{ color: "hsl(var(--violet))" }} />
                  Currently Pursuing
                </span>
              </div>

              <div
                className="rounded-xl p-4 border"
                style={{
                  background: "hsl(var(--cyan) / 0.04)",
                  borderColor: "hsl(var(--cyan) / 0.12)",
                }}
              >
                <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "hsl(var(--cyan))" }}>
                  Attending Classes At
                </p>
                <p className="text-sm text-foreground">
                  Paramekkavu College of Arts and Science, Thrissur
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Computer Science", "Distance Education", "SGOU Kollam", "Ongoing"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08, type: "spring", stiffness: 300 }}
                    className="tag-pill text-[10px]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
