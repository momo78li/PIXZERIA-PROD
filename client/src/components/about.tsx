import { Button } from "@/components/ui/button";

export default function About() {
  const values = [
    {
      icon: "🚀",
      title: "Pizza-Speed",
      description: "Schnelle Lieferung ohne Qualitätsverlust – ab 1 Woche ist Ihre Website online.",
      color: "bg-pizza-red/10 text-pizza-red"
    },
    {
      icon: "❤️",
      title: "Einfachheit",
      description: "Klare Pakete, transparente Preise – so einfach wie Pizza bestellen.",
      color: "bg-pizza-orange/10 text-pizza-orange"
    },
    {
      icon: "⭐",
      title: "Qualität",
      description: "Moderne Technologien, professionelles Design und DSGVO-Konformität inklusive.",
      color: "bg-pizza-gold/10 text-pizza-gold"
    }
  ];

  return (
    <section id="ueber-uns" className="py-16 bg-pizza-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Warum <span className="text-pizza-red font-fredoka">PIXZERIA</span>?
            </h2>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xl">{value.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="bg-pizza-red text-white px-8 py-3 rounded-full font-semibold hover:bg-pizza-red-dark transition-colors">
                👥 Unser Team kennenlernen
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Happy small business owners celebrating their success" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">👍</span>
                </div>
                <div>
                  <div className="font-semibold">NPS Score</div>
                  <div className="text-2xl font-bold text-green-600">≥ 60</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-pizza-red text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">2.000+</div>
                <div className="text-sm">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
