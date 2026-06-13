import { ArrowRight, MessageCircle } from "lucide-react";

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
    <div style={{ background: '#fff', minHeight: '320px', overflow: 'hidden' }}>
      <div style={{ background: '#111', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontWeight: 800, fontSize: '16px', letterSpacing: '-0.03em' }}>
          MEISTER<span style={{ color: '#E6007E' }}>BAU</span>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Leistungen', 'Referenzen', 'Kontakt'].map(t => (
            <div key={t} style={{ color: '#aaa', fontSize: '11px' }}>{t}</div>
          ))}
        </div>
        <div style={{ background: '#E6007E', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>Anfragen</div>
      </div>
      <div style={{ background: 'linear-gradient(135deg, #F7F7F8 0%, #fff 100%)', padding: '28px 24px 20px' }}>
        <div style={{ fontSize: '11px', color: '#E6007E', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ihr verlässlicher Partner</div>
        <div style={{ fontSize: '20px', fontWeight: 900, color: '#111', lineHeight: 1.2, marginBottom: '10px' }}>
          Professionelle Arbeit.<br />Faire Preise.
        </div>
        <div style={{ fontSize: '11px', color: '#666', marginBottom: '16px', lineHeight: 1.6 }}>
          Wir erledigen alles für Sie – zuverlässig, schnell und zu fairen Konditionen.
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <div style={{ background: '#111', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>Jetzt anfragen</div>
          <div style={{ border: '1.5px solid #ccc', padding: '8px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, color: '#555' }}>Mehr erfahren</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          {[
            { title: 'Qualität', text: 'Geprüfte Materialien', icon: '⭐' },
            { title: 'Schnell', text: 'Termingerecht', icon: '⚡' },
            { title: 'Fair', text: 'Transparente Preise', icon: '✓' },
          ].map(card => (
            <div key={card.title} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '10px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '14px', marginBottom: '4px' }}>{card.icon}</div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#111', marginBottom: '3px' }}>{card.title}</div>
              <div style={{ fontSize: '10px', color: '#888', lineHeight: 1.4 }}>{card.text}</div>
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
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}
            >
              <span style={{ width: 8, height: 8, background: '#E6007E', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
              Für Unternehmen, Selbstständige & lokale Anbieter
            </div>

            <h1 className="heading-xl mb-6">
              Webseiten.<br />
              <span style={{ color: '#E6007E' }}>Einfach bestellt.</span>
            </h1>

            <p className="text-lg mb-10" style={{ color: '#5F6368', lineHeight: 1.7 }}>
              Professionelle Unternehmenswebseiten zum Festpreis.
              Einfach auswählen, bestellen und online gehen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("konfigurator")} className="btn-pink text-base py-4 px-8">
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

            <div className="flex items-center gap-8 mt-10 pt-10 border-t" style={{ borderColor: '#E8E8E8' }}>
              <div>
                <div className="text-2xl font-black" style={{ color: '#111' }}>999 €</div>
                <div className="text-sm" style={{ color: '#5F6368' }}>Festpreis</div>
              </div>
              <div style={{ width: 1, height: 40, background: '#E8E8E8' }} />
              <div>
                <div className="text-2xl font-black" style={{ color: '#111' }}>ab 1 Woche</div>
                <div className="text-sm" style={{ color: '#5F6368' }}>Lieferzeit</div>
              </div>
              <div style={{ width: 1, height: 40, background: '#E8E8E8' }} />
              <div>
                <div className="text-2xl font-black" style={{ color: '#111' }}>100%</div>
                <div className="text-sm" style={{ color: '#5F6368' }}>Digital & online</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: 'linear-gradient(135deg, #F7F7F8 0%, #efefef 100%)', transform: 'rotate(-2deg) scale(1.03)', zIndex: 0 }}
            />
            <div className="relative" style={{ zIndex: 1 }}>
              <BrowserMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
