import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import PixzeriaLogo from "@/components/pixzeria-logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu immediately
    setIsOpen(false);
    
    // Wait longer for mobile menu to close and viewport to stabilize
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get viewport dimensions to adjust for mobile portrait mode
        const viewportHeight = window.innerHeight;
        const isPortraitMobile = viewportHeight > window.innerWidth && window.innerWidth < 768;
        
        // Adjust header offset based on device orientation
        const headerOffset = isPortraitMobile ? 120 : 90;
        
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - headerOffset;
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  const navigation = [
    { name: "Leistungen", id: "leistungen" },
    { name: "Preise", id: "preise" },
    { name: "Beispiele", id: "beispiele" },
    { name: "Über uns", id: "ueber-uns" },
    { name: "Kontakt", id: "kontakt" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <PixzeriaLogo size="lg" showText={false} />
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-pizza-red transition-colors cursor-pointer text-gray-700 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('website-check')}
              className="bg-pizza-red text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all transform hover:scale-105"
            >
              🔍 Webseiten-Check
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-pizza-red">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left hover:text-pizza-red transition-colors py-2 cursor-pointer block w-full text-gray-700 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  onClick={() => handleNavClick('website-check')}
                  className="bg-pizza-red hover:bg-red-700 mt-4"
                >
                  🔍 Webseiten-Check
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
