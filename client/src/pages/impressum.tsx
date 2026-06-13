import { ArrowLeft, Mail } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-black transition-colors" style={{ color: '#5F6368' }}>
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black mb-2" style={{ color: '#111', letterSpacing: '-0.03em' }}>Impressum</h1>
        <p className="mb-12" style={{ color: '#5F6368' }}>Angaben gemäß § 5 TMG</p>

        <div className="flex flex-col gap-8">
          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Anbieter</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#333' }}>
              <p className="font-semibold text-base mb-1">Pixzeria</p>
              <p>Inhaber: Münir Gencer</p>
              <p>Einzelunternehmen</p>
              <p className="mt-2">45731 Waltrop, Deutschland</p>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Kontakt</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#333' }}>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: '#E6007E' }} />
                <a href="mailto:muenir.gencer@gmail.com" className="hover:underline" style={{ color: '#111' }}>
                  muenir.gencer@gmail.com
                </a>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Umsatzsteuer</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
              Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Verantwortlich für den Inhalt</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#333' }}>
              <p>Münir Gencer</p>
              <p>45731 Waltrop, Deutschland</p>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>EU-Streitschlichtung</h2>
            <p className="text-sm leading-relaxed mb-2" style={{ color: '#333' }}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color: '#E6007E' }}
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <p className="text-sm mt-2" style={{ color: '#5F6368' }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Haftungsausschluss</h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              <p><strong style={{ color: '#111' }}>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
              <p><strong style={{ color: '#111' }}>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.</p>
              <p><strong style={{ color: '#111' }}>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht.</p>
            </div>
          </section>

          <p className="text-center text-sm" style={{ color: '#999' }}>
            Zuletzt aktualisiert: Juni 2026
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
