import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Twitter, Linkedin, Facebook } from "lucide-react";

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable SaaS Applications: A Complete Guide",
      excerpt: "Learn the essential principles and best practices for creating SaaS applications that can grow with your business from startup to enterprise scale.",
      content: `
        <p>Building a scalable SaaS application requires careful planning and architecture decisions from day one. In this comprehensive guide, we'll explore the key components that make SaaS applications successful and how to implement them effectively.</p>

        <h2>Understanding SaaS Architecture</h2>
        <p>A well-designed SaaS architecture forms the foundation of any successful application. The key is to think about scalability, security, and maintainability from the very beginning. This means choosing the right technology stack, implementing proper data isolation, and designing APIs that can handle growth.</p>

        <h2>Multi-Tenancy Strategies</h2>
        <p>One of the most critical decisions in SaaS development is how to handle multi-tenancy. There are several approaches:</p>
        <ul>
          <li><strong>Single Database, Shared Schema:</strong> All tenants share the same database and tables with tenant ID separation</li>
          <li><strong>Single Database, Separate Schemas:</strong> Each tenant has their own schema within the same database</li>
          <li><strong>Separate Databases:</strong> Each tenant has a completely separate database</li>
        </ul>

        <h2>Security Considerations</h2>
        <p>Security in SaaS applications goes beyond basic authentication. You need to consider data isolation, API security, compliance requirements, and regular security audits. Implementing role-based access control (RBAC) and ensuring proper data encryption both at rest and in transit are essential.</p>

        <h2>Performance and Monitoring</h2>
        <p>As your SaaS application grows, performance monitoring becomes crucial. Implement comprehensive logging, use application performance monitoring (APM) tools, and set up alerts for critical metrics. Consider implementing caching strategies and database optimization techniques early in the development process.</p>

        <h2>Deployment and DevOps</h2>
        <p>Modern SaaS applications require robust deployment pipelines. Implementing CI/CD practices, containerization with Docker, and orchestration with Kubernetes can help ensure reliable deployments and easy scaling. Consider using infrastructure as code (IaC) tools to manage your cloud resources.</p>

        <h2>Conclusion</h2>
        <p>Building a scalable SaaS application is a complex undertaking that requires careful planning and execution. By focusing on the fundamentals of architecture, security, and performance from the start, you can create applications that will grow with your business and provide value to your customers for years to come.</p>
      `,
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "saas",
      tags: ["SaaS", "Architecture", "Scalability", "Cloud"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "IT Support Best Practices for Small Businesses",
      excerpt: "Discover proven strategies to maintain reliable IT infrastructure and provide excellent technical support to your team and customers.",
      content: `
        <p>Small businesses often struggle with IT support due to limited resources and expertise. However, implementing the right practices can significantly improve your IT operations and reduce downtime while keeping costs manageable.</p>

        <h2>Establishing IT Support Fundamentals</h2>
        <p>The foundation of good IT support starts with understanding your business needs and creating a comprehensive IT strategy. This includes documenting your current infrastructure, identifying critical systems, and establishing service level agreements (SLAs) for different types of issues.</p>

        <h2>Preventive Maintenance</h2>
        <p>Prevention is always better than cure when it comes to IT systems. Regular maintenance tasks include:</p>
        <ul>
          <li>Regular software updates and security patches</li>
          <li>Hardware health monitoring and maintenance</li>
          <li>Backup verification and disaster recovery testing</li>
          <li>Network performance monitoring</li>
          <li>User training and education</li>
        </ul>

        <h2>Building an Effective Support Process</h2>
        <p>Creating a structured support process helps ensure issues are resolved quickly and efficiently. This includes implementing a ticketing system, establishing escalation procedures, and maintaining detailed documentation of common issues and their solutions.</p>

        <h2>Remote Support Technologies</h2>
        <p>Modern remote support tools can significantly improve response times and reduce costs. Tools like remote desktop software, network monitoring solutions, and cloud-based management platforms allow IT professionals to diagnose and resolve many issues without on-site visits.</p>

        <h2>Vendor Relationships</h2>
        <p>Building strong relationships with technology vendors and service providers is crucial for small businesses. This includes negotiating support contracts, understanding warranty terms, and establishing direct communication channels for critical issues.</p>

        <h2>Training and Development</h2>
        <p>Investing in user training can significantly reduce support requests and improve overall productivity. Regular training sessions on new software, security best practices, and basic troubleshooting can empower employees to resolve minor issues independently.</p>

        <h2>Measuring Success</h2>
        <p>Track key metrics such as response times, resolution rates, and user satisfaction to continuously improve your IT support processes. Regular reviews and feedback sessions help identify areas for improvement and ensure your support strategy remains aligned with business needs.</p>
      `,
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "it-support",
      tags: ["IT Support", "Small Business", "Infrastructure", "Best Practices"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt: "Cut through the noise with data-driven social media strategies that generate real engagement and drive business growth.",
      content: `
        <p>Social media marketing has evolved significantly, and what worked yesterday might not work today. Here are the current strategies that are delivering real results for businesses across various industries.</p>

        <h2>Understanding Your Audience</h2>
        <p>The foundation of successful social media marketing is knowing your audience inside and out. This goes beyond basic demographics to understanding their pain points, interests, online behavior, and content preferences. Use analytics tools and surveys to gather this crucial data.</p>

        <h2>Content Strategy That Engages</h2>
        <p>Creating engaging content requires a mix of educational, entertaining, and promotional material. The 80/20 rule still applies – 80% valuable content, 20% promotional. Focus on:</p>
        <ul>
          <li>Educational content that solves problems</li>
          <li>Behind-the-scenes content that humanizes your brand</li>
          <li>User-generated content that builds community</li>
          <li>Interactive content like polls, quizzes, and Q&As</li>
        </ul>

        <h2>Platform-Specific Strategies</h2>
        <p>Each social media platform has its own culture and best practices. What works on LinkedIn won't necessarily work on TikTok. Tailor your content and approach to each platform while maintaining brand consistency.</p>

        <h2>Influencer Partnerships</h2>
        <p>Micro-influencers often provide better ROI than mega-influencers for small to medium businesses. Look for influencers whose audience aligns with your target market and who genuinely engage with their followers.</p>

        <h2>Social Commerce Integration</h2>
        <p>With the rise of social commerce features, businesses can now sell directly through social media platforms. Integrate shopping features into your social media strategy to reduce friction in the buying process.</p>

        <h2>Community Building</h2>
        <p>Focus on building a community around your brand rather than just collecting followers. Engage authentically with your audience, respond to comments and messages promptly, and create opportunities for your audience to connect with each other.</p>

        <h2>Measuring and Optimizing</h2>
        <p>Track meaningful metrics that align with your business goals. While vanity metrics like follower count are nice, focus on engagement rates, click-through rates, conversions, and customer acquisition costs. Use this data to continuously refine your strategy.</p>
      `,
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "marketing",
      tags: ["Social Media", "Marketing", "Strategy", "Engagement"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 4,
      title: "AI Automation: Transforming Business Operations",
      excerpt: "Explore how artificial intelligence and automation are revolutionizing business processes and learn how to implement these technologies effectively.",
      content: `
        <p>AI automation is no longer a futuristic concept—it's a present reality that's transforming how businesses operate. From chatbots to workflow automation, AI is helping companies improve efficiency, reduce costs, and provide better customer experiences.</p>

        <h2>Understanding AI Automation</h2>
        <p>AI automation combines artificial intelligence with automated processes to perform tasks that traditionally required human intervention. This includes everything from simple rule-based automation to complex machine learning algorithms that can make decisions and learn from data.</p>

        <h2>Key Areas for Implementation</h2>
        <p>Businesses are finding success implementing AI automation in several key areas:</p>
        <ul>
          <li><strong>Customer Service:</strong> Chatbots and virtual assistants handling routine inquiries</li>
          <li><strong>Data Processing:</strong> Automated data entry, analysis, and reporting</li>
          <li><strong>Marketing:</strong> Personalized content delivery and lead scoring</li>
          <li><strong>Operations:</strong> Inventory management and supply chain optimization</li>
          <li><strong>Finance:</strong> Automated invoicing and expense processing</li>
        </ul>

        <h2>Implementation Strategy</h2>
        <p>Successful AI automation implementation requires a strategic approach. Start by identifying repetitive, rule-based tasks that consume significant time. Assess the potential impact and complexity of automating each process, then prioritize based on ROI potential.</p>

        <h2>Overcoming Common Challenges</h2>
        <p>While AI automation offers significant benefits, implementation can face challenges including employee resistance, data quality issues, and integration complexities. Address these through proper change management, data cleaning initiatives, and phased rollout approaches.</p>

        <h2>Measuring Success</h2>
        <p>Define clear metrics for success before implementing AI automation. These might include time savings, error reduction, cost savings, or improved customer satisfaction. Regular monitoring and optimization ensure continued value from your automation investments.</p>

        <h2>Future Considerations</h2>
        <p>As AI technology continues to evolve, businesses should stay informed about new capabilities and opportunities. Consider how emerging technologies like natural language processing, computer vision, and predictive analytics might benefit your operations.</p>

        <h2>Getting Started</h2>
        <p>Begin your AI automation journey with small, low-risk projects that can demonstrate value quickly. This builds confidence and expertise within your organization while providing the foundation for more complex automation initiatives.</p>
      `,
      author: "David Park",
      date: "2024-01-08",
      readTime: "9 min read",
      category: "automation",
      tags: ["AI", "Automation", "Business Process", "Technology"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 5,
      title: "Modern Web Development: Trends and Technologies",
      excerpt: "Stay ahead of the curve with the latest web development trends, frameworks, and technologies that are shaping the future of the web.",
      content: `
        <p>Web development is constantly evolving, with new frameworks, tools, and best practices emerging regularly. Here's what's trending in 2024 and what developers should focus on to stay competitive.</p>

        <h2>Frontend Framework Evolution</h2>
        <p>The frontend landscape continues to evolve with frameworks like React, Vue, and Angular leading the way. New meta-frameworks like Next.js, Nuxt.js, and SvelteKit are gaining popularity by providing opinionated solutions for common development challenges.</p>

        <h2>Full-Stack Development</h2>
        <p>The line between frontend and backend development continues to blur. Full-stack frameworks and edge computing are enabling developers to build complete applications with a single technology stack, improving performance and developer experience.</p>

        <h2>Performance Optimization</h2>
        <p>Web performance remains crucial for user experience and SEO. Key focus areas include:</p>
        <ul>
          <li>Core Web Vitals optimization</li>
          <li>Image optimization and lazy loading</li>
          <li>Code splitting and bundling strategies</li>
          <li>Edge computing and CDN utilization</li>
          <li>Progressive Web App (PWA) features</li>
        </ul>

        <h2>Development Tools and Practices</h2>
        <p>Modern development tooling continues to improve developer productivity. Tools like Vite, TypeScript, and modern bundlers provide faster build times and better developer experiences. Container-based development with Docker is becoming standard practice.</p>

        <h2>API Development Trends</h2>
        <p>GraphQL continues to gain adoption alongside REST APIs. Serverless functions and edge computing are changing how we think about backend architecture, enabling more scalable and cost-effective solutions.</p>

        <h2>Security Considerations</h2>
        <p>Web security remains paramount with increasing cyber threats. Modern applications must implement proper authentication, authorization, data encryption, and follow security best practices from the development phase.</p>

        <h2>Accessibility and Inclusion</h2>
        <p>Web accessibility is becoming a legal requirement in many jurisdictions. Developers must consider accessibility from the design phase and implement proper semantic HTML, ARIA attributes, and inclusive design principles.</p>

        <h2>Future Outlook</h2>
        <p>Looking ahead, technologies like WebAssembly, AI integration, and improved browser APIs will continue to expand what's possible on the web. Staying current with these trends while mastering the fundamentals remains key to success in web development.</p>
      `,
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "web-dev",
      tags: ["Web Development", "Trends", "Frameworks", "Technology"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 6,
      title: "Digital Transformation: A Step-by-Step Guide",
      excerpt: "Navigate your digital transformation journey with our comprehensive guide covering strategy, implementation, and common pitfalls to avoid.",
      content: `
        <p>Digital transformation is essential for businesses to remain competitive in today's market. However, it's not just about adopting new technologies—it's about fundamentally changing how your business operates and delivers value to customers.</p>

        <h2>Understanding Digital Transformation</h2>
        <p>Digital transformation involves integrating digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo and experiment with new approaches.</p>

        <h2>Assessment and Strategy</h2>
        <p>Before beginning any transformation initiative, conduct a thorough assessment of your current state. This includes:</p>
        <ul>
          <li>Evaluating existing technology infrastructure</li>
          <li>Analyzing current business processes</li>
          <li>Understanding customer needs and expectations</li>
          <li>Identifying skill gaps and training needs</li>
          <li>Assessing organizational culture and change readiness</li>
        </ul>

        <h2>Building a Digital-First Culture</h2>
        <p>Successful digital transformation requires a cultural shift toward digital-first thinking. This means prioritizing digital solutions, embracing data-driven decision making, and fostering a culture of continuous learning and experimentation.</p>

        <h2>Technology Implementation</h2>
        <p>Choose technologies that align with your business objectives and can scale with your growth. Consider cloud-first approaches, API-driven architectures, and solutions that provide flexibility and integration capabilities.</p>

        <h2>Change Management</h2>
        <p>Digital transformation is as much about people as it is about technology. Implement comprehensive change management strategies that include communication plans, training programs, and support systems to help employees adapt to new ways of working.</p>

        <h2>Measuring Success</h2>
        <p>Define clear metrics and KPIs to measure the success of your digital transformation efforts. These might include operational efficiency gains, customer satisfaction improvements, revenue growth, or cost reductions.</p>

        <h2>Common Pitfalls to Avoid</h2>
        <p>Learn from others' mistakes by avoiding common pitfalls such as underestimating the cultural change required, focusing only on technology without considering processes, lacking leadership commitment, or trying to transform everything at once.</p>

        <h2>Continuous Evolution</h2>
        <p>Digital transformation is not a one-time project but an ongoing journey. Successful organizations continuously evaluate their digital capabilities and adapt to changing market conditions and technological advances.</p>
      `,
      author: "James Thompson",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "saas",
      tags: ["Digital Transformation", "Strategy", "Implementation", "Business"],
      featured: true,
      image: "/api/placeholder/800/400"
    }
  ];

  const categories = {
    "saas": "SaaS Solutions",
    "it-support": "IT Support", 
    "marketing": "Digital Marketing",
    "automation": "Automation & AI",
    "web-dev": "Web Development"
  };

  const article = blogPosts.find(post => post.id === parseInt(id || ""));

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
                <Badge variant="secondary">{categories[article.category as keyof typeof categories]}</Badge>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.readTime}
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
                  {new Date(article.date).toLocaleDateString()}
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-8"></div>
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