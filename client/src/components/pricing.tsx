import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Palette, PenTool, Zap, Search, Rocket, Users, Crown, Star, Pizza, ShoppingCart, Check } from "lucide-react";
import TrustBar from "./trust-bar";

export default function Pricing() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [hostingOption, setHostingOption] = useState<'self' | 'pixzeria'>('self');
  const loadTime = useRef(Date.now());

  useEffect(() => {
    loadTime.current = Date.now();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const elapsed = Date.now() - loadTime.current;
    if (elapsed < 3000) {
      e.preventDefault();
      return false;
    }
  };

  const handleOrderClick = (pkg: any) => {
    setSelectedPackage(pkg);
    setIsOrderModalOpen(true);
  };

  const handleAddOnToggle = (addOnName: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnName) 
        ? prev.filter(name => name !== addOnName)
        : [...prev, addOnName]
    );
  };
  const packages = [
    {
      name: "Starter Pizza",
      price: "999€",
      hostingPrice: "29€/Monat",
      description: "Perfekt für kleine Unternehmen",
      badge: "Starter",
      badgeIcon: Rocket,
      badgeColor: "bg-pizza-gold",
      features: [
        "Bis zu 5 Seiten",
        "Funktioniert auf Handy & Computer",
        "Kontaktformular",
        "Impressum & Datenschutz",
        "Einmalige SEO-Grundeinstellung"
      ],
      hostingFeatures: [
        "Professionelles Hosting",
        "Automatische SSL-Verschlüsselung",
        "Tägliche Backups",
        "24/7 Überwachung",
        "Einfache Updates durch uns"
      ],
      buttonColor: "bg-pizza-gold hover:bg-pizza-red-dark",
      popular: false
    },
    {
      name: "Professional Pizza",
      price: "1.699€",
      hostingPrice: "49€/Monat",
      description: "Für wachsende Unternehmen",
      badge: "Beliebt",
      badgeIcon: Star,
      badgeColor: "bg-pizza-red",
      features: [
        "Alles aus Starter",
        "Bis zu 10 Seiten",
        "Blog für Neuigkeiten",
        "Besucherstatistiken",
        "Erweiterte SEO-Optimierung"
      ],
      hostingFeatures: [
        "Alles aus Starter Hosting",
        "Erweiterte Backup-Strategien",
        "Performance-Optimierung",
        "E-Mail-Weiterleitungen",
        "Prioritärer Support"
      ],
      buttonColor: "bg-pizza-red hover:bg-pizza-red-dark",
      popular: true
    },
    {
      name: "Business Pizza",
      price: "2.499€",
      hostingPrice: "79€/Monat",
      description: "Für erfolgreiche Unternehmen",
      badge: "Business",
      badgeIcon: Crown,
      badgeColor: "bg-pizza-orange",
      features: [
        "Alles aus Professional",
        "Bis zu 15 Seiten",
        "Produktübersicht",
        "Mehrere Kontaktformulare",
        "Foto-Galerien"
      ],
      hostingFeatures: [
        "Alles aus Professional Hosting",
        "Dedicated Resources",
        "Advanced Security",
        "Monatliche Berichte",
        "VIP-Support"
      ],
      buttonColor: "bg-pizza-orange hover:bg-pizza-red-dark",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Extra Seiten",
      price: "89€/Seite",
      icon: FileText
    },
    {
      name: "Logo erstellen",
      price: "199€",
      icon: Palette
    },
    {
      name: "Texte schreiben",
      price: "99€/Seite",
      icon: PenTool
    },
    {
      name: "Schneller fertig",
      price: "+299€",
      icon: Zap
    },
    {
      name: "Premium SEO-Setup",
      price: "299€",
      icon: Search
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
          
          {/* Hosting Option Toggle */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mt-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Hosting-Option wählen:</h3>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setHostingOption('self')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  hostingOption === 'self' 
                    ? 'bg-pizza-red text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Eigenes Hosting
              </button>
              <button
                onClick={() => setHostingOption('pixzeria')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  hostingOption === 'pixzeria' 
                    ? 'bg-pizza-red text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                PIXZERIA Hosting
              </button>
            </div>
            {hostingOption === 'pixzeria' && (
              <p className="text-sm text-gray-600 mt-3">
                ✓ Keine technischen Sorgen ✓ Einfache Updates ✓ Professioneller Support
              </p>
            )}
          </div>
        </div>

        <TrustBar />
        
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
                <div className={`${pkg.badgeColor} px-4 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1`}>
                  {pkg.badgeIcon && <pkg.badgeIcon className="w-3 h-3" />}
                  {pkg.badge}
                </div>
              </div>
              
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 bg-pizza-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pizza className="w-8 h-8 text-pizza-red" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-pizza-red">{pkg.price}</div>
                <p className="text-sm text-gray-500">einmalig</p>
                {hostingOption === 'pixzeria' && (
                  <div className="mt-3 p-3 bg-pizza-gold/10 rounded-lg">
                    <div className="text-2xl font-bold text-pizza-orange">+ {pkg.hostingPrice}</div>
                    <p className="text-sm text-gray-600">PIXZERIA Hosting</p>
                  </div>
                )}
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {hostingOption === 'pixzeria' && (
                    <>
                      <li className="border-t pt-3 mt-3">
                        <span className="text-sm font-semibold text-pizza-orange">+ PIXZERIA Hosting:</span>
                      </li>
                      {pkg.hostingFeatures.map((feature, featureIndex) => (
                        <li key={`hosting-${featureIndex}`} className="flex items-center">
                          <Check className="w-4 h-4 text-pizza-orange mr-3" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
                
                <Button 
                  onClick={() => handleOrderClick(pkg)}
                  className={`w-full ${pkg.buttonColor} text-white py-3 rounded-full font-semibold transition-colors`}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Bestellen
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
              {addOns.map((addon, index) => {
                const IconComponent = addon.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{addon.name}</h4>
                      <p className="text-sm text-gray-600">{addon.price}</p>
                    </div>
                    <IconComponent className="w-5 h-5 text-pizza-red" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Modal */}
      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedPackage?.name} bestellen
            </DialogTitle>
          </DialogHeader>
          
          <form 
            action="https://formsubmit.co/Muenir.gencer@gmail.com" 
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value={`Neue Paket-Bestellung: ${selectedPackage?.name}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${window.location.origin}/danke`} />
            <input type="hidden" name="_blacklist" value="viagra, casino, crypto, seo service" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="text" name="_fax" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="package" value={`${selectedPackage?.name} (${selectedPackage?.price})`} />
            <input type="hidden" name="hosting" value={hostingOption === 'pixzeria' ? `PIXZERIA Hosting (${selectedPackage?.hostingPrice})` : 'Eigenes Hosting'} />
            <input type="hidden" name="addons" value={selectedAddOns.length > 0 ? selectedAddOns.join(', ') : 'Keine'} />
            
            {/* Package Summary */}
            <div className="bg-pizza-cream/20 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Gewähltes Paket:</h3>
              <div className="flex justify-between items-center">
                <span>{selectedPackage?.name}</span>
                <span className="font-bold text-pizza-red">{selectedPackage?.price}</span>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {selectedPackage?.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-3 h-3 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons Selection */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Zusätzliche Leistungen (optional):</h3>
              <div className="space-y-3">
                {addOns.map((addon, index) => {
                  const IconComponent = addon.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id={`addon-${index}`}
                          checked={selectedAddOns.includes(addon.name)}
                          onCheckedChange={() => handleAddOnToggle(addon.name)}
                        />
                        <label htmlFor={`addon-${index}`} className="flex items-center space-x-2 cursor-pointer">
                          <IconComponent className="w-4 h-4" />
                          <span>{addon.name}</span>
                        </label>
                      </div>
                      <span className="font-semibold text-pizza-red">{addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Ihre Kontaktdaten:</h3>
              <Input
                name="name"
                placeholder="Ihr Name *"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Ihre E-Mail-Adresse *"
                required
              />
              <Input
                name="company"
                placeholder="Ihr Unternehmen"
              />
              <Textarea
                name="message"
                placeholder="Beschreiben Sie kurz Ihr Projekt oder besondere Wünsche..."
                rows={3}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Nächste Schritte:</strong>
              </p>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Wir erhalten Ihre Anfrage direkt per E-Mail</li>
                <li>2. Wir melden uns innerhalb von 24 Stunden bei Ihnen</li>
                <li>3. Kostenlose Beratung und verbindlicher Kostenvoranschlag</li>
                <li>4. Umsetzung nach Ihrer Freigabe</li>
              </ol>
            </div>

            <Button
              type="submit"
              className="w-full bg-pizza-red hover:bg-red-700 text-white py-3 text-lg font-semibold"
            >
              Unverbindliche Anfrage senden
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
