import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { OverviewSection } from "./components/overview-section";
import { ProductsSection } from "./components/products-section";
import { ArchitectureSection } from "./components/architecture-section";
import { MetricsSection } from "./components/metrics-section";
import { TeamSection } from "./components/team-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="dark min-h-screen bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] text-white">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        
        <section id="solutions">
          <OverviewSection />
          <ProductsSection />
        </section>
        
        <section id="architecture">
          <ArchitectureSection />
        </section>
        
        <MetricsSection />
        
        <section id="team">
          <TeamSection />
        </section>
        
        <section id="research">
          <BlogSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}