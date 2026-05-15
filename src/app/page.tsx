import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ExperienceSection from "@/components/home/ExperienceSection";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1326] text-[#dae2fd] antialiased selection:bg-[#adc7ff]/30 selection:text-[#adc7ff]">
      
      {/* Background Glow Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        
        {/* Top Glow */}
        <div className="absolute left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-[#4a8eff]/10 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute right-[5%] top-[25%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-[20%] h-[450px] w-[450px] rounded-full bg-[#adc7ff]/5 blur-[120px]" />
      </div>

      <Navbar />

      <HeroSection />
      
      <SkillsSection />
      
      <FeaturedProjects />
      
      <ExperienceSection />
      
      <ContactCTA />
      
      <Footer />
    </main>
  );
}