import { ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";

const sections = [
  {
    title: "§ 1 Geltungsbereich",
    text: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Pixzeria (Inhaber: Münir Gencer) und seinen Kunden über die Erstellung von Websites und damit verbundene Services.",
  },
  {
    title: "§ 2 Vertragsschluss",
    text: "Ein Vertrag kommt durch schriftliche Auftragsbestätigung (per E-Mail oder WhatsApp) oder durch Beginn der Leistungserbringung zustande. Angebote sind freibleibend.",
  },
  {
    title: "§ 3 Leistungen",
    text: "Der Umfang der Leistungen ergibt sich aus dem gewählten Paket und den vereinbarten Extras gemäß Bestellübersicht.",
  },
  {
    title: "§ 4 Preise und Zahlung",
    text: "Alle Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet. Die Zahlung erfolgt 50% bei Auftragserteilung, 50% bei Abnahme der fertigen Website.",
  },
  {
    title: "§ 5 Mitwirkungspflichten",
    text: "Der Auftraggeber verpflichtet sich, alle notwendigen Inhalte (Texte, Bilder, Logo) rechtzeitig zur Verfügung zu stellen. Verzögerungen seitens des Auftraggebers verlängern die Lieferzeit entsprechend.",
  },
  {
    title: "§ 6 Nutzungsrechte",
    text: "Mit vollständiger Bezahlung gehen die Nutzungsrechte an der erstellten Website auf den Kunden über. Pixzeria behält sich das Recht vor, die Website als Referenz zu nennen.",
  },
  {
    title: "§ 7 Haftung",
    text: "Die Haftung richtet sich nach den gesetzlichen Bestimmungen. Eine Haftung für Schäden durch fehlerhafte oder verspätet gelieferte Inhalte des Auftraggebers ist ausgeschlossen.",
  },
  {
    title: "§ 8 Schlussbestimmungen",
    text: "Es gilt deutsches Recht. Gerichtsstand ist Waltrop. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.",
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
