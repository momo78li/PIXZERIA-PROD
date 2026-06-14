import { ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";

const sections = [
  {
    title: "§ 1 Geltungsbereich",
    text: 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Pixzeria (Inhaber: Münir Gencer, im Folgenden "Auftragnehmer") und seinen Kunden (im Folgenden "Auftraggeber") über die Erstellung von Websites und damit verbundene Dienstleistungen. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu. Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB.',
  },
  {
    title: "§ 2 Vertragsschluss",
    text: "Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung per E-Mail oder WhatsApp zustande. Angebote sind freibleibend und unverbindlich. Mündliche Nebenabreden bestehen nicht und bedürfen zu ihrer Wirksamkeit der Textform.",
  },
  {
    title: "§ 3 Leistungen",
    text: "Der Umfang der Leistungen ergibt sich ausschließlich aus dem vereinbarten Angebot und der Bestellübersicht. Leistungen, die darüber hinausgehen, werden gesondert beauftragt und vergütet. Der Auftragnehmer ist berechtigt, Teilleistungen an Dritte (Subunternehmer) zu übertragen.",
  },
  {
    title: "§ 4 Preise und Zahlung",
    text: "Alle Preise sind Endpreise in Euro. Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen. Die Zahlung erfolgt zu 50 % bei Auftragserteilung und zu 50 % bei Abnahme der fertigen Website. Bei Zahlungsverzug sind Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz p.a. fällig. Bis zur vollständigen Zahlung verbleiben alle Rechte am Werk beim Auftragnehmer.",
  },
  {
    title: "§ 5 Mitwirkungspflichten des Auftraggebers",
    text: "Der Auftraggeber verpflichtet sich, alle notwendigen Inhalte (Texte, Bilder, Logos, Zugangsdaten) rechtzeitig und vollständig zur Verfügung zu stellen. Der Auftraggeber versichert, dass er über alle erforderlichen Rechte an den übermittelten Inhalten verfügt und diese frei von Rechten Dritter sind. Verzögerungen durch unvollständige oder verspätete Mitwirkung des Auftraggebers verlängern vereinbarte Lieferfristen entsprechend. Der Auftraggeber trägt allein die Verantwortung für die rechtliche Zulässigkeit der bereitgestellten Inhalte.",
  },
  {
    title: "§ 6 Abnahme",
    text: "Nach Fertigstellung stellt der Auftragnehmer die Website zur Abnahme bereit. Der Auftraggeber hat die Website innerhalb von 7 Tagen zu prüfen und Mängel schriftlich mitzuteilen. Erfolgt innerhalb dieser Frist keine Rückmeldung, gilt die Leistung als abgenommen. Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme.",
  },
  {
    title: "§ 7 Nutzungsrechte",
    text: 'Mit vollständiger Zahlung des vereinbarten Entgelts räumt der Auftragnehmer dem Auftraggeber ein einfaches, nicht übertragbares Nutzungsrecht an der erstellten Website ein. Der Auftragnehmer behält sich das Recht vor, die Website als Referenz zu nennen und zu Werbezwecken zu präsentieren, sofern der Auftraggeber nicht ausdrücklich widerspricht.',
  },
  {
    title: "§ 8 Haftungsbeschränkung",
    text: "Der Auftragnehmer haftet unbeschränkt nur bei Vorsatz und grober Fahrlässigkeit sowie bei der schuldhaften Verletzung von Leben, Körper oder Gesundheit. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt. Jegliche weitergehende Haftung – insbesondere für mittelbare Schäden, Folgeschäden, entgangenen Gewinn, Datenverlust oder Ansprüche Dritter – ist ausgeschlossen. Eine Haftung für die dauerhafte Erreichbarkeit, Suchmaschinenpositionierung, Ladezeit oder Conversion-Rate der erstellten Website wird ausdrücklich ausgeschlossen. Für Schäden durch fehlerhafte, unvollständige oder rechtsverletzende Inhalte des Auftraggebers haftet ausschließlich der Auftraggeber. Der Auftraggeber stellt den Auftragnehmer von etwaigen Ansprüchen Dritter frei, die aufgrund der bereitgestellten Inhalte entstehen.",
  },
  {
    title: "§ 9 Datenschutz",
    text: "Die im Rahmen der Auftragsabwicklung erhobenen personenbezogenen Daten werden ausschließlich zur Vertragserfüllung genutzt und nicht an Dritte weitergegeben, sofern dies nicht zur Leistungserbringung erforderlich ist. Es gilt die Datenschutzerklärung unter pixzeria.de/datenschutz.",
  },
  {
    title: "§ 10 Schlussbestimmungen",
    text: "Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist – soweit gesetzlich zulässig – Waltrop. Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.",
  },
];

export default function AGB() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-black transition-colors" style={{ color: '#5F6368' }}>
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black mb-2" style={{ color: '#111', letterSpacing: '-0.03em' }}>
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="mb-12" style={{ color: '#5F6368' }}>Pixzeria · Münir Gencer · Stand: Juni 2026</p>

        <div className="flex flex-col gap-6">
          {sections.map((s) => (
            <section key={s.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
              <h2 className="font-bold text-base mb-3" style={{ color: '#111' }}>{s.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>{s.text}</p>
            </section>
          ))}
          <p className="text-center text-sm" style={{ color: '#999' }}>
            Bei Fragen: <a href="mailto:info@pixzeria.de" className="hover:underline" style={{ color: '#E6007E' }}>info@pixzeria.de</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
