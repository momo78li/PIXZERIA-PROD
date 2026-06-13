import { Link } from "wouter";
import { MessageCircle, Mail } from "lucide-react";

const PixzeriaWordmark = () => (
  <span className="font-black tracking-tight text-2xl text-white" style={{ letterSpacing: '-0.03em' }}>
    PI<span style={{ color: '#E6007E' }}>X</span>ZERIA
  </span>
);

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <footer style={{ background: '#111', color: '#fff' }}>
      {/* CTA Bar */}
      <div style={{ background: '#E6007E', padding: '40px 24px', textAlign: 'center' }}>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
          Bereit für deine neue Website?
        </h2>
        <p className="text-white mb-6 opacity-80">Einmal konfigurieren. Per WhatsApp bestellen. Fertig.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("konfigurator")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold bg-white transition-all hover:bg-gray-100"
            style={{ color: '#E6007E' }}
          >
            Website konfigurieren
          </button>
          <a
            href="https://wa.me/4915901234567?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Website%20von%20Pixzeria."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white/10"
          >
            <MessageCircle size={16} />
            WhatsApp Kontakt
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <PixzeriaWordmark />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#888' }}>
              Professionelle Unternehmenswebseiten zum Festpreis. 100% digital, transparent bepreist, schnell geliefert.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <div className="text-sm" style={{ color: '#666' }}>Münir Gencer · Einzelunternehmen</div>
              <div className="text-sm" style={{ color: '#666' }}>45731 Waltrop, Deutschland</div>
              <a
                href="mailto:muenir.gencer@gmail.com"
                className="text-sm flex items-center gap-2 hover:text-white transition-colors mt-1"
                style={{ color: '#888' }}
              >
                <Mail size={14} />
                muenir.gencer@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: '#E6007E' }}>Website</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "So funktioniert's", id: "how-it-works" },
                { label: "Designbeispiele", id: "design-examples" },
                { label: "Preis", id: "preis" },
                { label: "Extras", id: "extras" },
                { label: "Konfigurator", id: "konfigurator" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#888' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: '#E6007E' }}>Rechtliches</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/impressum" className="text-sm transition-colors hover:text-white" style={{ color: '#888' }}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm transition-colors hover:text-white" style={{ color: '#888' }}>
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-sm transition-colors hover:text-white" style={{ color: '#888' }}>
                  AGB
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#888' }}
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="text-sm" style={{ color: '#555' }}>
            © 2026 PIXZERIA · Münir Gencer · Alle Rechte vorbehalten.
          </div>
          <div className="text-xs" style={{ color: '#444' }}>
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
          </div>
        </div>
      </div>
    </footer>
  );
}
