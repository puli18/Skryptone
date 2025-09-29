import { useState } from "react";
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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "saas", name: "SaaS Solutions", icon: <Code className="h-4 w-4" /> },
    { id: "it-support", name: "IT Support", icon: <Headphones className="h-4 w-4" /> },
    { id: "marketing", name: "Digital Marketing", icon: <Share2 className="h-4 w-4" /> },
    { id: "automation", name: "Automation & AI", icon: <Bot className="h-4 w-4" /> },
    { id: "web-dev", name: "Web Development", icon: <Smartphone className="h-4 w-4" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable SaaS Applications: A Complete Guide",
      excerpt: "Learn the essential principles and best practices for creating SaaS applications that can grow with your business from startup to enterprise scale.",
      content: "Building a scalable SaaS application requires careful planning and architecture decisions from day one. In this comprehensive guide, we'll explore the key components that make SaaS applications successful...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "saas",
      tags: ["SaaS", "Architecture", "Scalability", "Cloud"],
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "IT Support Best Practices for Small Businesses",
      excerpt: "Discover proven strategies to maintain reliable IT infrastructure and provide excellent technical support to your team and customers.",
      content: "Small businesses often struggle with IT support due to limited resources and expertise. However, implementing the right practices can significantly improve your IT operations...",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "it-support",
      tags: ["IT Support", "Small Business", "Infrastructure", "Best Practices"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt: "Cut through the noise with data-driven social media strategies that generate real engagement and drive business growth.",
      content: "Social media marketing has evolved significantly, and what worked yesterday might not work today. Here are the current strategies that are delivering real results...",
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "marketing",
      tags: ["Social Media", "Marketing", "Strategy", "Engagement"],
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "AI Automation: Transforming Business Operations",
      excerpt: "Explore how artificial intelligence and automation are revolutionizing business processes and learn how to implement these technologies effectively.",
      content: "AI automation is no longer a futuristic concept—it's a present reality that's transforming how businesses operate. From chatbots to workflow automation...",
      author: "David Park",
      date: "2024-01-08",
      readTime: "9 min read",
      category: "automation",
      tags: ["AI", "Automation", "Business Process", "Technology"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Modern Web Development: Trends and Technologies",
      excerpt: "Stay ahead of the curve with the latest web development trends, frameworks, and technologies that are shaping the future of the web.",
      content: "Web development is constantly evolving, with new frameworks, tools, and best practices emerging regularly. Here's what's trending in 2024...",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "web-dev",
      tags: ["Web Development", "Trends", "Frameworks", "Technology"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Digital Transformation: A Step-by-Step Guide",
      excerpt: "Navigate your digital transformation journey with our comprehensive guide covering strategy, implementation, and common pitfalls to avoid.",
      content: "Digital transformation is essential for businesses to remain competitive in today's market. However, it's not just about adopting new technologies...",
      author: "James Thompson",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "saas",
      tags: ["Digital Transformation", "Strategy", "Implementation", "Business"],
      featured: true,
      image: "/api/placeholder/600/300"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
        {selectedCategory === "all" && searchTerm === "" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{categories.find(c => c.id === post.category)?.name}</Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
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
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm" className="group">
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

            {filteredPosts.length === 0 ? (
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
                {regularPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{categories.find(c => c.id === post.category)?.name}</Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
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
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm" className="group">
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