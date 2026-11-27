import ParticleCanvas   from "@/components/ParticleCanvas";
import Navbar           from "@/components/Navbar";
import HeroSection      from "@/components/HeroSection";
import AboutSection     from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import ServicesSection  from "@/components/ServicesSection";
import TeamSection      from "@/components/TeamSection";
import FooterSection    from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-bg-canvas">
      {/* Ambient particle layer — always behind everything */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* ── PHASE 1: Hero section ───────────────────────── */}
      <HeroSection />

      {/* ── PHASE 2: About & Ecosystem sections ─────────── */}
      <AboutSection />
      <EcosystemSection />

      {/* ── PHASE 3: Services & Products showcase ───────── */}
      <ServicesSection />

      {/* ── PHASE 4: Team & Footer sections ─────────────── */}
      <TeamSection />
      <FooterSection />
    </main>
  );
}
