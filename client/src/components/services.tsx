export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "Design",
      description: "Modernes, ansprechendes Webdesign",
      color: "bg-pizza-red/10 group-hover:bg-pizza-red text-pizza-red group-hover:text-white"
    },
    {
      icon: "💻",
      title: "Technik",
      description: "Next.js & moderne Technologien",
      color: "bg-pizza-orange/10 group-hover:bg-pizza-orange text-pizza-orange group-hover:text-white"
    },
    {
      icon: "📸",
      title: "Bildmaterial",
      description: "Professionelle Fotos inklusive",
      color: "bg-pizza-gold/10 group-hover:bg-pizza-gold text-pizza-gold group-hover:text-white"
    },
    {
      icon: "🔍",
      title: "SEO-Grundlagen",
      description: "Optimiert für Suchmaschinen",
      color: "bg-green-500/10 group-hover:bg-green-500 text-green-500 group-hover:text-white"
    },
    {
      icon: "🛡️",
      title: "DSGVO-Konform",
      description: "Rechtssicher und compliant",
      color: "bg-blue-500/10 group-hover:bg-blue-500 text-blue-500 group-hover:text-white"
    },
    {
      icon: "🎓",
      title: "Schulung",
      description: "Video-Tutorial für Sie",
      color: "bg-purple-500/10 group-hover:bg-purple-500 text-purple-500 group-hover:text-white"
    },
    {
      icon: "🎧",
      title: "Support",
      description: "Technischer Support verfügbar",
      color: "bg-indigo-500/10 group-hover:bg-indigo-500 text-indigo-500 group-hover:text-white"
    },
    {
      icon: "🚀",
      title: "Schnell",
      description: "Lieferung in ≤ 4 Wochen",
      color: "bg-pink-500/10 group-hover:bg-pink-500 text-pink-500 group-hover:text-white"
    }
  ];

  return (
    <section id="leistungen" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Unsere <span className="text-pizza-red font-fredoka">Zutaten</span> für Ihren Erfolg
          </h2>
          <p className="text-xl text-gray-600">Alles inklusive – wie bei einer echten Pizza-Bestellung</p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
