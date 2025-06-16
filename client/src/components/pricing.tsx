import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Pricing() {
  const packages = [
    {
      name: "Starter Pizza",
      price: "499€",
      description: "Perfekt für kleine Unternehmen",
      badge: "🔥 Starter",
      badgeColor: "bg-pizza-gold",
      features: [
        "Moderne Website (bis 5 Seiten)",
        "Responsives Design",
        "Kontaktformular",
        "DSGVO-konform",
        "SEO-Grundlagen",
        "2 Design-Anpassungen"
      ],
      buttonColor: "bg-pizza-gold hover:bg-yellow-500",
      popular: false
    },
    {
      name: "Professional Pizza",
      price: "899€",
      description: "Für wachsende Unternehmen",
      badge: "⭐ Beliebt",
      badgeColor: "bg-pizza-red",
      features: [
        "Alles aus Starter",
        "Bis zu 10 Seiten",
        "Blog-System",
        "Google Analytics",
        "Erweiterte SEO",
        "5 Design-Anpassungen"
      ],
      buttonColor: "bg-pizza-red hover:bg-red-700",
      popular: true
    },
    {
      name: "Business Pizza",
      price: "1.299€",
      description: "Für etablierte Unternehmen",
      badge: "👑 Business",
      badgeColor: "bg-pizza-orange",
      features: [
        "Alles aus Professional",
        "Bis zu 20 Seiten",
        "Einfacher Online-Shop",
        "Buchungssystem",
        "API-Integrationen",
        "Unbegrenzte Anpassungen"
      ],
      buttonColor: "bg-pizza-orange hover:bg-orange-600",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Zusätzliche Seiten",
      price: "49€/Seite",
      icon: "📄"
    },
    {
      name: "Logo-Design",
      price: "199€",
      icon: "🎨"
    },
    {
      name: "Inhalt schreiben",
      price: "99€/Seite",
      icon: "✍️"
    },
    {
      name: "Express-Lieferung",
      price: "+299€",
      icon: "⚡"
    },
    {
      name: "SEO-Optimierung",
      price: "249€",
      icon: "🔍"
    },
    {
      name: "Social Media Setup",
      price: "149€",
      icon: "📱"
    }
  ];

  return (
    <section id="preise" className="py-16 bg-gradient-to-br from-pizza-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Unsere <span className="text-pizza-red font-fredoka">Pizza-Menüs</span>
          </h2>
          <p className="text-xl text-gray-600">Transparente Preise, keine versteckten Kosten</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative shadow-lg hover:shadow-2xl transition-all border-2 ${
                pkg.popular 
                  ? 'border-pizza-red transform scale-105' 
                  : 'border-transparent hover:border-pizza-red/20'
              }`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className={`${pkg.badgeColor} px-4 py-1 rounded-full text-sm font-semibold text-white`}>
                  {pkg.badge}
                </div>
              </div>
              
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍕</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-pizza-red">{pkg.price}</div>
                <p className="text-sm text-gray-500">einmalig</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-3">✅</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${pkg.buttonColor} text-white py-3 rounded-full font-semibold transition-colors`}>
                  🛒 Bestellen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Add-ons Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <h3 className="text-2xl font-bold text-center">
              <span className="text-pizza-red font-fredoka">Zusätzliche Zutaten</span>
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{addon.name}</h4>
                    <p className="text-sm text-gray-600">{addon.price}</p>
                  </div>
                  <span className="text-pizza-red text-xl">{addon.icon}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
