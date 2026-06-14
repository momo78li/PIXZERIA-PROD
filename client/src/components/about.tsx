import { ArrowRight } from "lucide-react";
import PizzaIcon from "./pizza-icon";

const values = [
  {
    title: "Klarheit statt Chaos",
    text: "Kein Briefing-Marathon, keine versteckten Kosten, kein Warten auf Angebote. Bei uns weißt du vom ersten Moment an, was du bekommst und was es kostet.",
  },
  {
    title: "Qualität zum Festpreis",
    text: "Professionelles Design und sauberer Code – nicht als Luxus, sondern als Standard. Für jeden Betrieb, egal ob Handwerker, Arzt oder Dienstleister.",
  },
  {
    title: "Digital First",
    text: "Kein Büro, kein Erstgespräch, kein Papierkram. Unser Prozess ist 100% digital – schneller, effizienter und bequemer für beide Seiten.",
  },
  {
    title: "Einfach wie bestellen",
    text: "Eine Website soll so einfach zu bestellen sein wie eine Pizza. Konfigurieren, Inhalte senden, online gehen. Das ist unsere Mission.",
  },
];

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section id="ueber-uns" className="section-padding" style={{ background: '#F7F7F8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#fff', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            Über Pixzeria
          </div>
          <h2 className="heading-lg mb-5">Webseiten, die wirken.<br />Prozesse, die funktionieren.</h2>
          <p className="text-lg" style={{ color: '#5F6368', lineHeight: 1.75 }}>
            Wir glauben, dass jedes Unternehmen eine professionelle Website verdient –
            ohne monatelange Projekte, ohne Agenturchaos und ohne unkalkulierbare Kosten.
          </p>
        </div>

        {/* Mission statement */}
        <div className="card-clean mb-8" style={{ borderLeft: '3px solid #E6007E', borderRadius: '0 16px 16px 0', background: '#fff' }}>
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: '#FFF0F8' }}>
              <PizzaIcon size={20} />
            </div>
            <div>
              <div className="font-black text-lg mb-2" style={{ color: '#111' }}>Unsere Mission</div>
              <p className="text-base" style={{ color: '#333', lineHeight: 1.75 }}>
                Eine Website zu bestellen soll so einfach sein wie eine Pizza zu bestellen.
                Auswählen, was man braucht. Bezahlen. Fertig. Genau das bauen wir mit Pixzeria –
                einen schlanken, digitalen Prozess, der professionelle Ergebnisse liefert,
                ohne den klassischen Agenturfrust.
              </p>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {values.map((v) => (
            <div key={v.title} className="card-clean bg-white">
              <h3 className="font-bold text-base mb-2" style={{ color: '#111' }}>{v.title}</h3>
              <p className="text-sm" style={{ color: '#5F6368', lineHeight: 1.7 }}>{v.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 flex-wrap">
          <button onClick={() => scrollTo("konfigurator")} className="btn-pink">
            Website konfigurieren
            <ArrowRight size={16} />
          </button>
          <span className="text-sm" style={{ color: '#999' }}>
            999 € · Festpreis · § 19 UStG
          </span>
        </div>

      </div>
    </section>
  );
}
