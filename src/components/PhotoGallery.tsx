import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import hackathonDhruv from "@/assets/hackathon-dhruv.jpg";
import hackathonStarlet from "@/assets/hackathon-starlet.png";
import hackathonMindEmpowered from "@/assets/hackathon-mind-empowered.jpg";
import hackathonTinkerhub from "@/assets/hackathon-tinkerhub.jpg";
import hackathonPechacks from "@/assets/hackathon-pechacks.jpg";

const photos = [
  { src: hackathonDhruv, caption: "2nd Prize — Code Revolt, Dhruv 2025 🏆", event: "Dhruv 2025", badge: "🥈 2nd Place" },
  { src: hackathonMindEmpowered, caption: "1st Prize — Starlet 4.0, Mind Empowered 🥇", event: "Starlet 4.0", badge: "🥇 1st Place" },
  { src: hackathonStarlet, caption: "Team Mind Empowered at Starlet 4.0 ✨", event: "Mind Empowered", badge: "✨ Team" },
  { src: hackathonTinkerhub, caption: "TinkerHub DCS CUSAT — Useless Projects 🚀", event: "TinkerHub", badge: "🚀 Community" },
  { src: hackathonPechacks, caption: "PEC Hacks — MLH Hackathon, Chennai 💻", event: "PEC Hacks", badge: "💻 MLH" },
];

const PhotoGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navigatePhoto = (dir: number) => {
    if (selectedPhoto === null) return;
    setSelectedPhoto((selectedPhoto + dir + photos.length) % photos.length);
  };

  return (
    <>
      <section className="section-padding relative overflow-hidden" ref={ref}>
        <div className="floating-orb w-72 h-72 -top-16 right-0" style={{ background: "hsl(var(--pink) / 0.06)" }} />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <span className="section-label">
              <Camera size={12} />
              Moments
            </span>
            <h2 className="section-title">
              Hackathon <span className="gradient-text-aurora">memories</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
              Snapshots from the trenches — late nights, big wins, and unforgettable teams.
            </p>
          </motion.div>

          {/* Masonry Pinterest-style layout */}
          <div className="columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
            {photos.map((photo, i) => {
              const isHovered = hoveredIndex === i;
              // Varied heights for true masonry feel
              const heights = ["h-72", "h-96", "h-80", "h-[26rem]", "h-72"];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 70, scale: 0.85, filter: "blur(10px)" }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="break-inside-avoid"
                >
                  <motion.div
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedPhoto(i)}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative cursor-pointer group rounded-2xl overflow-hidden"
                  >
                    <div className={`${heights[i]} w-full overflow-hidden rounded-2xl`}>
                      <motion.img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.08 : 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20 opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + 0.12 * i }}
                        className="absolute top-3 left-3"
                      >
                        <span
                          className="text-xs font-semibold font-mono px-3 py-1.5 rounded-full backdrop-blur-xl border"
                          style={{
                            background: "hsl(var(--violet) / 0.3)",
                            borderColor: "hsl(var(--violet) / 0.5)",
                            color: "hsl(var(--foreground))",
                          }}
                        >
                          {photo.badge}
                        </span>
                      </motion.div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <motion.div
                          animate={{ y: isHovered ? 0 : 6, opacity: isHovered ? 1 : 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-xs font-mono text-foreground/70 mb-1 uppercase tracking-wider font-semibold">
                            {photo.event}
                          </p>
                          <p className="text-sm text-foreground font-bold leading-snug drop-shadow-md">
                            {photo.caption}
                          </p>
                        </motion.div>
                      </div>

                      {/* Hover ring effect */}
                      <div
                        className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ borderColor: "hsl(var(--violet) / 0.4)" }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] backdrop-blur-xl flex items-center justify-center p-6"
            style={{ background: "hsl(var(--background) / 0.92)" }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-violet transition-colors z-10"
            >
              <X size={18} />
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto(-1); }}
              className="absolute left-4 md:left-8 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-violet transition-colors z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto(1); }}
              className="absolute right-4 md:right-8 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-violet transition-colors z-10"
            >
              <ChevronRight size={18} />
            </button>

            <motion.div
              key={selectedPhoto}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].caption}
                className="max-w-3xl w-full max-h-[75vh] object-contain rounded-2xl"
              />
              <p className="text-sm text-muted-foreground font-mono text-center">
                {photos[selectedPhoto].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
