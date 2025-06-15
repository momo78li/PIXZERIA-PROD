import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pizza-cream to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-pizza-gold/20 px-4 py-2 rounded-full mb-6">
              <span className="text-pizza-orange mr-2">🔥</span>
              <span className="text-sm font-medium">Frisch aus dem digitalen Ofen</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-6">
              <span className="text-pizza-red font-fredoka">Webdesign</span><br />
              so einfach wie<br />
              <span className="text-pizza-orange">Pizza bestellen</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Feste Pakete, transparente Preise, schnelle Lieferung. Ihre moderne, DSGVO-konforme Website für KMU – ohne versteckte Kosten, ohne Komplikationen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('preise')}
                className="bg-pizza-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 pizza-shadow"
              >
                🚀 Jetzt bestellen
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('website-check')}
                className="border-2 border-pizza-red text-pizza-red px-8 py-4 rounded-full font-semibold hover:bg-pizza-red hover:text-white transition-all"
              >
                🔍 Kostenloser Check
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern web design office workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto animate-float" 
            />
            
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-spin-slow">
              <span className="text-pizza-red text-2xl">🍕</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-pizza-gold text-white px-4 py-2 rounded-full font-semibold">
              ⏱️ ≤ 4 Wochen
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-10 opacity-10">
        <span className="text-pizza-red text-8xl transform rotate-12">🍕</span>
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <span className="text-pizza-orange text-6xl">💻</span>
      </div>
    </section>
  );
}
