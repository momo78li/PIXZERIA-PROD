import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu immediately
    setIsOpen(false);
    
    // Force scroll after a short delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - 90;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const navigation = [
    { name: "Leistungen", id: "leistungen" },
    { name: "Preise", id: "preise" },
    { name: "Beispiele", id: "beispiele" },
    { name: "Über uns", id: "ueber-uns" },
    { name: "Blog", id: "blog" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-pizza rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🍕</span>
            </div>
            <span className="text-2xl font-fredoka text-pizza-red">PIXZERIA</span>
          </div>
          
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
