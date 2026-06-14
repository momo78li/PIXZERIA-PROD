import { MousePointerClick, FolderOpen, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Website konfigurieren",
    description: "Wähle online dein Paket und die gewünschten Extras. Kein Telefonat, kein Erstgespräch.",
  },
  {
    number: "02",
    icon: FolderOpen,
    title: "Inhalte senden",
    description: "Du sendest uns Logo, Texte und Bilder – per WhatsApp oder E-Mail. Einfach und direkt.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Website wird erstellt",
    description: "Wir bauen deine Website professionell und schnell. Du gibst Feedback, wir verfeinern.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Online gehen",
    description: "Deine Website geht live. Ab diesem Moment bist du professionell im Web vertreten.",
  },
];

export default function Services() {
  return (
    <section id="how-it-works" className="section-padding" style={{ background: '#F7F7F8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#fff', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            So funktioniert es
          </div>
          <h2 className="heading-lg mb-4">Von der Idee zur Website.<br />In wenigen Tagen.</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#5F6368' }}>
            Kein Erstgespräch, kein Briefing-Marathon, kein Warten.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-full w-6 h-px z-10"
                    style={{ background: 'linear-gradient(to right, #E6007E, #E8E8E8)', transform: 'translateX(-50%)' }}
                  />
                )}
                <div className="card-clean h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FFF0F8' }}>
                      <Icon size={18} style={{ color: '#E6007E' }} />
                    </div>
                    <span className="text-4xl font-black" style={{ color: '#111', opacity: 0.06, lineHeight: 1 }}>{step.number}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#111' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
