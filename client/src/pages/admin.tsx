import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import type { BlogPost, InsertBlogPost } from "@shared/schema";
import { Pencil, Trash2, Eye, EyeOff, Plus } from "lucide-react";

export default function Admin() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog"],
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      const response = await apiRequest("POST", "/api/admin/blog", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setIsCreating(false);
      toast({ title: "Blog-Post erstellt!" });
    },
    onError: () => {
      toast({ title: "Fehler", description: "Post konnte nicht erstellt werden", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<BlogPost> }) => {
      const response = await apiRequest("PUT", `/api/admin/blog/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setEditingPost(null);
      toast({ title: "Blog-Post aktualisiert!" });
    },
    onError: () => {
      toast({ title: "Fehler", description: "Post konnte nicht aktualisiert werden", variant: "destructive" });
    },
  });

  const publishMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest("POST", `/api/admin/blog/${id}/publish`, {});
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Blog-Post veröffentlicht!" });
    },
    onError: () => {
      toast({ title: "Fehler", description: "Post konnte nicht veröffentlicht werden", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest("DELETE", `/api/admin/blog/${id}`, {});
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Blog-Post gelöscht!" });
    },
    onError: () => {
      toast({ title: "Fehler", description: "Post konnte nicht gelöscht werden", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      content: formData.get('content') as string,
      category: formData.get('category') as string,
      categoryColor: formData.get('categoryColor') as string,
      readTime: formData.get('readTime') as string,
      image: formData.get('image') as string,
      alt: formData.get('alt') as string,
    };

    if (editingPost) {
      updateMutation.mutate({ id: editingPost.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const categoryOptions = [
    { value: "Design", color: "bg-pizza-red/10 text-pizza-red" },
    { value: "SEO", color: "bg-green-100 text-green-700" },
    { value: "DSGVO", color: "bg-blue-100 text-blue-700" },
    { value: "Marketing", color: "bg-purple-100 text-purple-700" },
    { value: "Technik", color: "bg-orange-100 text-orange-700" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PIXZERIA Blog-Verwaltung</h1>
          <p className="text-gray-600">Erstellen und verwalten Sie Blog-Artikel</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Blog-Posts</h2>
          <Button onClick={() => setIsCreating(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Neuer Artikel
          </Button>
        </div>

        {(isCreating || editingPost) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingPost ? 'Artikel bearbeiten' : 'Neuen Artikel erstellen'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Titel</Label>
                    <Input
                      id="title"
                      name="title"
                      defaultValue={editingPost?.title || ''}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Kategorie</Label>
                    <Select name="category" defaultValue={editingPost?.category || ''}>
                      <SelectTrigger>
                        <SelectValue placeholder="Kategorie wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Kurzbeschreibung</Label>
                  <Textarea
                    id="description"
                    name="description"
                    defaultValue={editingPost?.description || ''}
                    rows={2}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="content">Vollständiger Artikel</Label>
                  <Textarea
                    id="content"
                    name="content"
                    defaultValue={editingPost?.content || ''}
                    rows={10}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="readTime">Lesezeit</Label>
                    <Input
                      id="readTime"
                      name="readTime"
                      defaultValue={editingPost?.readTime || '5 Min. Lesezeit'}
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Bild-URL</Label>
                    <Input
                      id="image"
                      name="image"
                      defaultValue={editingPost?.image || ''}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="alt">Bild-Beschreibung</Label>
                    <Input
                      id="alt"
                      name="alt"
                      defaultValue={editingPost?.alt || ''}
                    />
                  </div>
                </div>

                <input
                  type="hidden"
                  name="categoryColor"
                  value={categoryOptions.find(c => c.value === editingPost?.category)?.color || 'bg-pizza-red/10 text-pizza-red'}
                />
                
                <div className="flex gap-2">
                  <Button 
                    type="submit" 
                    disabled={createMutation.isPending || updateMutation.isPending}
                  >
                    {editingPost ? 'Aktualisieren' : 'Erstellen'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setIsCreating(false);
                      setEditingPost(null);
                    }}
                  >
                    Abbrechen
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4">
          {isLoading ? (
            <Card>
              <CardContent className="p-6">
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ) : (
            blogPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${post.categoryColor} px-2 py-1 rounded text-sm`}>
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {format(new Date(post.createdAt), 'd. MMM yyyy', { locale: de })}
                        </span>
                        {post.published ? (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            Veröffentlicht
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm flex items-center">
                            <EyeOff className="w-3 h-3 mr-1" />
                            Entwurf
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm">{post.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingPost(post)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      {!post.published && (
                        <Button
                          size="sm"
                          onClick={() => publishMutation.mutate(post.id)}
                          disabled={publishMutation.isPending}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          if (confirm('Artikel wirklich löschen?')) {
                            deleteMutation.mutate(post.id);
                          }
                        }}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {!isLoading && blogPosts.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">Noch keine Blog-Posts vorhanden.</p>
              <Button onClick={() => setIsCreating(true)} className="mt-4">
                Ersten Artikel erstellen
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}