import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, tips, and trends in SaaS, IT solutions, and digital transformation.
            </p>
            <div className="text-muted-foreground">
              <p>Coming soon! Our blog will feature:</p>
              <ul className="mt-4 space-y-2 max-w-md mx-auto text-left">
                <li>• SaaS development best practices</li>
                <li>• IT support tips and guides</li>
                <li>• Digital transformation strategies</li>
                <li>• Industry insights and trends</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Blog;