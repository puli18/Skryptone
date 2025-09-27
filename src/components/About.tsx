import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions using the latest technologies"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliability",
      description: "Dependable systems you can trust for your business"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Tailored Solutions",
      description: "Custom-built for small and medium businesses"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quick Deployment",
      description: "Fast implementation to get you up and running"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Skryptone Pty Ltd
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Skryptone Pty Ltd is a leading Australian SaaS and IT services company dedicated to 
            empowering businesses through technology. We specialize in creating innovative software 
            solutions, providing reliable IT support, and delivering digital transformation services 
            that drive growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Our commitment to excellence and customer satisfaction makes us the trusted partner 
            for businesses looking to leverage technology for competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;