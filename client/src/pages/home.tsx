import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import WebsiteCheck from "@/components/website-check";
import CaseStudies from "@/components/case-studies";
import About from "@/components/about";
import ContactCTA from "@/components/contact-cta";
import TrustBar from "@/components/trust-bar";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData type="ProfessionalService" />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <CaseStudies />
        <Pricing />
        <WebsiteCheck />
        <ContactCTA />
        <TrustBar />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
