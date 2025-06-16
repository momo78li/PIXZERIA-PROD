import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { id } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", id],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${id}`);
      if (!response.ok) {
        throw new Error('Blog post not found');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel nicht gefunden</h1>
              <p className="text-gray-600 mb-6">Der gewünschte Blog-Artikel konnte nicht gefunden werden.</p>
              <Button onClick={() => window.location.href = '/'}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Hauptseite
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-4xl p-4">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu PIXZERIA
          </Button>
          
          <div className="flex items-center gap-2 mb-4">
            <span className={`${post.categoryColor || 'bg-pizza-red/10 text-pizza-red'} px-3 py-1 rounded-full text-sm font-medium`}>
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime || '5 Min. Lesezeit'}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">
              {format(new Date(post.publishedAt || post.createdAt), 'd. MMMM yyyy', { locale: de })}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.description}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      {post.image && (
        <div className="w-full">
          <img 
            src={post.image} 
            alt={post.alt || post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto max-w-4xl p-4">
        <Card className="mt-8">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              style={{
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}
            >
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-pizza-red to-orange-500 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Benötigen Sie eine professionelle Website?</h3>
            <p className="text-lg mb-6 opacity-90">
              Lassen Sie PIXZERIA Ihre Website erstellen – einfach wie Pizza bestellen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-pizza-red hover:bg-gray-100"
                onClick={() => window.location.href = '/#website-check'}
              >
                🔍 Kostenlose Website-Analyse
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pizza-red"
                onClick={() => window.location.href = '/#pricing'}
              >
                📦 Pakete ansehen
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Blog */}
        <div className="text-center mt-8 mb-12">
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Hauptseite
          </Button>
        </div>
      </div>
    </div>
  );
}