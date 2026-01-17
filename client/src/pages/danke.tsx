import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Danke() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Danke!</h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Ihre Anfrage wurde erfolgreich übermittelt. 
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          
          <Button asChild className="bg-pizza-red hover:bg-red-700">
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Zur Startseite
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
