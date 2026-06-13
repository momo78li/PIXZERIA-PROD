import { MessageCircle } from "lucide-react";

export default function About() {
  return (
    <section id="ueber-uns" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}>
              Über Pixzeria
            </div>
            <h2 className="heading-lg mb-6">
              Webseiten so einfach<br />wie ein digitales Produkt.
            </h2>
            <p className="text-base mb-4" style={{ color: '#5F6368', lineHeight: 1.8 }}>
              Pixzeria wurde gegründet, um Unternehmenswebseiten so einfach bestellbar zu machen wie ein digitales Produkt. Klar definiert, transparent bepreist und schnell geliefert.
            </p>
            <p className="text-base mb-8" style={{ color: '#5F6368', lineHeight: 1.8 }}>
              Kein Agentur-Overhead, keine langen Briefings, keine versteckten Kosten. Nur eine saubere Website für einen fairen Festpreis – 100% online.
            </p>
            <a
              href="https://wa.me/4915901234567?text=Hallo%2C%20ich%20m%C3%B6chte%20mehr%20%C3%BCber%20Pixzeria%20erfahren."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink text-sm"
            >
              <MessageCircle size={16} />
              Kontakt aufnehmen
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className="card-clean col-span-2"
              style={{ background: '#F7F7F8' }}
            >
              <div className="text-3xl font-black mb-1" style={{ color: '#E6007E' }}>Münir Gencer</div>
              <div className="font-semibold mb-3" style={{ color: '#111' }}>Inhaber & Gründer</div>
              <div className="text-sm" style={{ color: '#5F6368', lineHeight: 1.6 }}>
                Pixzeria · Einzelunternehmen<br />
                45731 Waltrop, Deutschland
              </div>
            </div>
            {[
              { value: "999 €", label: "Klarer Festpreis" },
              { value: "ab 1 Woche", label: "Lieferzeit" },
              { value: "100%", label: "Online-Prozess" },
              { value: "§ 19 UStG", label: "Keine MwSt." },
            ].map(({ value, label }) => (
              <div key={label} className="card-clean text-center">
                <div className="text-2xl font-black mb-1" style={{ color: '#111' }}>{value}</div>
                <div className="text-sm" style={{ color: '#5F6368' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
