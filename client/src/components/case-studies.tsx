const examples = [
  {
    label: "Praxis",
    name: "Praxis Müller",
    desc: "Übersichtliche Website für Arztpraxis mit Online-Terminbuchung-Button, Team-Vorstellung und Öffnungszeiten.",
    color: "#E6007E",
    bg: "#FFF0F8",
    mockItems: ["Über uns", "Team", "Leistungen", "Termin"],
    accent: "#E6007E",
  },
  {
    label: "Gastronomie",
    name: "Trattoria da Luca",
    desc: "Restaurant-Website mit Speisekarte, Galerie, Tischreservierung und Google Maps-Integration.",
    color: "#111",
    bg: "#F7F7F8",
    mockItems: ["Speisekarte", "Galerie", "Reservierung", "Kontakt"],
    accent: "#111",
  },
  {
    label: "Handwerk",
    name: "Müller Bau GmbH",
    desc: "Professioneller Auftritt für Handwerksbetrieb mit Referenzbildern, Leistungsübersicht und Kontaktformular.",
    color: "#E6007E",
    bg: "#FFF0F8",
    mockItems: ["Leistungen", "Referenzen", "Über uns", "Kontakt"],
    accent: "#E6007E",
  },
  {
    label: "Dienstleister",
    name: "Schneider Consulting",
    desc: "Klare Website für Berater und Dienstleister mit Portfolio, Testimonials und direktem Kontaktweg.",
    color: "#111",
    bg: "#F7F7F8",
    mockItems: ["Services", "Portfolio", "Über mich", "Kontakt"],
    accent: "#111",
  },
];

const MiniMockup = ({ example }: { example: typeof examples[0] }) => (
  <div className="browser-mockup">
    <div className="browser-bar">
      <div className="browser-dots">
        <div className="browser-dot" style={{ background: '#FF5F57' }} />
        <div className="browser-dot" style={{ background: '#FEBC2E' }} />
        <div className="browser-dot" style={{ background: '#28C840' }} />
      </div>
      <div className="browser-url">{example.name.toLowerCase().replace(/\s/g, '-')}.de</div>
    </div>
    <div style={{ background: example.bg, padding: '16px', minHeight: '160px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ fontWeight: 800, fontSize: '13px', color: '#111' }}>{example.name}</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {example.mockItems.map(item => (
            <div key={item} style={{ fontSize: '9px', color: '#777' }}>{item}</div>
          ))}
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: '8px', padding: '12px', marginBottom: '10px', border: '1px solid #eee' }}>
        <div style={{ fontSize: '16px', fontWeight: 900, color: '#111', marginBottom: '4px', lineHeight: 1.2 }}>
          Willkommen bei<br />{example.name}
        </div>
        <div style={{ fontSize: '10px', color: '#888', marginBottom: '10px' }}>
          Professionell. Zuverlässig. Modern.
        </div>
        <div style={{ display: 'inline-block', background: example.accent, color: '#fff', padding: '5px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 600 }}>
          Jetzt Kontakt aufnehmen
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
        {[0, 1].map(i => (
          <div key={i} style={{ background: '#fff', borderRadius: '6px', padding: '8px', border: '1px solid #eee' }}>
            <div style={{ height: '30px', background: '#f0f0f0', borderRadius: '4px', marginBottom: '6px' }} />
            <div style={{ height: '8px', background: '#e8e8e8', borderRadius: '4px', width: '80%' }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function CaseStudies() {
  return (
    <section id="design-examples" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            Designbeispiele
          </div>
          <h2 className="heading-lg mb-4">So könntest du aussehen.</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5F6368' }}>
            Fiktive Designbeispiele für verschiedene Branchen – modern, klar und professionell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((ex) => (
            <div key={ex.name} className="card-clean overflow-hidden p-0">
              <div className="p-6 pb-0">
                <MiniMockup example={ex} />
              </div>
              <div className="p-6">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: ex.color === '#E6007E' ? '#FFF0F8' : '#F7F7F8', color: ex.color }}
                >
                  {ex.label}
                </span>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#111' }}>{ex.name}</h3>
                <p className="text-sm" style={{ color: '#5F6368', lineHeight: 1.6 }}>{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm" style={{ color: '#5F6368' }}>
            * Alle gezeigten Websites sind fiktive Designbeispiele – keine echten Kundenprojekte.
          </p>
        </div>
      </div>
    </section>
  );
}
