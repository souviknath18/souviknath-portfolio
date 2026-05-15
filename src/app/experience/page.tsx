import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import KeyContributionSection from "@/components/experience/KeyContributionSection";

export default function ExperiencePage() {
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

      {/* Navbar */}
      <Navbar />

      <ExperienceHero />

      <ExperienceTimeline />

      <KeyContributionSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}