import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Blog() {
  const blogPosts = [
    {
      title: "10 Website-Fehler, die Kunden vergraulen",
      description: "Diese häufigen Designfehler kosten Sie täglich potenzielle Kunden. Erfahren Sie, wie Sie sie vermeiden.",
      category: "Design",
      categoryColor: "bg-pizza-red/10 text-pizza-red",
      readTime: "5 Min. Lesezeit",
      publishedAt: "2 Tage alt",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      alt: "Modern web design workspace with laptop and design tools"
    },
    {
      title: "Local SEO für Handwerker: Der komplette Guide",
      description: "Wie Sie als lokaler Betrieb bei Google ganz oben stehen und mehr Kunden aus Ihrer Region gewinnen.",
      category: "SEO",
      categoryColor: "bg-green-100 text-green-700",
      readTime: "8 Min. Lesezeit",
      publishedAt: "1 Woche alt",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      alt: "SEO analytics dashboard on computer screen"
    },
    {
      title: "DSGVO-Checkliste für Websites 2025",
      description: "Alle wichtigen Punkte für eine rechtssichere Website – einfach erklärt und sofort umsetzbar.",
      category: "DSGVO",
      categoryColor: "bg-blue-100 text-blue-700",
      readTime: "12 Min. Lesezeit",
      publishedAt: "3 Tage alt",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      alt: "GDPR compliance concept with laptop and legal documents"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            <span className="text-pizza-red font-fredoka">Website-Wissen</span> für KMU
          </h2>
          <p className="text-xl text-gray-600">Praktische Tipps und Insights aus der digitalen Küche</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
              />
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`${post.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-pizza-red transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.publishedAt}</span>
                  <button className="text-pizza-red font-semibold hover:underline">
                    Weiterlesen →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-pizza-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
            📰 Alle Artikel lesen
          </Button>
        </div>
      </div>
    </section>
  );
}
