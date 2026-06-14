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
              <p className="mt-2">Körnerstraße 18</p>
              <p>45731 Waltrop</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Kontakt</h2>
            <div className="text-sm leading-relaxed flex flex-col gap-2" style={{ color: '#333' }}>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: '#E6007E' }} />
                <a href="mailto:info@pixzeria.de" className="hover:underline" style={{ color: '#111' }}>
                  info@pixzeria.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: '#E6007E', fontSize: 13 }}>💬</span>
                <a href="https://wa.me/491734394343" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#111' }}>
                  WhatsApp: +49 173 4394343
                </a>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Umsatzsteuer</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
              Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und ausgewiesen.
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#333' }}>
              <p>Münir Gencer</p>
              <p>Körnerstraße 18</p>
              <p>45731 Waltrop</p>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Haftungsausschluss</h2>
            <div className="flex flex-col gap-5 text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#111' }}>Haftung für Inhalte</p>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#111' }}>Haftung für Links</p>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#111' }}>Urheberrecht</p>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              </div>
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
            <p className="text-sm mt-3" style={{ color: '#5F6368' }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Unsere Leistungen richten sich ausschließlich an Unternehmer (B2B).
            </p>
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
