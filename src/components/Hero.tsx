import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Zap, Users, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Zap, label: "Projects Delivered", value: "100+" },
    { icon: Award, label: "Years Experience", value: "5+" },
  ];

  const benefits = [
    "Custom SaaS Solutions",
    "24/7 IT Support",
    "Rapid Deployment",
    "Australian Based"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Modern technology workspace showcasing innovation and digital solutions" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              <span>Trusted by Australian Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Smart SaaS & IT Solutions
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                for Your Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We design and deliver innovative software, IT support, and digital solutions 
              that help businesses <span className="text-primary font-semibold">work smarter</span> and <span className="text-primary font-semibold">grow faster</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group shadow-medium hover:shadow-lg transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="group bg-background/80 backdrop-blur-sm hover:bg-background border-2"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Our Services
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-foreground bg-background/20 backdrop-blur-sm rounded-lg px-4 py-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-background/20 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:bg-background/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;