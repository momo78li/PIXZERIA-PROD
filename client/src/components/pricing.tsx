import { CheckCircle, ArrowRight } from "lucide-react";

const included = [
  "Bis zu 5 Seiten",
  "Modernes, individuelles Design",
  "Mobil optimiert (Smartphone & Tablet)",
  "Kontaktformular",
  "WhatsApp-Button",
  "Google Maps Integration",
  "Bildergalerie",
  "SEO-Basis (Titel, Beschreibungen, sitemap)",
  "Impressum & Datenschutz integriert",
  "Lieferung ab 1 Woche",
];

export default function Pricing() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <section id="preis" className="section-padding bg-px-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#fff', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            Produkt & Preis
          </div>
          <h2 className="heading-lg mb-4">Eine Website. Ein Preis.</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5F6368' }}>
            Kein Paketdschungel. Kein Verhandeln. Klar definiert, fair bepreist.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: '2px solid #E6007E', boxShadow: '0 20px 60px rgba(230, 0, 126, 0.12)' }}
          >
            {/* Top */}
            <div style={{ background: '#111', padding: '40px 48px 32px' }}>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="text-white text-sm font-semibold mb-2 opacity-60 uppercase tracking-widest">Pixzeria Website</div>
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-black text-white">999</span>
                    <div className="pb-2">
                      <div className="text-3xl font-black text-white">€</div>
                    </div>
                  </div>
                  <div className="text-white opacity-50 text-sm mt-1">einmalig</div>
                </div>
                <div
                  className="px-5 py-3 rounded-2xl text-sm font-bold"
                  style={{ background: '#E6007E', color: '#fff' }}
                >
                  Festpreis
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div style={{ background: '#fff', padding: '40px 48px' }}>
              <p className="font-semibold mb-6" style={{ color: '#111' }}>Das ist enthalten:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} style={{ color: '#E6007E', flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm" style={{ color: '#333' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-4 mb-8 text-sm"
                style={{ background: '#F7F7F8', color: '#5F6368', lineHeight: 1.6 }}
              >
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
              </div>

              <button
                onClick={() => scrollTo("konfigurator")}
                className="btn-pink w-full text-base py-4 justify-center"
              >
                Jetzt konfigurieren & bestellen
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
