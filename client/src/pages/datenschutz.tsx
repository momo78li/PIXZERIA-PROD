import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useCookieConsent, type CookieConsent } from "@/hooks/use-cookies";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function Datenschutz() {
  const { consent, updateConsent, revokeConsent } = useCookieConsent();
  const [tempConsent, setTempConsent] = useState<CookieConsent>(consent);
  const { toast } = useToast();

  const handleConsentChange = (type: keyof CookieConsent, checked: boolean) => {
    if (type === "necessary") return;
    setTempConsent((prev) => ({ ...prev, [type]: checked }));
  };

  const handleSave = () => {
    updateConsent(tempConsent);
    toast({ title: "Gespeichert", description: "Cookie-Einstellungen wurden aktualisiert." });
  };

  const handleRevoke = () => {
    revokeConsent();
    setTempConsent({ necessary: true, functional: false, analytics: false, marketing: false });
    toast({ title: "Widerrufen", description: "Alle optionalen Cookies wurden deaktiviert." });
  };

  const cookieTypes = [
    { key: "necessary" as const, label: "Notwendige Cookies", desc: "Für die grundlegende Funktion der Website erforderlich. Immer aktiv.", required: true },
    { key: "functional" as const, label: "Funktionale Cookies", desc: "Ermöglichen erweiterte Funktionen (z.B. gespeicherte Präferenzen).", required: false },
    { key: "analytics" as const, label: "Analyse-Cookies", desc: "Helfen uns zu verstehen, wie Besucher die Website nutzen.", required: false },
    { key: "marketing" as const, label: "Marketing-Cookies", desc: "Werden verwendet, um Besucher auf Websites zu verfolgen.", required: false },
  ];

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
          {/* Cookie Settings */}
          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Cookie-Einstellungen</h2>
            <div className="flex flex-col gap-4 mb-6">
              {cookieTypes.map(({ key, label, desc, required }) => (
                <label key={key} className="flex items-start gap-4 cursor-pointer">
                  <div className="mt-0.5">
                    <input
                      type="checkbox"
                      checked={required ? true : tempConsent[key]}
                      disabled={required}
                      onChange={(e) => handleConsentChange(key, e.target.checked)}
                      className="w-4 h-4"
                      style={{ accentColor: '#E6007E' }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm" style={{ color: '#111' }}>{label}</span>
                      {required && (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#F7F7F8', color: '#5F6368' }}>Immer aktiv</span>
                      )}
                    </div>
                    <p className="text-xs mt-1" style={{ color: '#5F6368' }}>{desc}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={handleSave} className="btn-pink text-sm py-2 px-5">Einstellungen speichern</button>
              <button onClick={handleRevoke} className="btn-outline text-sm py-2 px-5">Alle ablehnen</button>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Verantwortlicher</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#333' }}>
              <p className="font-semibold">Pixzeria</p>
              <p>Inhaber: Münir Gencer</p>
              <p>45731 Waltrop, Deutschland</p>
              <a href="mailto:info@pixzeria.de" className="hover:underline mt-1 block" style={{ color: '#E6007E' }}>
                info@pixzeria.de
              </a>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Datenerhebung auf dieser Website</h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              <p>
                <strong style={{ color: '#111' }}>Server-Log-Dateien:</strong> Der Hoster erhebt automatisch Informationen in Server-Log-Dateien (IP-Adresse, Browser, Betriebssystem, Referrer-URL, Zugriffszeitpunkt).
              </p>
              <p>
                <strong style={{ color: '#111' }}>Kontaktformular / WhatsApp:</strong> Wenn Sie uns über das Kontaktformular oder WhatsApp kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
              </p>
              <p>
                <strong style={{ color: '#111' }}>FormSubmit:</strong> Formulareingaben werden über den Dienst FormSubmit.co verarbeitet. Dabei gelten die Datenschutzbestimmungen von FormSubmit.
              </p>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Ihre Rechte</h2>
            <div className="text-sm leading-relaxed" style={{ color: '#5F6368' }}>
              <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer gespeicherten Daten sowie das Recht auf Datenübertragbarkeit.</p>
              <p className="mt-3">Anfragen richten Sie bitte an: <a href="mailto:info@pixzeria.de" className="hover:underline" style={{ color: '#E6007E' }}>info@pixzeria.de</a></p>
            </div>
          </section>

          <section className="p-6 rounded-2xl border" style={{ borderColor: '#E8E8E8' }}>
            <h2 className="font-bold text-lg mb-4" style={{ color: '#111' }}>Externe Dienste</h2>
            <div className="flex flex-col gap-3 text-sm" style={{ color: '#5F6368' }}>
              <p><strong style={{ color: '#111' }}>Google Fonts:</strong> Wir nutzen Google Fonts für die Typographie. Dabei werden Daten an Google übertragen. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#E6007E' }}>Google Datenschutz</a></p>
              <p><strong style={{ color: '#111' }}>WhatsApp:</strong> WhatsApp-Links führen zu Meta Platforms. Es gelten die Datenschutzbestimmungen von WhatsApp/Meta.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
