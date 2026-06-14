import { ArrowRight, MessageCircle } from "lucide-react";
import PizzaIcon from "./pizza-icon";

const BrowserMockup = () => (
  <div className="browser-mockup w-full">
    <div className="browser-bar">
      <div className="browser-dots">
        <div className="browser-dot" style={{ background: '#FF5F57' }} />
        <div className="browser-dot" style={{ background: '#FEBC2E' }} />
        <div className="browser-dot" style={{ background: '#28C840' }} />
      </div>
      <div className="browser-url">www.meine-firma.de</div>
    </div>
    <div style={{ background: '#fff', overflow: 'hidden' }}>
      <div style={{ background: '#111', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontWeight: 800, fontSize: '14px', letterSpacing: '-0.02em' }}>
          MEISTER<span style={{ color: '#E6007E' }}>BAU</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          {['Leistungen', 'Referenzen', 'Kontakt'].map(t => (
            <div key={t} style={{ color: '#999', fontSize: '10px' }}>{t}</div>
          ))}
        </div>
        <div style={{ background: '#E6007E', color: '#fff', padding: '5px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 600 }}>Anfragen</div>
      </div>
      <div style={{ padding: '24px 20px 20px', background: 'linear-gradient(160deg, #F8F8F8 0%, #fff 100%)' }}>
        <div style={{ fontSize: '10px', color: '#E6007E', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ihr verlässlicher Partner</div>
        <div style={{ fontSize: '19px', fontWeight: 900, color: '#111', lineHeight: 1.2, marginBottom: '10px' }}>
          Qualität, die<br />überzeugt.
        </div>
        <div style={{ fontSize: '10px', color: '#666', marginBottom: '14px', lineHeight: 1.6 }}>
          Professionelle Arbeit zu fairen Preisen – pünktlich und zuverlässig.
        </div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
          <div style={{ background: '#111', color: '#fff', padding: '7px 14px', borderRadius: '20px', fontSize: '10px', fontWeight: 600 }}>Jetzt anfragen</div>
          <div style={{ border: '1.5px solid #ddd', padding: '7px 14px', borderRadius: '20px', fontSize: '10px', color: '#555' }}>Referenzen</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          {[
            { emoji: '⭐', title: 'Qualität', text: 'Geprüfte Materialien' },
            { emoji: '⚡', title: 'Schnell', text: 'Termingerecht' },
            { emoji: '✓', title: 'Fair', text: 'Klare Preise' },
          ].map(c => (
            <div key={c.title} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '13px', marginBottom: '3px' }}>{c.emoji}</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#111', marginBottom: '2px' }}>{c.title}</div>
              <div style={{ fontSize: '9px', color: '#999' }}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, color: '#111', letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
              Webseiten.<br />Einfach bestellt.
            </h1>

            <p className="text-lg mb-10" style={{ color: '#5F6368', lineHeight: 1.75 }}>
              Professionelle Unternehmenswebseiten zum Festpreis.<br />
              Einfach auswählen, bestellen und online gehen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("konfigurator")}
                className="btn-pink text-base py-4 px-8"
              >
                Website konfigurieren
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/4915901234567?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Website%20von%20Pixzeria."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base py-4 px-8"
              >
                <MessageCircle size={18} />
                WhatsApp Kontakt
              </a>
            </div>

            {/* Subtle pizza icon accent */}
            <div className="flex items-center gap-3 mt-6">
              <PizzaIcon size={18} />
              <span className="text-sm" style={{ color: '#999' }}>
                So einfach wie eine Pizza bestellen.
              </span>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-10 border-t" style={{ borderColor: '#EFEFEF' }}>
              <div>
                <div className="text-2xl font-black" style={{ color: '#111' }}>999 €</div>
                <div className="text-sm" style={{ color: '#5F6368' }}>Festpreis, alles inkl.</div>
              </div>
              <div style={{ width: 1, height: 36, background: '#E8E8E8' }} />
              <div>
                <div className="text-2xl font-black" style={{ color: '#111' }}>ab 1 Woche</div>
                <div className="text-sm" style={{ color: '#5F6368' }}>Lieferzeit</div>
              </div>
              <div style={{ width: 1, height: 36, background: '#E8E8E8' }} />
              <div>
                <div className="text-2xl font-black" style={{ color: '#111' }}>100%</div>
                <div className="text-sm" style={{ color: '#5F6368' }}>Online-Prozess</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-3xl" style={{ background: '#F3F3F4', transform: 'rotate(-2deg) scale(1.04)', zIndex: 0 }} />
            <div className="relative" style={{ zIndex: 1 }}>
              <BrowserMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
