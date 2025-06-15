import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Müller Bau GmbH",
      subtitle: "Handwerksbetrieb aus München",
      package: "Professional",
      timeline: "3 Wochen",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Professional business website example",
      badge: "📈 +30%",
      badgeColor: "bg-green-500",
      result: "+30% mehr Anfragen in den ersten 3 Monaten nach Launch",
      resultColor: "bg-green-50 text-green-700"
    },
    {
      title: "Praxis Dr. Schmidt",
      subtitle: "Zahnarztpraxis aus Hamburg",
      package: "Starter",
      timeline: "2 Wochen",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Modern medical practice website",
      badge: "⚡ 50% schneller",
      badgeColor: "bg-blue-500",
      result: "50% bessere Ladezeiten und deutlich mehr Online-Termine",
      resultColor: "bg-blue-50 text-blue-700"
    },
    {
      title: "BioLaden Regional",
      subtitle: "Online-Shop aus Berlin",
      package: "Enterprise",
      timeline: "4 Wochen",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "E-commerce website example",
      badge: "🛒 +200%",
      badgeColor: "bg-pizza-red",
      result: "+200% Umsatzsteigerung durch neuen Online-Shop",
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
