import { CheckCircle, MessageCircle } from "lucide-react";

const features = [
  "Kleinere Textänderungen inklusive",
  "Bildaustausch auf Anfrage",
  "Technische Pflege & Updates",
  "Support per WhatsApp oder E-Mail",
];

export default function ContactCTA() {
  return (
    <section id="service" className="section-padding bg-px-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: '#fff', color: '#5F6368', border: '1px solid #E8E8E8' }}>
              Service & Pflege
            </div>
            <h2 className="heading-lg mb-4">Nach dem Launch ist vor dem Launch.</h2>
            <p className="text-lg mb-8" style={{ color: '#5F6368', lineHeight: 1.7 }}>
              Für 49 € im Monat kümmern wir uns um deine Website – damit du dich um dein Geschäft kümmern kannst.
            </p>
            <div className="grid gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: '#E6007E', flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: '#333' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ border: '1px solid #E8E8E8', background: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}
            >
              <div style={{ background: '#111', padding: '32px 36px' }}>
                <div className="text-white text-sm font-semibold opacity-60 mb-3 uppercase tracking-widest">Service & Pflege</div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-white">49</span>
                  <div className="pb-1">
                    <div className="text-2xl font-black text-white">€</div>
                    <div className="text-white opacity-50 text-sm">/ Monat</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '32px 36px' }}>
                <p className="text-sm mb-6" style={{ color: '#5F6368' }}>
                  Monatlich kündbar. Keine Mindestlaufzeit. Du entscheidest.
                </p>
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
        </div>
      </div>
    </section>
  );
}
