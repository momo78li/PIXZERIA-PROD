import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TrendingUp, Zap, ShoppingCart, ExternalLink } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Müller Bau",
      subtitle: "Handwerksbetrieb aus München",
      package: "Professional",
      timeline: "1 Woche",
      image: "/assets/reference-construction.png",
      alt: "Müller Bau - Professionelle Handwerker-Website",
      badge: "+40%",
      badgeIcon: TrendingUp,
      badgeColor: "bg-green-500",
      result: "+40% mehr Aufträge durch professionellen Online-Auftritt",
      resultColor: "bg-green-50 text-green-700"
    },
    {
      title: "Praxis Dr. Schneider",
      subtitle: "Arztpraxis aus Hamburg",
      package: "Starter",
      timeline: "1 Woche",
      image: "/assets/reference-doctor.png",
      alt: "Praxis Dr. Schneider - Moderne Arztpraxis-Website",
      badge: "Online-Termine",
      badgeIcon: Zap,
      badgeColor: "bg-blue-500",
      result: "Moderne Online-Terminbuchung und bessere Patientenkommunikation",
      resultColor: "bg-blue-50 text-blue-700"
    },
    {
      title: "Mustermann & Kollegen",
      subtitle: "Rechtsanwaltskanzlei aus Berlin",
      package: "Business",
      timeline: "1 Woche",
      image: "/assets/reference-lawyer.png",
      alt: "Mustermann & Kollegen - Professionelle Kanzlei-Website",
      badge: "Vertrauen",
      badgeIcon: ShoppingCart,
      badgeColor: "bg-pizza-red",
      result: "Professioneller Auftritt stärkt Vertrauen bei Mandanten",
      resultColor: "bg-red-50 text-red-700"
    }
  ];

  return (
    <section id="beispiele" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Unsere besten <span className="text-pizza-red font-fredoka">Kreationen</span>
          </h2>
          <p className="text-xl text-gray-600">Erfolgsgeschichten unserer zufriedenen Kunden</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.alt} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
                />
                <div className={`absolute top-4 right-4 ${study.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {study.badge}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.subtitle}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Paket: {study.package}</span>
                  <span>Lieferzeit: {study.timeline}</span>
                </div>
                
                <div className={`${study.resultColor} p-4 rounded-lg`}>
                  <h4 className="font-semibold mb-2">Erfolg:</h4>
                  <p className="text-sm">
                    {study.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-pizza-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
            👁️ Alle Projekte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
