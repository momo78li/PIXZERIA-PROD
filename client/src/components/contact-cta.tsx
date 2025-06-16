import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    package: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Bestätigungs-E-Mail gesendet!",
        description: "Bitte prüfen Sie Ihr E-Mail-Postfach und bestätigen Sie Ihre Anfrage.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        package: ""
      });
      setIsOpen(false);
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      contactMutation.mutate(formData);
    }
  };

  const features = [
    {
      icon: "⏱️",
      title: "Schnelle Antwort",
      description: "Innerhalb von 24 Stunden"
    },
    {
      icon: "🤝",
      title: "Unverbindlich",
      description: "Kostenlose Erstberatung"
    },
    {
      icon: "🏆",
      title: "Garantiert",
      description: "100% Zufriedenheitsgarantie"
    }
  ];

  return (
    <section className="py-16 gradient-pizza text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Bereit für Ihre neue <span className="font-fredoka">Website</span>?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen. 
            Schnell, transparent und zu fairen Preisen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-white text-pizza-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              📞 Kostenlose Beratung
            </Button>
            
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pizza-red transition-all"
                >
                  ✉️ Nachricht senden
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Kontakt aufnehmen</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Select onValueChange={(value) => setFormData({...formData, package: value})}>
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
                    placeholder="Ihre Nachricht *"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    required
                  />
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-pizza-red hover:bg-red-700"
                  >
                    {contactMutation.isPending ? "Wird gesendet..." : "Nachricht senden"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
