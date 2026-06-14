import { useState } from "react";
import { MessageCircle, ArrowRight, ArrowLeft, Check } from "lucide-react";

const BUSINESS_TYPES = ["Dienstleister", "Praxis", "Gastronomie", "Handwerk", "Sonstiges"];
const EXTRAS = [
  { id: "seite", name: "Zusätzliche Seite", price: 150 },
  { id: "galerie", name: "Projekt- & Bildergalerie", price: 250 },
  { id: "sprache", name: "Mehrsprachigkeit", price: 300 },
  { id: "seo", name: "SEO-Textpaket", price: 300 },
];
const BASE = 999;

type Step = 0 | 1 | 2 | 3;

interface Config {
  businessType: string;
  hasLogo: boolean | null;
  hasTexts: boolean | null;
  express: boolean;
  extras: Record<string, boolean>;
  pflege: boolean;
}

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
            style={{
              background: i < step ? '#E6007E' : i === step ? '#111' : '#E8E8E8',
              color: i <= step ? '#fff' : '#999',
            }}
          >
            {i < step ? <Check size={12} /> : i + 1}
          </div>
          {i < total - 1 && (
            <div className="w-8 h-px" style={{ background: i < step ? '#E6007E' : '#E8E8E8' }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function TrustBar() {
  const [step, setStep] = useState<Step>(0);
  const [config, setConfig] = useState<Config>({
    businessType: "",
    hasLogo: null,
    hasTexts: null,
    express: false,
    extras: {},
    pflege: false,
  });

  const toggleExtra = (id: string) =>
    setConfig((c) => ({ ...c, extras: { ...c.extras, [id]: !c.extras[id] } }));

  const total =
    BASE +
    (config.express ? 300 : 0) +
    EXTRAS.filter((e) => config.extras[e.id]).reduce((s, e) => s + e.price, 0);

  const buildWhatsApp = () => {
    let msg = `Hallo, ich möchte eine Website bei Pixzeria bestellen.\n\n`;
    msg += `🏢 Unternehmenstyp: ${config.businessType || "–"}\n`;
    msg += `🖼 Logo vorhanden: ${config.hasLogo === true ? "Ja" : config.hasLogo === false ? "Nein" : "–"}\n`;
    msg += `📝 Texte vorhanden: ${config.hasTexts === true ? "Ja" : config.hasTexts === false ? "Nein" : "–"}\n\n`;
    msg += `✅ Basis-Website: 999 €\n`;
    if (config.express) msg += `• Express-Lieferung: +300 €\n`;
    const selectedExtras = EXTRAS.filter((e) => config.extras[e.id]);
    if (selectedExtras.length) msg += selectedExtras.map((e) => `• ${e.name}: +${e.price} €`).join("\n") + "\n";
    if (config.pflege) msg += `• Service & Pflege: +49 €/Monat\n`;
    msg += `\n💰 Einmaliger Gesamtpreis: ${total} €`;
    if (config.pflege) msg += `\n+ 49 €/Monat Pflege`;
    msg += `\n\nBitte meldet euch bei mir!`;
    return `https://wa.me/4915901234567?text=${encodeURIComponent(msg)}`;
  };

  const steps = [
    // Step 0: Business type
    <div key="0">
      <h3 className="font-bold text-xl mb-2" style={{ color: '#111' }}>Welche Art von Unternehmen?</h3>
      <p className="text-sm mb-6" style={{ color: '#5F6368' }}>Das hilft uns, deinen Bedarf besser einzuschätzen.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {BUSINESS_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setConfig((c) => ({ ...c, businessType: t }))}
            className="p-4 rounded-2xl border-2 text-sm font-medium transition-all text-left"
            style={{
              borderColor: config.businessType === t ? '#E6007E' : '#E8E8E8',
              background: config.businessType === t ? '#FFF0F8' : '#fff',
              color: config.businessType === t ? '#E6007E' : '#333',
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        onClick={() => config.businessType && setStep(1)}
        disabled={!config.businessType}
        className="btn-pink"
        style={{ opacity: config.businessType ? 1 : 0.4 }}
      >
        Weiter <ArrowRight size={16} />
      </button>
    </div>,

    // Step 1: Logo & texts
    <div key="1">
      <h3 className="font-bold text-xl mb-2" style={{ color: '#111' }}>Logo & Texte vorhanden?</h3>
      <p className="text-sm mb-6" style={{ color: '#5F6368' }}>So können wir direkt loslegen.</p>
      <div className="mb-5">
        <div className="text-sm font-semibold mb-3" style={{ color: '#111' }}>Logo vorhanden?</div>
        <div className="flex gap-3">
          {[true, false].map((v) => (
            <button
              key={String(v)}
              onClick={() => setConfig((c) => ({ ...c, hasLogo: v }))}
              className="px-6 py-3 rounded-2xl border-2 text-sm font-medium transition-all"
              style={{
                borderColor: config.hasLogo === v ? '#E6007E' : '#E8E8E8',
                background: config.hasLogo === v ? '#FFF0F8' : '#fff',
                color: config.hasLogo === v ? '#E6007E' : '#333',
              }}
            >
              {v ? "Ja" : "Nein"}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <div className="text-sm font-semibold mb-3" style={{ color: '#111' }}>Texte vorhanden?</div>
        <div className="flex gap-3">
          {[true, false].map((v) => (
            <button
              key={String(v)}
              onClick={() => setConfig((c) => ({ ...c, hasTexts: v }))}
              className="px-6 py-3 rounded-2xl border-2 text-sm font-medium transition-all"
              style={{
                borderColor: config.hasTexts === v ? '#E6007E' : '#E8E8E8',
                background: config.hasTexts === v ? '#FFF0F8' : '#fff',
                color: config.hasTexts === v ? '#E6007E' : '#333',
              }}
            >
              {v ? "Ja" : "Nein"}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={() => setStep(0)} className="btn-outline">
          <ArrowLeft size={16} /> Zurück
        </button>
        <button
          onClick={() => config.hasLogo !== null && config.hasTexts !== null && setStep(2)}
          disabled={config.hasLogo === null || config.hasTexts === null}
          className="btn-pink"
          style={{ opacity: config.hasLogo !== null && config.hasTexts !== null ? 1 : 0.4 }}
        >
          Weiter <ArrowRight size={16} />
        </button>
      </div>
    </div>,

    // Step 2: Extras
    <div key="2">
      <h3 className="font-bold text-xl mb-2" style={{ color: '#111' }}>Zusätzliche Optionen</h3>
      <p className="text-sm mb-6" style={{ color: '#5F6368' }}>Wähle was du brauchst – alles optional.</p>
      <div className="flex flex-col gap-3 mb-6">
        <label
          className="flex items-center justify-between gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all"
          style={{
            borderColor: config.express ? '#E6007E' : '#E8E8E8',
            background: config.express ? '#FFF0F8' : '#fff',
          }}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={config.express}
              onChange={() => setConfig((c) => ({ ...c, express: !c.express }))}
              style={{ accentColor: '#E6007E', width: 18, height: 18 }}
            />
            <div>
              <div className="font-medium text-sm" style={{ color: '#111' }}>Express-Lieferung</div>
              <div className="text-xs" style={{ color: '#5F6368' }}>Fertig in 3–5 Werktagen</div>
            </div>
          </div>
          <div className="font-bold text-sm" style={{ color: config.express ? '#E6007E' : '#999' }}>+300 €</div>
        </label>
        {EXTRAS.map((extra) => (
          <label
            key={extra.id}
            className="flex items-center justify-between gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all"
            style={{
              borderColor: config.extras[extra.id] ? '#E6007E' : '#E8E8E8',
              background: config.extras[extra.id] ? '#FFF0F8' : '#fff',
            }}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={!!config.extras[extra.id]}
                onChange={() => toggleExtra(extra.id)}
                style={{ accentColor: '#E6007E', width: 18, height: 18 }}
              />
              <span className="font-medium text-sm" style={{ color: '#111' }}>{extra.name}</span>
            </div>
            <div className="font-bold text-sm" style={{ color: config.extras[extra.id] ? '#E6007E' : '#999' }}>+{extra.price} €</div>
          </label>
        ))}
        <label
          className="flex items-center justify-between gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all"
          style={{
            borderColor: config.pflege ? '#E6007E' : '#E8E8E8',
            background: config.pflege ? '#FFF0F8' : '#fff',
          }}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={config.pflege}
              onChange={() => setConfig((c) => ({ ...c, pflege: !c.pflege }))}
              style={{ accentColor: '#E6007E', width: 18, height: 18 }}
            />
            <div>
              <div className="font-medium text-sm" style={{ color: '#111' }}>Service & Pflege</div>
              <div className="text-xs" style={{ color: '#5F6368' }}>Textänderungen, Pflege, Support</div>
            </div>
          </div>
          <div className="font-bold text-sm" style={{ color: config.pflege ? '#E6007E' : '#999' }}>+49 €/Monat</div>
        </label>
      </div>
      <div className="flex gap-3">
        <button onClick={() => setStep(1)} className="btn-outline">
          <ArrowLeft size={16} /> Zurück
        </button>
        <button onClick={() => setStep(3)} className="btn-pink">
          Weiter <ArrowRight size={16} />
        </button>
      </div>
    </div>,

    // Step 3: Summary
    <div key="3">
      <h3 className="font-bold text-xl mb-2" style={{ color: '#111' }}>Deine Zusammenfassung</h3>
      <p className="text-sm mb-6" style={{ color: '#5F6368' }}>Alles richtig? Dann direkt per WhatsApp bestellen.</p>
      <div className="rounded-2xl border p-5 mb-6" style={{ borderColor: '#E8E8E8', background: '#F7F7F8' }}>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span style={{ color: '#5F6368' }}>Unternehmenstyp</span>
            <span className="font-medium" style={{ color: '#111' }}>{config.businessType}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: '#5F6368' }}>Logo vorhanden</span>
            <span className="font-medium" style={{ color: '#111' }}>{config.hasLogo ? "Ja" : "Nein"}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: '#5F6368' }}>Texte vorhanden</span>
            <span className="font-medium" style={{ color: '#111' }}>{config.hasTexts ? "Ja" : "Nein"}</span>
          </div>
          <div className="border-t my-2" style={{ borderColor: '#E8E8E8' }} />
          <div className="flex justify-between">
            <span style={{ color: '#5F6368' }}>Basis-Website</span>
            <span className="font-medium" style={{ color: '#111' }}>999 €</span>
          </div>
          {config.express && (
            <div className="flex justify-between">
              <span style={{ color: '#5F6368' }}>Express-Lieferung</span>
              <span className="font-medium" style={{ color: '#E6007E' }}>+300 €</span>
            </div>
          )}
          {EXTRAS.filter((e) => config.extras[e.id]).map((e) => (
            <div key={e.id} className="flex justify-between">
              <span style={{ color: '#5F6368' }}>{e.name}</span>
              <span className="font-medium" style={{ color: '#E6007E' }}>+{e.price} €</span>
            </div>
          ))}
          {config.pflege && (
            <div className="flex justify-between">
              <span style={{ color: '#5F6368' }}>Service & Pflege</span>
              <span className="font-medium" style={{ color: '#E6007E' }}>+49 €/Monat</span>
            </div>
          )}
          <div className="border-t mt-2 pt-3 flex justify-between font-black text-base">
            <span style={{ color: '#111' }}>Gesamtpreis einmalig</span>
            <span style={{ color: '#111' }}>{total} €</span>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-xl text-xs mb-6" style={{ background: '#F7F7F8', color: '#888' }}>
        Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
      </div>
      <div className="flex gap-3 flex-wrap">
        <button onClick={() => setStep(2)} className="btn-outline">
          <ArrowLeft size={16} /> Zurück
        </button>
        <a
          href={buildWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pink"
        >
          <MessageCircle size={16} />
          Per WhatsApp bestellen
          <ArrowRight size={16} />
        </a>
      </div>
    </div>,
  ];

  return (
    <section id="konfigurator" className="section-padding bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: '#F7F7F8', color: '#5F6368', border: '1px solid #E8E8E8' }}>
            Konfigurator
          </div>
          <h2 className="heading-lg mb-4">Stell deine Website zusammen.</h2>
          <p className="text-lg" style={{ color: '#5F6368' }}>4 kurze Fragen. Fertig.</p>
        </div>

        <div className="card-clean" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1.5px solid #E8E8E8' }}>
          <StepIndicator step={step} total={4} />
          {steps[step]}
        </div>
      </div>
    </section>
  );
}
