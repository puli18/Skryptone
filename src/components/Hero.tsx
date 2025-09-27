import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Modern tech office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Smart SaaS and IT Solutions
            <span className="block text-primary">for Your Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We design and deliver innovative software, IT support, and digital solutions 
            that help businesses work smarter and grow faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <a 
                href="mailto:admin@skryptone.com.au" 
                className="hover:text-primary transition-colors"
              >
                admin@skryptone.com.au
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a 
                href="tel:+61421140353" 
                className="hover:text-primary transition-colors"
              >
                +61 421 140 353
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;