import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

function PromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wm2026-banner-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("wm2026-banner-dismissed", "1");
    setVisible(false);
  };

  const scrollToKonfigurator = (e: React.MouseEvent) => {
    e.preventDefault();
    dismiss();
    setTimeout(() => {
      const el = document.getElementById("konfigurator");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }, 50);
  };

  if (!visible) return null;

  return (
    <div
      className="relative text-white text-sm font-medium"
      style={{ background: "linear-gradient(90deg, #111111 0%, #1c0011 50%, #111111 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-2 text-center">
        <span className="text-base leading-none" role="img" aria-label="Fußball">⚽</span>
        <span className="text-white/90">
          <span className="font-bold text-[#E6007E]">WM 2026 Rabattaktion</span>
          <span className="text-white/50 mx-1.5">·</span>
          Jetzt Website bestellen &amp; <span className="font-bold text-white">15 % sparen</span>
          <span className="text-white/50 ml-1.5 text-xs hidden sm:inline">— nur für begrenzte Zeit</span>
        </span>
        <a
          href="#konfigurator"
          onClick={scrollToKonfigurator}
          className="hidden sm:inline-flex items-center gap-1 bg-[#E6007E] hover:bg-[#cc006f] text-white text-xs font-bold px-3 py-1 rounded-full transition-colors whitespace-nowrap ml-1"
        >
          Jetzt sichern →
        </a>
        <button
          onClick={dismiss}
          aria-label="Banner schließen"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-1"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

const PixzeriaWordmark = ({ dark = false }: { dark?: boolean }) => (
  <span
    className="font-black tracking-tight text-2xl"
    style={{ color: dark ? '#fff' : '#111111', letterSpacing: '-0.03em' }}
  >
    PI<span style={{ color: '#E6007E' }}>X</span>ZERIA
  </span>
);

const navItems = [
  { label: "So funktioniert's", id: "how-it-works" },
  { label: "Beispiele", id: "design-examples" },
  { label: "Preis", id: "preis" },
  { label: "Konfigurator", id: "konfigurator" },
  { label: "Über uns", id: "ueber-uns" },
  { label: "FAQ", id: "faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <PromoBanner />
      <div
        className={`transition-all duration-200 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-white"
        }`}
      >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="hover:opacity-75 transition-opacity">
            <PixzeriaWordmark />
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("konfigurator")}
              className="btn-pink text-sm py-2 px-5"
            >
              Website konfigurieren
              <ArrowRight size={15} />
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-3 text-base font-medium text-gray-700 hover:text-black border-b border-gray-50 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("konfigurator")}
              className="btn-pink mt-3 text-sm justify-center"
            >
              Website konfigurieren
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
