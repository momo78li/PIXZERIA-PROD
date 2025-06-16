import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Pricing() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Bestätigungs-E-Mail gesendet!",
        description: "Bitte prüfen Sie Ihr E-Mail-Postfach und bestätigen Sie Ihre Anfrage.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setSelectedAddOns([]);
      setIsOrderModalOpen(false);
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    },
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      const orderData = {
        ...formData,
        package: selectedPackage?.name,
        addOns: selectedAddOns,
        message: `${formData.message}\n\nGewähltes Paket: ${selectedPackage?.name} (${selectedPackage?.price})\nGewählte Add-Ons: ${selectedAddOns.length > 0 ? selectedAddOns.join(', ') : 'Keine'}`
      };
      contactMutation.mutate(orderData);
    }
  };
  const packages = [
    {
      name: "Starter Pizza",
      price: "699€",
      description: "Perfekt für Handwerker & Praxen",
      badge: "🔥 Starter",
      badgeColor: "bg-pizza-gold",
      features: [
        "Bis zu 5 Seiten",
        "Funktioniert auf Handy & Computer",
        "Kontaktformular",
        "Impressum & Datenschutz",
        "Bei Google findbar"
      ],
      buttonColor: "bg-pizza-gold hover:bg-yellow-500",
      popular: false
    },
    {
      name: "Professional Pizza",
      price: "1.299€",
      description: "Für etablierte Betriebe",
      badge: "⭐ Beliebt",
      badgeColor: "bg-pizza-red",
      features: [
        "Alles aus Starter",
        "Bis zu 10 Seiten",
        "Blog für Neuigkeiten",
        "Besucherstatistiken",
        "Bessere Google-Platzierung"
      ],
      buttonColor: "bg-pizza-red hover:bg-red-700",
      popular: true
    },
    {
      name: "Business Pizza",
      price: "1.999€",
      description: "Für wachsende Unternehmen",
      badge: "👑 Business",
      badgeColor: "bg-pizza-orange",
      features: [
        "Alles aus Professional",
        "Bis zu 15 Seiten",
        "Produktübersicht",
        "Mehrere Kontaktformulare",
        "Foto-Galerien"
      ],
      buttonColor: "bg-pizza-orange hover:bg-orange-600",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Extra Seiten",
      price: "89€/Seite",
      icon: "📄"
    },
    {
      name: "Logo erstellen",
      price: "199€",
      icon: "🎨"
    },
    {
      name: "Texte schreiben",
      price: "99€/Seite",
      icon: "✍️"
    },
    {
      name: "Schneller fertig",
      price: "+299€",
      icon: "⚡"
    },
    {
      name: "Google-Optimierung",
      price: "299€",
      icon: "🔍"
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
                
                <Button 
                  onClick={() => handleOrderClick(pkg)}
                  className={`w-full ${pkg.buttonColor} text-white py-3 rounded-full font-semibold transition-colors`}
                >
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

      {/* Order Modal */}
      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedPackage?.name} bestellen
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons Selection */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Zusätzliche Leistungen (optional):</h3>
              <div className="space-y-3">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id={`addon-${index}`}
                        checked={selectedAddOns.includes(addon.name)}
                        onCheckedChange={() => handleAddOnToggle(addon.name)}
                      />
                      <label htmlFor={`addon-${index}`} className="flex items-center space-x-2 cursor-pointer">
                        <span>{addon.icon}</span>
                        <span>{addon.name}</span>
                      </label>
                    </div>
                    <span className="font-semibold text-pizza-red">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Ihre Kontaktdaten:</h3>
              <Input
                placeholder="Ihr Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <Input
                placeholder="Ihr Unternehmen"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
              <Textarea
                placeholder="Beschreiben Sie kurz Ihr Projekt oder besondere Wünsche..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={3}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Nächste Schritte:</strong>
              </p>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Bestätigungs-E-Mail in Ihrem Postfach öffnen</li>
                <li>2. Link in der E-Mail anklicken (DSGVO-Bestätigung)</li>
                <li>3. Wir melden uns innerhalb von 24 Stunden bei Ihnen</li>
                <li>4. Kostenlose Beratung und verbindlicher Kostenvoranschlag</li>
                <li>5. Umsetzung nach Ihrer Freigabe</li>
              </ol>
            </div>

            <Button
              type="submit"
              disabled={contactMutation.isPending}
              className="w-full bg-pizza-red hover:bg-red-700 text-white py-3 text-lg font-semibold"
            >
              {contactMutation.isPending ? "Wird gesendet..." : "Unverbindliche Anfrage senden"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
