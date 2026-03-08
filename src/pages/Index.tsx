import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import AuroraBackground from "@/components/AuroraBackground";
import ParticleCanvas from "@/components/ParticleCanvas";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import PhotoGallery from "@/components/PhotoGallery";
import HackathonsSection from "@/components/HackathonsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative" style={{ overflowX: "hidden" }}>
      {/* Layer 0: Aurora animated background */}
      <AuroraBackground />

      {/* Layer 1: Interactive particle canvas */}
      <ParticleCanvas />

      {/* Custom cursor glow */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <PhotoGallery />
        <HackathonsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
