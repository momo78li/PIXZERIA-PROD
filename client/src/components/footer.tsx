import { Link } from "wouter";
import { MessageCircle, ArrowRight, Mail } from "lucide-react";
import PizzaIcon from "./pizza-icon";

const PixzeriaWordmark = () => (
  <span className="font-black tracking-tight text-2xl text-white" style={{ letterSpacing: '-0.03em' }}>
    PI<span style={{ color: '#E6007E' }}>X</span>ZERIA
  </span>
);

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <footer style={{ background: '#111' }}>
      {/* ── FINAL CTA – only dark section on the page ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(230,0,126,0.15)', border: '1px solid rgba(230,0,126,0.25)' }}
            >
              <PizzaIcon size={32} variant="pink" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Bereit für deine<br />neue Website?
          </h2>
          <p className="text-lg mb-10" style={{ color: '#888', lineHeight: 1.7 }}>
            Professionelle Unternehmenswebseiten zum Festpreis.<br />
            Einfach bestellt. Schnell geliefert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("konfigurator")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all"
              style={{ background: '#E6007E', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#c9006e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#E6007E')}
            >
              Website konfigurieren
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/491734394343?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Website%20von%20Pixzeria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 border-white/20 text-white transition-all hover:bg-white/10"
            >
              <MessageCircle size={18} />
              WhatsApp Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer links ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <PixzeriaWordmark />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#666' }}>
              Professionelle Unternehmenswebseiten zum Festpreis.<br />
              100% digital. Transparent bepreist. Schnell geliefert.
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              <div className="text-sm" style={{ color: '#555' }}>Münir Gencer · Einzelunternehmen</div>
              <div className="text-sm" style={{ color: '#555' }}>45731 Waltrop, Deutschland</div>
              <a
                href="mailto:info@pixzeria.de"
                className="text-sm flex items-center gap-2 transition-colors hover:text-white mt-1"
                style={{ color: '#666' }}
              >
                <Mail size={13} />
                info@pixzeria.de
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xs mb-5 uppercase tracking-widest" style={{ color: '#E6007E' }}>Navigation</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "So funktioniert's", id: "how-it-works" },
                { label: "Referenzen", id: "design-examples" },
                { label: "Preis", id: "preis" },
                { label: "Konfigurator", id: "konfigurator" },
                { label: "Über uns", id: "ueber-uns" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#666' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xs mb-5 uppercase tracking-widest" style={{ color: '#E6007E' }}>Rechtliches</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/impressum" className="text-sm transition-colors hover:text-white" style={{ color: '#666' }}>Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-sm transition-colors hover:text-white" style={{ color: '#666' }}>Datenschutz</Link></li>
              <li><Link href="/agb" className="text-sm transition-colors hover:text-white" style={{ color: '#666' }}>AGB</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <div className="text-sm" style={{ color: '#444' }}>
            © 2026 PIXZERIA · Münir Gencer · Alle Rechte vorbehalten.
          </div>
          <div className="text-xs" style={{ color: '#3a3a3a' }}>
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
          </div>
        </div>
      </div>
    </footer>
  );
}
