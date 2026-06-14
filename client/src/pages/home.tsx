import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Pricing from "@/components/pricing";
import WebsiteCheck from "@/components/website-check";
import ContactCTA from "@/components/contact-cta";
import TrustBar from "@/components/trust-bar";
import About from "@/components/about";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData type="ProfessionalService" />
      <PromoBanner />
      <Header />
      <main id="main">
        {/* 1. Hero – white */}
        <Hero />
        {/* 2. So funktioniert es – light gray */}
        <Services />
        {/* 3. Ausgewählte Projekte – white */}
        <CaseStudies />
        {/* 4. Preis – light gray */}
        <Pricing />
        {/* 5. Optionale Extras – white */}
        <WebsiteCheck />
        {/* 6. Service & Pflege – white */}
        <ContactCTA />
        {/* 7. Konfigurator – white */}
        <TrustBar />
        {/* 8. Über Pixzeria – light gray */}
        <About />
        {/* 9. FAQ – white */}
        <FAQ />
        {/* Footer contains the single dark CTA section */}
      </main>
      <Footer />
    </div>
  );
}
