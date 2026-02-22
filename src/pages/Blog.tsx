import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  Clock,
  TrendingUp,
  Code,
  Headphones,
  Share2,
  Bot,
  Smartphone
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime?: string;
  categoryId: string;
  categoryLabel: string;
  tags: string[];
  featured?: boolean;
  image?: string;
};

const toDateString = (value: unknown) => {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (value && typeof value === "object" && "toDate" in value) {
    const maybeTimestamp = value as { toDate?: () => Date };
    if (typeof maybeTimestamp.toDate === "function") {
      return maybeTimestamp.toDate().toISOString();
    }
  }

  if (typeof value === "string") {
    return value;
  }

  return "";
};

const formatDate = (value: string) => {
  if (!value) {
    return "";
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toLocaleDateString();
};

const estimateReadTime = (htmlContent: string) => {
  const plainText = htmlContent.replace(/<[^>]*>/g, " ");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
};

const toCategoryId = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const normalizePost = (
  id: string,
  data: Record<string, unknown>,
  categoryLookup: Record<string, string>
): BlogPost => {
  const content = String(data.content ?? "");
  const rawCategory = String(data.category ?? "uncategorized");
  const normalizedCategory = toCategoryId(rawCategory);
  const categoryId = categoryLookup[normalizedCategory] ? normalizedCategory : normalizedCategory;
  const categoryLabel = categoryLookup[categoryId] ?? rawCategory;

  return {
    id,
    title: String(data.title ?? "Untitled"),
    excerpt: String(data.excerpt ?? ""),
    content,
    author: String(data.author ?? "Skryptone"),
    date: toDateString(data.date ?? data.publishedAt ?? data.createdAt),
    readTime: String(data.readTime ?? estimateReadTime(content)),
    categoryId,
    categoryLabel,
    tags: Array.isArray(data.tags) ? data.tags.map(tag => String(tag)) : [],
    featured: Boolean(data.featured),
    image: typeof data.image === "string" ? data.image : undefined,
  };
};

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Posts", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "saas", name: "SaaS Solutions", icon: <Code className="h-4 w-4" /> },
    { id: "it-support", name: "IT Support", icon: <Headphones className="h-4 w-4" /> },
    { id: "marketing", name: "Digital Marketing", icon: <Share2 className="h-4 w-4" /> },
    { id: "automation", name: "Automation & AI", icon: <Bot className="h-4 w-4" /> },
    { id: "web-dev", name: "Web Development", icon: <Smartphone className="h-4 w-4" /> }
  ];
  const categoryLookup = useMemo(() => {
    return categories.reduce<Record<string, string>>((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {});
  }, [categories]);

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      setIsLoading(true);
      setLoadError(null);

      try {
        const snapshot = await getDocs(collection(db, "articles"));
        const loadedPosts = snapshot.docs.map(docSnap =>
          normalizePost(docSnap.id, docSnap.data(), categoryLookup)
        );
        if (isMounted) {
          setPosts(loadedPosts);
        }
      } catch (error) {
        console.error("Error loading articles:", error);
        if (isMounted) {
          setLoadError("Unable to load articles right now.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || post.categoryId === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const featuredPosts = useMemo(() => posts.filter(post => post.featured), [posts]);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and trends in SaaS, IT solutions, 
              and digital transformation. Expert knowledge to help your business grow.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.icon}
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === "all" && searchTerm === "" && !isLoading && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="aspect-video w-full rounded-t-lg object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.categoryLabel}</Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime ?? "5 min read"}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          {post.author}
                          <Calendar className="h-4 w-4 ml-2" />
                          {formatDate(post.date)}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="group"
                          onClick={() => navigate(`/blog/${post.id}`)}
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">Loading articles...</p>
              </div>
            ) : loadError ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">{loadError}</p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="mt-4"
                >
                  Retry
                </Button>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="aspect-video w-full rounded-t-lg object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.categoryLabel}</Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime ?? "5 min read"}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          {post.author}
                          <Calendar className="h-4 w-4 ml-2" />
                          {formatDate(post.date)}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="group"
                          onClick={() => navigate(`/blog/${post.id}`)}
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest articles and insights delivered directly to your inbox. 
              No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="flex-1"
              />
              <Button variant="hero" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Blog;