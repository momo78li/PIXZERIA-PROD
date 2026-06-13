import { Plus } from "lucide-react";

const extras = [
  { name: "Zusätzliche Seite", price: 150, desc: "Jede weitere Seite über 5 hinaus" },
  { name: "Projekt- & Bildergalerie", price: 250, desc: "Erweitertes Galerie-System mit Kategorien" },
  { name: "Mehrsprachigkeit", price: 300, desc: "Website in 2 Sprachen (z.B. DE + EN)" },
  { name: "SEO-Textpaket", price: 300, desc: "Professionelle SEO-Texte für alle Seiten" },
  { name: "Express-Lieferung", price: 300, desc: "Fertigstellung in 3–5 Werktagen statt 1–2 Wochen" },
];

export default function WebsiteCheck() {
  return (
    <section id="extras" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            Optionale Zutaten
          </div>
          <h2 className="heading-lg mb-4">Extras nach Bedarf.</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5F6368' }}>
            Passe deine Website mit optionalen Ergänzungen individuell an.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-4">
          {extras.map((extra) => (
            <div
              key={extra.name}
              className="flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all duration-200"
              style={{ borderColor: '#E8E8E8', background: '#fff' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FFF0F8' }}
                >
                  <Plus size={18} style={{ color: '#E6007E' }} />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: '#111' }}>{extra.name}</div>
                  <div className="text-sm mt-0.5" style={{ color: '#5F6368' }}>{extra.desc}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-black text-xl" style={{ color: '#111' }}>+{extra.price} €</div>
                <div className="text-xs" style={{ color: '#5F6368' }}>einmalig</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
