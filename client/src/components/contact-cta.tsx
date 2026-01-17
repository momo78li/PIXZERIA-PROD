import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Clock, Trophy } from "lucide-react";

export default function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const features = [
    {
      icon: Clock,
      title: "Schnell",
      description: "Antwort innerhalb 24h"
    },
    {
      icon: Mail,
      title: "Digital",
      description: "Alles online - keine Termine nötig"
    },
    {
      icon: Trophy,
      title: "Garantiert",
      description: "100% Zufriedenheitsgarantie"
    }
  ];

  return (
    <section id="kontakt" className="py-16 gradient-pizza text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Bereit für Ihre neue <span className="font-fredoka">Website</span>?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Alles läuft digital und effizient ab - Sie sparen Zeit und Kosten. 
            Professionelle Websites, direkt online bestellt und geliefert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white text-pizza-red px-8 py-4 rounded-full font-semibold hover:bg-pizza-cream transition-all transform hover:scale-105">
                  <Mail className="w-4 h-4 mr-2" />
                  Nachricht senden
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Kontakt aufnehmen</DialogTitle>
                </DialogHeader>
                <form 
                  action="https://formsubmit.co/YOUR_EMAIL_HERE" 
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_subject" value="Neue PIXZERIA Kontaktanfrage" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_blacklist" value="viagra, casino, crypto, seo service" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="package" value={selectedPackage} />
                  
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
                  <Select onValueChange={(value) => setSelectedPackage(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Interessantes Paket auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter Pizza (699€)</SelectItem>
                      <SelectItem value="professional">Professional Pizza (1.299€)</SelectItem>
                      <SelectItem value="business">Business Pizza (1.999€)</SelectItem>
                      <SelectItem value="consultation">Kostenlose Beratung</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    name="message"
                    placeholder="Ihre Nachricht *"
                    rows={4}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-pizza-red hover:bg-red-700"
                  >
                    Nachricht senden
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
