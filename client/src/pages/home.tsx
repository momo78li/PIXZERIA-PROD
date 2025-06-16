import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import WebsiteCheck from "@/components/website-check";
import CaseStudies from "@/components/case-studies";
import About from "@/components/about";
import Blog from "@/components/blog";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <WebsiteCheck />
      <CaseStudies />
      <About />
      <Blog />
      <ContactCTA />
      <Footer />
      <CookieBanner />
    </div>
  );
}
