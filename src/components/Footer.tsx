import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative z-10 py-12 px-6 border-t border-border/15 text-center"
    >
      {/* <p className="text-sm text-muted-foreground font-mono flex items-center justify-center gap-1.5">
        Crafted with <Heart size={12} className="text-pink fill-pink animate-pulse" /> by{" "}
        <span className="gradient-text-aurora font-heading">Abhinandana T U</span> — 2026
      </p> */}
    </motion.footer>
  );
};

export default Footer;
