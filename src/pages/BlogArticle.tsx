import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
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

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      setArticle(null);
      return;
    }

    let isMounted = true;

    const fetchArticle = async () => {
      setIsLoading(true);
      setLoadError(null);

      try {
        const docRef = doc(db, "articles", id);
        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) {
          if (isMounted) {
            setArticle(null);
          }
          return;
        }

        if (isMounted) {
          setArticle(normalizePost(snapshot.id, snapshot.data(), categories));
        }
      } catch (error) {
        console.error("Error loading article:", error);
        if (isMounted) {
          setLoadError("Unable to load this article.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchArticle();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const categories = {
    "saas": "SaaS Solutions",
    "it-support": "IT Support", 
    "marketing": "Digital Marketing",
    "automation": "Automation & AI",
    "web-dev": "Web Development"
  };

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-20 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Loading article...</h1>
          <p className="text-muted-foreground">Fetching the latest content.</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (loadError) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-20 container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Unable to Load Article</h1>
          <p className="text-muted-foreground mb-8">{loadError}</p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-20 container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-background to-accent/5">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/blog")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{article.categoryLabel}</Badge>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.readTime ?? "5 min read"}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.date)}
                </div>
              </div>
              
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-video w-full rounded-lg object-cover mb-8"
                  loading="lazy"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-8"></div>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <div 
                  className="article-content text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Share Buttons */}
              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Share2 className="h-5 w-5" />
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank')}
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default BlogArticle;