import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send, Sparkles, Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="floating-orb w-80 h-80 bottom-0 right-0" style={{ background: "rgba(139, 92, 246, 0.05)" }} />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9 }}
        >
          <span className="section-label">
            <Sparkles size={12} />
            Contact
          </span>
          <h2 className="section-title mb-5">
            Let's create{" "}
            <span className="gradient-text-aurora">something</span>
            <br />
            amazing together.
          </h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-lg mx-auto">
            Whether it's a collaboration, hackathon team, or just a hello — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-10"
        >
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground font-mono"
          >
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-violet" />
              Thrissur, Kerala
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-violet" />
              +91 7907828790
            </span>
          </motion.div>

          <motion.a
            href="mailto:abhinandanatu@gmail.com"
            className="btn-primary text-base px-10 py-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 50px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Say Hello
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Send size={14} className="opacity-60" />
            </motion.span>
          </motion.a>

          <div className="flex items-center justify-center gap-5 mt-8">
            {[
              { icon: Github, href: "https://github.com/abhinandu790", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abhinandana-tu", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/abhiooo_", label: "Instagram" },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.2, rotate: 5, boxShadow: "var(--shadow-glow-sm)", borderColor: "rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <link.icon size={22} />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm text-muted-foreground mt-8 font-mono"
          >
            ✨ Open to internships, collaborations & hackathon teams
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
