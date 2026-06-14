import bkImg from "/assets/ref-bk-finanzkonzepte.jpg";
import waermepurImg from "/assets/ref-waermepur.png";

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

        {/* Two projects side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {realProjects.map((p) => (
            <div key={p.name} className="card-clean overflow-hidden p-0 flex flex-col">
              <div className="overflow-hidden" style={{ height: 260 }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
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
