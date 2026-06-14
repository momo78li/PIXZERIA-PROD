import { CheckCircle, MessageCircle } from "lucide-react";

const features = [
  "Kleinere Textänderungen inklusive",
  "Bildaustausch auf Anfrage",
  "Technische Pflege & Updates",
  "Support per WhatsApp oder E-Mail",
  "Monatlich kündbar, keine Mindestlaufzeit",
];

export default function ContactCTA() {
  return (
    <section id="service" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}>
              Service & Pflege
            </div>
            <h2 className="heading-lg mb-4">Damit deine Website immer aktuell bleibt.</h2>
            <p className="text-base mb-8" style={{ color: '#5F6368', lineHeight: 1.8 }}>
              Für 49 € im Monat kümmern wir uns um deine Website –
              damit du dich auf dein Geschäft konzentrieren kannst.
            </p>
            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: '#E6007E', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: '#333' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-clean" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <div className="text-center mb-6">
              <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#5F6368' }}>
                Service & Pflege
              </div>
              <div className="flex items-end justify-center gap-1">
                <span className="text-6xl font-black" style={{ color: '#111' }}>49</span>
                <div className="pb-2 text-left">
                  <div className="text-2xl font-black" style={{ color: '#111' }}>€</div>
                  <div className="text-sm" style={{ color: '#5F6368' }}>/ Monat</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4 mb-6 text-sm text-center" style={{ background: '#F7F7F8', color: '#5F6368' }}>
              Monatlich kündbar. Keine Mindestlaufzeit.
            </div>
            <a
              href="https://wa.me/4915901234567?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20den%20Service%20%26%20Pflege%20Plan%20von%20Pixzeria."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink w-full justify-center text-sm py-3"
            >
              <MessageCircle size={16} />
              Per WhatsApp anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
