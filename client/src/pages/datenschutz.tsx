import { ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-black transition-colors" style={{ color: '#5F6368' }}>
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black mb-2" style={{ color: '#111', letterSpacing: '-0.03em' }}>Datenschutzerklärung</h1>
        <p className="mb-12" style={{ color: '#5F6368' }}>Pixzeria · Münir Gencer · Stand: Juni 2026</p>

        <div className="flex flex-col gap-8">

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>1. Verantwortlicher</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#333' }}>
              <p className="font-semibold">Pixzeria</p>
              <p>Inhaber: Münir Gencer</p>
              <p>Bachweg 22, 45731 Waltrop</p>
              <a href="mailto:info@pixzeria.de" className="hover:underline mt-1 block" style={{ color: '#E6007E' }}>
                info@pixzeria.de
              </a>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>2. Allgemeines zur Datenverarbeitung</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Diese Website verwendet <strong style={{ color: '#111' }}>keine Tracking-, Analyse- oder Marketing-Cookies</strong>. Es werden keine Nutzungsprofile erstellt, kein Google Analytics oder vergleichbare Dienste eingesetzt. Die einzigen technisch notwendigen Daten sind jene, die Ihr Browser automatisch beim Aufruf einer Website überträgt (Server-Logs).
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>3. Hosting & Server-Logfiles</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              <p>Diese Website wird bei <strong style={{ color: '#111' }}>Replit</strong> gehostet. Beim Aufruf der Website werden automatisch Informationen in Server-Log-Dateien gespeichert:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse (anonymisiert)</li>
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
              </ul>
              <p className="mt-3">Diese Daten sind nicht einer bestimmten Person zuzuordnen und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Betrieb und Sicherheit).</p>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>4. Kontaktaufnahme per WhatsApp oder E-Mail</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              Wenn Sie uns per WhatsApp oder E-Mail kontaktieren, werden Ihre übermittelten Daten (Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert. Eine Weitergabe an Dritte erfolgt nicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f (berechtigtes Interesse). WhatsApp-Nachrichten werden über Meta Platforms übertragen; es gelten die{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#E6007E' }}>Datenschutzbestimmungen von WhatsApp</a>.
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>5. Kontaktformular (FormSubmit)</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              Anfragen über das Kontaktformular werden über den Dienst <strong style={{ color: '#111' }}>FormSubmit.co</strong> verarbeitet und per E-Mail an uns weitergeleitet. FormSubmit speichert Formulardaten auf eigenen Servern. Es gelten die{" "}
              <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#E6007E' }}>Datenschutzbestimmungen von FormSubmit</a>. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>6. Google Fonts</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              Diese Website verwendet Schriftarten von <strong style={{ color: '#111' }}>Google Fonts</strong>. Dabei wird beim Laden der Seite eine Verbindung zu Googles Servern hergestellt, wodurch Ihre IP-Adresse an Google übertragen werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#E6007E' }}>Google Datenschutzerklärung</a>.
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>7. Cookies</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              Diese Website verwendet <strong style={{ color: '#111' }}>keine Tracking- oder Marketing-Cookies</strong>. Technisch notwendige Session-Cookies können durch die Hosting-Infrastruktur gesetzt werden; diese enthalten keine personenbezogenen Daten und werden beim Schließen des Browsers gelöscht. Ein Cookie-Banner ist daher nicht erforderlich.
            </p>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>8. Ihre Rechte (DSGVO)</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">Anfragen richten Sie bitte an: <a href="mailto:info@pixzeria.de" className="hover:underline" style={{ color: '#E6007E' }}>info@pixzeria.de</a></p>
              <p className="mt-3">Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#E6007E' }}>www.ldi.nrw.de</a>.</p>
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
