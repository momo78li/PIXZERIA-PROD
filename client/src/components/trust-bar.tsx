import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const EXTRAS = [
  { id: "seite", name: "Zusätzliche Seite", price: 150, desc: "Jede weitere Seite über 5 hinaus" },
  { id: "galerie", name: "Projekt- & Bildergalerie", price: 250, desc: "Erweitertes Galerie-System mit Kategorien" },
  { id: "sprache", name: "Mehrsprachigkeit", price: 300, desc: "Website in 2 Sprachen (z.B. DE + EN)" },
  { id: "seo", name: "SEO-Textpaket", price: 300, desc: "Professionelle SEO-Texte für alle Seiten" },
  { id: "express", name: "Express-Lieferung", price: 300, desc: "Fertigstellung in 3–5 Werktagen statt ab 1 Woche" },
];

const BASE = 999;

export default function TrustBar() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [pflege, setPflege] = useState(false);

  const toggle = (id: string) => setSelected((s) => ({ ...s, [id]: !s[id] }));

  const total = BASE + EXTRAS.filter((e) => selected[e.id]).reduce((sum, e) => sum + e.price, 0);
  const selectedExtras = EXTRAS.filter((e) => selected[e.id]);

  const buildWhatsApp = () => {
    let msg = `Hallo, ich möchte eine Website bei Pixzeria bestellen.\n\n✅ Basis-Website: 999 €`;
    if (selectedExtras.length) {
      msg += `\n\nExtras:\n${selectedExtras.map((e) => `• ${e.name}: +${e.price} €`).join("\n")}`;
    }
    if (pflege) msg += `\n• Service & Pflege: +49 €/Monat`;
    msg += `\n\nGesamtpreis (einmalig): ${total} €`;
    if (pflege) msg += `\nzzgl. 49 €/Monat für Service & Pflege`;
    msg += `\n\nBitte meldet euch bei mir.`;
    return `https://wa.me/4915901234567?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="konfigurator" className="section-padding" style={{ background: '#111' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#aaa', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            Konfigurator
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
            Stell deine Website zusammen.
          </h2>
          <p className="text-lg" style={{ color: '#888' }}>
            Wähle deine Extras – der Preis aktualisiert sich live.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Base price */}
          <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold text-lg">Basis-Website</div>
                <div className="text-sm mt-0.5" style={{ color: '#888' }}>Alle Grundfeatures inklusive – bis zu 5 Seiten</div>
              </div>
              <div className="text-right">
                <div className="text-white font-black text-2xl">999 €</div>
                <div className="text-xs" style={{ color: '#888' }}>einmalig</div>
              </div>
            </div>
          </div>

          {/* Extras */}
          <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ color: '#E6007E' }}>
              Optionale Extras
            </div>
            <div className="flex flex-col gap-3">
              {EXTRAS.map((extra) => (
                <label
                  key={extra.id}
                  className="flex items-center justify-between gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-150"
                  style={{
                    background: selected[extra.id] ? 'rgba(230, 0, 126, 0.12)' : 'rgba(255,255,255,0.04)',
                    border: `1.5px solid ${selected[extra.id] ? '#E6007E' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={!!selected[extra.id]}
                      onChange={() => toggle(extra.id)}
                      className="w-5 h-5 cursor-pointer"
                      style={{ accentColor: '#E6007E' }}
                    />
                    <div>
                      <div className="text-white font-medium text-sm">{extra.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#888' }}>{extra.desc}</div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 font-bold text-sm" style={{ color: selected[extra.id] ? '#E6007E' : '#666' }}>
                    +{extra.price} €
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Service & Pflege */}
          <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ color: '#E6007E' }}>
              Service & Pflege
            </div>
            <label
              className="flex items-center justify-between gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-150"
              style={{
                background: pflege ? 'rgba(230, 0, 126, 0.12)' : 'rgba(255,255,255,0.04)',
                border: `1.5px solid ${pflege ? '#E6007E' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={pflege}
                  onChange={() => setPflege(!pflege)}
                  className="w-5 h-5 cursor-pointer"
                  style={{ accentColor: '#E6007E' }}
                />
                <div>
                  <div className="text-white font-medium text-sm">Service & Pflege hinzufügen</div>
                  <div className="text-xs mt-0.5" style={{ color: '#888' }}>Textänderungen, Bildaustausch, technische Pflege, WhatsApp-Support</div>
                </div>
              </div>
              <div className="flex-shrink-0 font-bold text-sm" style={{ color: pflege ? '#E6007E' : '#666' }}>
                +49 €/Monat
              </div>
            </label>
          </div>

          {/* Total + CTA */}
          <div className="p-6">
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="text-sm mb-1" style={{ color: '#888' }}>Gesamtpreis einmalig</div>
                <div className="text-white font-black" style={{ fontSize: '3rem', lineHeight: 1 }}>{total} €</div>
                {pflege && (
                  <div className="text-sm mt-2 font-medium" style={{ color: '#E6007E' }}>+ 49 €/Monat Pflege</div>
                )}
              </div>
              <div className="text-right text-xs pb-1" style={{ color: '#555' }}>
                Gemäß § 19 UStG<br />keine Umsatzsteuer
              </div>
            </div>
            <a
              href={buildWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink w-full justify-center text-base py-4"
            >
              <MessageCircle size={18} />
              Jetzt per WhatsApp bestellen
              <ArrowRight size={16} />
            </a>
            <p className="text-center text-xs mt-4" style={{ color: '#555' }}>
              Deine Auswahl wird als Nachricht vorgefüllt – kein Formular, kein Warten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
