import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Settings, Shield, Send, Clock } from "lucide-react";

export default function WebsiteCheck() {
  const [url, setUrl] = useState("");

  return (
    <section id="website-check" className="py-16 gradient-pizza text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            <span className="font-fredoka">Kostenloser</span> Webseiten-Check
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Erfahren Sie in 48 Stunden, wo Ihre Website Verbesserungspotential hat. 
            Design, Technik & DSGVO – komplett kostenlos!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Design-Analyse</h3>
                <p className="text-sm opacity-80">Modernes Design & Benutzerfreundlichkeit</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Technik-Check</h3>
                <p className="text-sm opacity-80">Ladezeiten, Mobile-Optimierung & SEO</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">DSGVO-Prüfung</h3>
                <p className="text-sm opacity-80">Rechtssicherheit & Compliance</p>
              </div>
            </div>
          </div>
          
          <form 
            action="https://formsubmit.co/Muenir.gencer@gmail.com" 
            method="POST"
            className="max-w-2xl mx-auto space-y-4"
          >
            <input type="hidden" name="_subject" value="Neuer kostenloser Website-Check" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_blacklist" value="viagra, casino, crypto, seo service" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="text"
                name="website_url"
                placeholder="z.B. meine-firma.de (ohne http:// oder www.)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Ihre E-Mail-Adresse..."
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-white text-pizza-red px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Jetzt prüfen
            </Button>
            <p className="text-sm opacity-70 flex items-center justify-center gap-4">
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Ergebnis in 48 Stunden
              </span>
              •
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                100% DSGVO-konform
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
