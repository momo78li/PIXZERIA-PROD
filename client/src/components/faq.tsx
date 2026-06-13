import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Was ist im Preis von 999 € enthalten?",
    a: "Alles was du brauchst: bis zu 5 Seiten, modernes Design, mobil optimiert, Kontaktformular, WhatsApp-Button, Google Maps, Bildergalerie, SEO-Basis, Impressum & Datenschutz. Kein versteckter Aufpreis.",
  },
  {
    q: "Wie lange dauert die Lieferung?",
    a: "In der Regel liefern wir deine fertige Website ab 1 Woche nach Bestellung. Mit dem Express-Extra (+ 300 €) sogar in 3–5 Werktagen.",
  },
  {
    q: "Wie läuft der Bestellprozess ab?",
    a: "Du konfigurierst deine Website im Konfigurator, sendest uns deine Auswahl per WhatsApp, wir besprechen alles kurz, du lieferst uns deine Inhalte (Texte, Bilder) und wir bauen deine Website.",
  },
  {
    q: "Was brauche ich, um loszulegen?",
    a: "Am besten dein Logo (falls vorhanden), ein paar Fotos und eine grobe Beschreibung deines Unternehmens. Den Rest besprechen wir per WhatsApp.",
  },
  {
    q: "Was bedeutet Service & Pflege für 49 €/Monat?",
    a: "Wir kümmern uns monatlich um kleinere Textänderungen, Bildaustausch, technische Wartung und stehen dir per WhatsApp oder E-Mail zur Verfügung. Monatlich kündbar, keine Mindestlaufzeit.",
  },
  {
    q: "Muss ich eine Domain oder Hosting selbst kaufen?",
    a: "Domain und Hosting sind nicht im Preis enthalten, aber wir helfen dir dabei und empfehlen passende Anbieter. Die Kosten dafür sind gering (ca. 5–15 €/Monat).",
  },
  {
    q: "Welche Zahlungsmethoden akzeptiert ihr?",
    a: "Wir akzeptieren Banküberweisung. Es wird eine Anzahlung von 50% bei Bestellung fällig, der Rest bei Fertigstellung.",
  },
  {
    q: "Gilt die Umsatzsteuerbefreiung nach § 19 UStG?",
    a: "Ja – als Kleinunternehmer gemäß § 19 UStG erheben wir keine Umsatzsteuer. Der angegebene Preis ist der Endpreis.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}
          >
            FAQ
          </div>
          <h2 className="heading-lg mb-4">Häufige Fragen.</h2>
          <p className="text-lg" style={{ color: '#5F6368' }}>
            Alles was du wissen musst – kurz und klar.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                border: `1.5px solid ${open === i ? '#E6007E' : '#E8E8E8'}`,
                background: '#fff',
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base" style={{ color: '#111' }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: '#E6007E',
                    flexShrink: 0,
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
