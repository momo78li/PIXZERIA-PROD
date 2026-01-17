import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              <span className="text-pizza-red font-fredoka">Website-Wissen</span> für Unternehmen
            </h2>
            <p className="text-xl text-gray-600">Praktische Tipps und Insights aus der digitalen Küche</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden shadow-lg">
                <div className="w-full h-48 bg-gray-200 animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-16 bg-gray-200 rounded animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!blogPosts.length) {
    return (
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              <span className="text-pizza-red font-fredoka">Website-Wissen</span> für Unternehmen
            </h2>
            <p className="text-xl text-gray-600 mb-8">Praktische Tipps und Insights aus der digitalen Küche</p>
            <p className="text-gray-500">Bald finden Sie hier hilfreiche Artikel rund um Webdesign und Online-Marketing.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            <span className="text-pizza-red font-fredoka">Website-Wissen</span> für Unternehmen
          </h2>
          <p className="text-xl text-gray-600">Praktische Tipps und Insights aus der digitalen Küche</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.alt || post.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              )}
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`${post.categoryColor || 'bg-pizza-red/10 text-pizza-red'} px-3 py-1 rounded-full text-sm font-medium`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime || '5 Min. Lesezeit'}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-pizza-red transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {format(new Date(post.publishedAt || post.createdAt), 'd. MMMM yyyy', { locale: de })}
                  </span>
                  <Button 
                    variant="ghost" 
                    className="text-pizza-red font-semibold hover:underline p-0 h-auto"
                    onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                  >
                    Weiterlesen →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {blogPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              className="bg-pizza-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
              onClick={() => window.open('/admin', '_blank')}
            >
              📝 Blog verwalten
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
