import { CheckCircle, Clock, Smartphone, MapPin, Mail, Image, Search, FileText, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Auswählen",
    description: "Wähle dein Paket und die gewünschten Extras direkt online aus.",
  },
  {
    number: "02",
    title: "Bestellen",
    description: "Kontaktiere uns per WhatsApp oder E-Mail – kein Telefonat, kein Termin.",
  },
  {
    number: "03",
    title: "Online gehen",
    description: "Wir liefern deine fertige Website. Du prüfst, wir verfeinern, fertig.",
  },
];

const includes = [
  { icon: FileText, text: "Bis zu 5 Seiten" },
  { icon: Smartphone, text: "Mobil optimiert" },
  { icon: Mail, text: "Kontaktformular" },
  { icon: MessageCircle, text: "WhatsApp-Button" },
  { icon: MapPin, text: "Google Maps" },
  { icon: Image, text: "Bildergalerie" },
  { icon: Search, text: "SEO-Basis" },
  { icon: FileText, text: "Impressum & Datenschutz" },
  { icon: Clock, text: "Lieferung ab 1 Woche" },
];

export default function Services() {
  return (
    <section id="how-it-works" className="section-padding bg-px-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#fff', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            So funktioniert's
          </div>
          <h2 className="heading-lg mb-4">Einfacher geht's nicht.</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5F6368' }}>
            Kein Erstgespräch, kein Briefing-Marathon. Du wählst aus, wir bauen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step) => (
            <div key={step.number} className="card-clean text-center">
              <div
                className="text-5xl font-black mb-4 block"
                style={{ color: '#E6007E', opacity: 0.15, lineHeight: 1 }}
              >
                {step.number}
              </div>
              <h3 className="heading-md mb-3">{step.title}</h3>
              <p style={{ color: '#5F6368', lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-clean">
            <div className="text-center mb-8">
              <h3 className="heading-md mb-2">Alles inklusive für 999 €</h3>
              <p style={{ color: '#5F6368' }}>Das ist in jeder Website enthalten:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {includes.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: '#E6007E', flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: '#111' }}>{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t text-center text-sm" style={{ borderColor: '#E8E8E8', color: '#5F6368' }}>
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
