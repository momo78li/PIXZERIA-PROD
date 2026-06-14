import { MessageCircle, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="ueber-uns" className="section-padding" style={{ background: '#F7F7F8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#fff', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            Über Pixzeria
          </div>
          <h2 className="heading-lg mb-4">Wer steckt hinter Pixzeria?</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-clean" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black"
                  style={{ background: '#111', color: '#fff' }}
                >
                  MG
                </div>
                <div>
                  <div className="font-black text-lg" style={{ color: '#111' }}>Münir Gencer</div>
                  <div className="text-sm" style={{ color: '#5F6368' }}>Gründer & Inhaber</div>
                  <div className="text-xs mt-1" style={{ color: '#999' }}>Waltrop, Deutschland</div>
                </div>
                <div
                  className="flex items-center gap-2 text-xs px-3 py-2 rounded-full"
                  style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}
                >
                  <Briefcase size={12} />
                  Business IT & Operations
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-2">
                <blockquote className="text-base leading-relaxed mb-6" style={{ color: '#333' }}>
                  <p className="mb-4">
                    "Ich bin Münir Gencer aus Waltrop. Beruflich leite ich Business IT und Operations
                    bei einem großen Energieunternehmen.
                  </p>
                  <p className="mb-4">
                    Mit Pixzeria habe ich eine einfache Möglichkeit geschaffen, moderne
                    Unternehmenswebseiten ohne Agenturfrust anzubieten.
                  </p>
                  <p className="font-semibold" style={{ color: '#111' }}>
                    Klare Leistungen. Feste Preise. Schnelle Umsetzung."
                  </p>
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "999 €", label: "Festpreis, alles inkl." },
                    { value: "§ 19 UStG", label: "Keine Umsatzsteuer" },
                    { value: "ab 1 Woche", label: "Lieferzeit" },
                    { value: "100%", label: "Digital & online" },
                  ].map(({ value, label }) => (
                    <div key={label} className="p-4 rounded-xl" style={{ background: '#F7F7F8' }}>
                      <div className="font-black text-lg" style={{ color: '#111' }}>{value}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#5F6368' }}>{label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/4915901234567?text=Hallo%20M%C3%BCnir%2C%20ich%20m%C3%B6chte%20mehr%20%C3%BCber%20Pixzeria%20erfahren."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pink text-sm"
                >
                  <MessageCircle size={16} />
                  Direkt Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
