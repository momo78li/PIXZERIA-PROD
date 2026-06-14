import bkImg from "/assets/ref-bk-finanzkonzepte.jpg";
import waermepurImg from "/assets/ref-waermepur.png";
import mtmImg from "/assets/ref-mtm-legacy.png";

const realProjects = [
  {
    name: "BK Finanzkonzepte",
    url: "https://bk-finanzkonzepte.com",
    tag: "Finanzberatung",
    desc: "Moderne Unternehmenswebsite für einen unabhängigen Finanzberater. Mehrsprachig, mit Testimonials und klarer Angebotsstruktur.",
    img: bkImg,
  },
  {
    name: "Wärme Pur",
    url: "https://www.wärmepur.com",
    tag: "Wärmepumpen · NRW",
    desc: "Moderne Website für einen Wärmepumpen-Spezialisten aus NRW. Klare Leistungsdarstellung, Spar-Rechner und starke Conversion-Elemente.",
    img: waermepurImg,
  },
  {
    name: "MTM Legacy",
    url: "https://145c769a-7154-4cca-ba3f-cb80c31976b6-00-1p6qiciijjf4a.worf.replit.dev",
    tag: "Premium Management · Düsseldorf",
    desc: "Exklusiver Webauftritt für ein Premium-Management-Unternehmen aus Düsseldorf. Elegantes Dark-Design mit Fokus auf Diskretion und Vertrauen.",
    img: mtmImg,
  },
];

export default function CaseStudies() {
  return (
    <section id="design-examples" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            Referenzen
          </div>
          <h2 className="heading-lg mb-4">Ausgewählte Projekte.</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#5F6368' }}>
            Echte Websites – für echte Unternehmen.
          </p>
        </div>

        {/* First project full-width */}
        <div className="card-clean mb-6 overflow-hidden p-0">
          <div className="grid md:grid-cols-2">
            <div className="overflow-hidden" style={{ maxHeight: 340 }}>
              <img
                src={realProjects[0].img}
                alt={realProjects[0].name}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: 240 }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 self-start"
                style={{ background: '#FFF0F8', color: '#E6007E' }}>
                ✓ Echtes Projekt · {realProjects[0].tag}
              </span>
              <h3 className="text-2xl font-black mb-3" style={{ color: '#111' }}>{realProjects[0].name}</h3>
              <p className="text-sm mb-6" style={{ color: '#5F6368', lineHeight: 1.7 }}>{realProjects[0].desc}</p>
              <a
                href={realProjects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                style={{ color: '#E6007E' }}
              >
                Website ansehen →
              </a>
            </div>
          </div>
        </div>

        {/* Second + third side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {realProjects.slice(1).map((p) => (
            <div key={p.name} className="card-clean overflow-hidden p-0 flex flex-col">
              <div className="overflow-hidden" style={{ height: 220 }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover object-top"
                />
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
      </div>
    </section>
  );
}
