import { useState } from "react";
import { Button } from "@/components/ui/button";
import PixzeriaLogo from "@/components/pixzeria-logo";
import { Flame, Rocket, Search, Clock } from "lucide-react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-pizza-cream to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-pizza-gold/20 px-4 py-2 rounded-full mb-6">
              <Flame className="w-4 h-4 text-pizza-orange mr-2" />
              <span className="text-sm font-medium">Frisch aus dem digitalen Ofen</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-6">
              <span className="text-pizza-red font-fredoka">Webdesign</span><br />
              so einfach wie<br />
              <span className="text-pizza-orange">Pizza bestellen</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ihre professionelle Website – komplett digital und ohne Termine. 
              Moderne Technik, faire Preise, schnelle Lieferung. Alles online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('preise')}
                className="bg-pizza-red text-white px-8 py-4 rounded-full font-semibold hover:bg-pizza-red-dark transition-all transform hover:scale-105 pizza-shadow"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Jetzt bestellen
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('website-check')}
                className="border-2 border-pizza-red text-pizza-red px-8 py-4 rounded-full font-semibold hover:bg-pizza-red hover:text-white transition-all"
              >
                <Search className="w-4 h-4 mr-2" />
                Kostenloser Check
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-[4/3]">
            <img 
              src={imgError ? "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80" : "/assets/hero.jpg"}
              alt="Modernes Webdesign Arbeitsplatz" 
              className="rounded-2xl shadow-2xl w-full h-full object-cover animate-float"
              width={800}
              height={600}
              loading="eager"
              onError={() => {
                console.warn("Hero image failed to load, using fallback");
                setImgError(true);
              }}
            />
            
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-spin-slow">
              <PixzeriaLogo size="sm" showText={false} />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-pizza-gold text-white px-4 py-2 rounded-full font-semibold flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Ab 1 Woche
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-10 opacity-20 transform rotate-12">
        <PixzeriaLogo size="xl" showText={false} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <span className="text-pizza-orange text-6xl">💻</span>
      </div>
    </section>
  );
}
