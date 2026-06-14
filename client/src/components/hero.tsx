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
      <div className="browser-url">www.deine-firma.de</div>
    </div>
    <div style={{ background: '#fff', overflow: 'hidden' }}>
      {/* Nav */}
      <div style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', padding: '11px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F0F0F0' }}>
        <div style={{ color: '#111', fontWeight: 900, fontSize: '13px', letterSpacing: '0.04em' }}>
          STUDIO<span style={{ color: '#E6007E' }}>•</span>
        </div>
        <div style={{ display: 'flex', gap: '14px' }}>
          {['Leistungen', 'Über uns', 'Kontakt'].map(t => (
            <div key={t} style={{ color: '#888', fontSize: '9px', fontWeight: 500 }}>{t}</div>
          ))}
        </div>
        <div style={{ background: '#111', color: '#fff', padding: '5px 12px', borderRadius: '20px', fontSize: '9px', fontWeight: 600 }}>Termin buchen</div>
      </div>

      {/* Hero with photographic gradient */}
      <div style={{ position: 'relative', padding: '26px 20px 24px', background: 'linear-gradient(135deg, #1A1A1A 0%, #2D1020 55%, #4A0E32 100%)', overflow: 'hidden' }}>
        {/* glow accents */}
        <div style={{ position: 'absolute', top: -30, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,0,126,0.45) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -10, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,0,126,0.2) 0%, transparent 70%)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* rating pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', padding: '4px 10px', borderRadius: '20px', marginBottom: '12px' }}>
            <span style={{ color: '#FFC83D', fontSize: '9px', letterSpacing: '1px' }}>★★★★★</span>
            <span style={{ color: '#fff', fontSize: '8px', fontWeight: 600 }}>5,0 · Top bewertet</span>
          </div>

          <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', lineHeight: 1.12, marginBottom: '9px', letterSpacing: '-0.02em' }}>
            Dein Auftritt,<br />
            der <span style={{ color: '#E6007E' }}>begeistert.</span>
          </div>
          <div style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', lineHeight: 1.6, maxWidth: '85%' }}>
            Modern, schnell und für deine Kunden gemacht. Heute bestellt, in Tagen online.
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ background: '#E6007E', color: '#fff', padding: '8px 16px', borderRadius: '22px', fontSize: '9.5px', fontWeight: 700, boxShadow: '0 6px 18px rgba(230,0,126,0.4)' }}>Jetzt starten →</div>
            <div style={{ color: 'rgba(255,255,255,0.85)', padding: '8px 4px', fontSize: '9.5px', fontWeight: 500 }}>Portfolio ansehen</div>
          </div>
        </div>
      </div>

      {/* Feature cards row */}
      <div style={{ padding: '16px 20px 20px', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          {[
            { icon: '⚡', title: 'Blitzschnell', text: 'In Tagen online' },
            { icon: '◆', title: 'Premium', text: 'Maßgeschneidert' },
            { icon: '✓', title: 'Festpreis', text: 'Keine Überraschung' },
          ].map(c => (
            <div key={c.title} style={{ background: '#FAFAFA', border: '1px solid #F0F0F0', borderRadius: '10px', padding: '11px 9px' }}>
              <div style={{ fontSize: '12px', marginBottom: '5px', color: '#E6007E' }}>{c.icon}</div>
              <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#111', marginBottom: '2px' }}>{c.title}</div>
              <div style={{ fontSize: '8px', color: '#999' }}>{c.text}</div>
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
