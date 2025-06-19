import { Link } from "wouter";
import PixzeriaLogo from "@/components/pixzeria-logo";

export default function Footer() {
  const services = [
    "Starter Pizza (999€)",
    "Professional Pizza (1.699€)",
    "Business Pizza (2.499€)",
    "Kostenloser Website-Check",
    "PIXZERIA Hosting"
  ];

  const company = [
    "Über uns",
    "Unser Team",
    "Kontakt"
  ];

  const support = [
    "FAQ",
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
            <div className="mb-6">
              <PixzeriaLogo size="lg" showText={false} />
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
              <li>
                <a href="#preise" className="text-gray-300 hover:text-white transition-colors">
                  Starter Pizza (999€)
                </a>
              </li>
              <li>
                <a href="#preise" className="text-gray-300 hover:text-white transition-colors">
                  Professional Pizza (1.699€)
                </a>
              </li>
              <li>
                <a href="#preise" className="text-gray-300 hover:text-white transition-colors">
                  Business Pizza (2.499€)
                </a>
              </li>
              <li>
                <a href="#website-check" className="text-gray-300 hover:text-white transition-colors">
                  Kostenloser Website-Check
                </a>
              </li>
              <li>
                <a href="#preise" className="text-gray-300 hover:text-white transition-colors">
                  PIXZERIA Hosting
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <a href="#ueber-uns" className="text-gray-300 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="text-gray-300 hover:text-white transition-colors">
                  Unser Team
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Hilfe-Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Status
                </a>
              </li>
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
              <Link href="/impressum" className="text-gray-300 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                AGB
              </a>
              <button 
                onClick={() => {
                  // Reset cookie consent to show banner again
                  localStorage.removeItem('pixzeria-cookie-consent');
                  localStorage.removeItem('pixzeria-cookie-timestamp');
                  window.location.reload();
                }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
