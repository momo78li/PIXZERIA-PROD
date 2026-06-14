import bkImg from "/assets/ref-bk-finanzkonzepte.jpg";

const WaermepurPlaceholder = () => (
  <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: '#fff', fontWeight: 900, fontSize: '18px', letterSpacing: '-0.02em' }}>
        Wärme<span style={{ color: '#FF6B35' }}>Pur</span>
      </div>
      <div style={{ display: 'flex', gap: '14px' }}>
        {['Leistungen', 'Über uns', 'Kontakt'].map(n => (
          <div key={n} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>{n}</div>
        ))}
      </div>
    </div>
    <div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Ihr Experte für Wärmedämmung
      </div>
      <div style={{ color: '#fff', fontWeight: 900, fontSize: '28px', lineHeight: 1.15, marginBottom: '16px' }}>
        Energie sparen.<br />Kosten senken.
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ background: '#FF6B35', color: '#fff', padding: '8px 18px', borderRadius: '20px', fontSize: '11px', fontWeight: 700 }}>
          Jetzt anfragen
        </div>
        <div style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff', padding: '8px 18px', borderRadius: '20px', fontSize: '11px' }}>
          Referenzen
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
      {['Dämmung', 'Heizung', 'Lüftung'].map(s => (
        <div key={s} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 600 }}>
          {s}
        </div>
      ))}
    </div>
  </div>
);

const realProjects = [
  {
    name: "BK Finanzkonzepte",
    url: "https://bk-finanzkonzepte.com",
    desc: "Moderne Unternehmenswebsite für einen unabhängigen Finanzberater. Mehrsprachig, mit Testimonials und klarer Angebotsstruktur.",
    tag: "Finanzberatung",
    img: bkImg,
    hasImg: true as const,
  },
  {
    name: "Wärme Pur",
    url: "https://www.waermepur.com",
    desc: "Professionelle Website für einen Wärmedämmungs-Spezialisten mit klarer Leistungsübersicht, modernem Design und gezielter Kundenansprache.",
    tag: "Wärmedämmung",
    img: null,
    hasImg: false as const,
  },
];

const concepts = [
  {
    label: "Praxis",
    name: "Praxis Concept",
    desc: "Klares, vertrauenswürdiges Design für eine Arztpraxis mit Online-Termin, Team und Leistungsübersicht.",
    accent: "#E6007E",
    bg: "#FFF0F8",
    nav: ["Über uns", "Team", "Leistungen", "Termin"],
    headline: "Ihre Gesundheit\nin besten Händen.",
  },
  {
    label: "Handwerk",
    name: "Handwerk Concept",
    desc: "Professioneller Auftritt für Handwerksbetrieb mit Referenzfotos, Leistungsübersicht und Kontaktformular.",
    accent: "#111",
    bg: "#F7F7F8",
    nav: ["Leistungen", "Referenzen", "Über uns", "Kontakt"],
    headline: "Qualität,\ndie man sieht.",
  },
];

const MockBrowser = ({ item }: { item: typeof concepts[0] }) => (
  <div className="browser-mockup">
    <div className="browser-bar">
      <div className="browser-dots">
        <div className="browser-dot" style={{ background: '#FF5F57' }} />
        <div className="browser-dot" style={{ background: '#FEBC2E' }} />
        <div className="browser-dot" style={{ background: '#28C840' }} />
      </div>
      <div className="browser-url">{item.name.toLowerCase().replace(/\s/g, '-')}.de</div>
    </div>
    <div style={{ background: item.bg, padding: '16px', minHeight: '160px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ fontWeight: 800, fontSize: '12px', color: '#111' }}>
          {item.name.toUpperCase().split(' ')[0]}<span style={{ color: item.accent }}>{item.name.split(' ').slice(1).join(' ')}</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {item.nav.slice(0, 3).map(n => <div key={n} style={{ fontSize: '8px', color: '#777' }}>{n}</div>)}
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: '8px', padding: '12px', border: '1px solid #eee' }}>
        <div style={{ fontSize: '15px', fontWeight: 900, color: '#111', marginBottom: '6px', whiteSpace: 'pre-line', lineHeight: 1.25 }}>
          {item.headline}
        </div>
        <div style={{ display: 'inline-block', background: item.accent, color: '#fff', padding: '5px 12px', borderRadius: '20px', fontSize: '9px', fontWeight: 600 }}>
          Jetzt anfragen
        </div>
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
            Referenzen & Beispiele
          </div>
          <h2 className="heading-lg mb-4">Ausgewählte Projekte.</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#5F6368' }}>
            Echte Websites und Designkonzepte – klar und professionell.
          </p>
        </div>

        {/* Real projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {realProjects.map((p) => (
            <div key={p.name} className="card-clean overflow-hidden p-0 flex flex-col">
              <div className="overflow-hidden" style={{ maxHeight: 260 }}>
                {p.hasImg && p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: 200 }}
                  />
                ) : (
                  <WaermepurPlaceholder />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start"
                  style={{ background: '#FFF0F8', color: '#E6007E' }}>
                  ✓ Echtes Projekt · {p.tag}
                </span>
                <h3 className="text-xl font-black mb-2" style={{ color: '#111' }}>{p.name}</h3>
                <p className="text-sm mb-4 flex-1" style={{ color: '#5F6368', lineHeight: 1.7 }}>{p.desc}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                  style={{ color: '#E6007E' }}
                >
                  Website ansehen →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Design concepts */}
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((c) => (
            <div key={c.name} className="card-clean overflow-hidden p-0">
              <div className="p-5 pb-0">
                <MockBrowser item={c} />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: '#F7F7F8', color: '#5F6368' }}>
                  Designkonzept – {c.label}
                </span>
                <p className="text-sm" style={{ color: '#5F6368', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#aaa' }}>
          * Designkonzepte sind fiktive Beispiele zur Illustration. Nicht echte Kundenprojekte.
        </p>
      </div>
    </section>
  );
}
