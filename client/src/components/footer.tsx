export default function Footer() {
  const services = [
    "Starter Pizza (699€)",
    "Professional Pizza (1.299€)",
    "Enterprise Pizza (1.999€)",
    "Kostenloser Website-Check",
    "Wartung & Support"
  ];

  const company = [
    "Über uns",
    "Unser Team",
    "Karriere",
    "Referral-Programm",
    "Partnerschaften"
  ];

  const support = [
    "Kontakt",
    "FAQ",
    "Blog",
    "Hilfe-Center",
    "Status"
  ];

  const legal = [
    "Impressum",
    "Datenschutz",
    "AGB",
    "Cookie-Einstellungen"
  ];

  return (
    <footer className="bg-pizza-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-pizza rounded-full flex items-center justify-center">
                <span className="text-white">🍕</span>
              </div>
              <span className="text-2xl font-fredoka text-white">PIXZERIA</span>
            </div>
            
            <p className="text-gray-300 mb-6">
              Webdesign so einfach wie Pizza bestellen. Schnell, transparent und DSGVO-konform für kleine und mittlere Unternehmen.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pizza-red transition-colors">
                <span>💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pizza-red transition-colors">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pizza-red transition-colors">
                <span>📷</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Leistungen</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Unternehmen</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2025 PIXZERIA. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex flex-wrap gap-6">
              {legal.map((item, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
