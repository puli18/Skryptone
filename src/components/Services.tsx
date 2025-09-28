import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EnquireDialog from "@/components/EnquireDialog";
import { Link } from "react-router-dom";
import { 
  Code, 
  Headphones, 
  Share2, 
  Smartphone, 
  Bot,
  ShoppingCart
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom SaaS Solutions",
      description: "Online ordering systems, car rental asset registers, and bespoke software applications tailored to your business needs.",
      features: ["Online Ordering Systems", "Asset Management", "Custom Dashboards", "API Integrations"]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "IT Support",
      description: "Tech On Call Australia - Professional field technicians providing onsite IT fixes and comprehensive technical support.",
      features: ["Onsite Support", "Remote Assistance", "System Maintenance", "Hardware Installation"]
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Strategic social media marketing services designed specifically for small businesses to boost online presence and engagement.",
      features: ["Content Strategy", "Social Media Management", "Performance Analytics", "Brand Building"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Website & Mobile Development",
      description: "Modern, responsive websites and mobile applications that deliver exceptional user experiences across all devices.",
      features: ["Responsive Design", "Mobile Apps", "E-commerce", "Performance Optimization"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Process Automation & AI",
      description: "Intelligent automation solutions and AI agents that streamline operations and reduce manual workload.",
      features: ["Workflow Automation", "AI Chatbots", "Data Processing", "Smart Analytics"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Digital Solutions",
      description: "Comprehensive digital transformation services including cloud migration, system integration, and digital strategy.",
      features: ["Cloud Migration", "System Integration", "Digital Strategy", "Technology Consulting"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
            return (
              <Link key={index} to={`/services#${serviceId}`}>
                <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full">
                  <CardHeader>
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <EnquireDialog
            trigger={
              <Button variant="hero" size="lg">
                Get a Custom Quote
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;