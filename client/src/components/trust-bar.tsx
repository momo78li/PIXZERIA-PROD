import { Shield, Award, Euro, CheckCircle } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: Award,
      // TODO: Echte Google-Bewertung eintragen wenn vorhanden
      label: "Google Bewertung",
      value: "In Vorbereitung",
      color: "text-pizza-gold"
    },
    {
      icon: CheckCircle,
      // TODO: Echte Projektzahl aktualisieren
      label: "Abgeschlossene Projekte",
      value: "XX+",
      color: "text-green-600"
    },
    {
      icon: Shield,
      label: "DSGVO-konform",
      value: "100%",
      color: "text-blue-600"
    },
    {
      icon: Euro,
      label: "Fixpreis-Garantie",
      value: "Keine versteckten Kosten",
      color: "text-pizza-red"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 mb-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {trustItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-3"
            >
              <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 ${item.color}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-gray-900">{item.value}</span>
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
