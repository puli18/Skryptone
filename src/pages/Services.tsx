import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EnquireDialog from "@/components/EnquireDialog";
import { 
  Code, 
  Headphones, 
  Share2, 
  Smartphone, 
  Bot,
  ShoppingCart,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "saas-solutions",
      icon: <Code className="h-12 w-12" />,
      title: "Custom SaaS Solutions",
      description: "Build powerful, scalable software-as-a-service applications tailored to your business needs.",
      features: [
        "Online Ordering Systems - Complete e-commerce platforms with payment integration",
        "Car Rental Asset Registers - Comprehensive fleet management systems",
        "Custom Dashboards - Real-time analytics and reporting interfaces", 
        "API Integrations - Connect your systems with third-party services",
        "Multi-tenant Architecture - Secure, scalable SaaS platforms",
        "Cloud-native Development - Built for performance and reliability"
      ],
      benefits: [
        "Reduce operational costs by up to 40%",
        "Automate manual processes",
        "Scale from startup to enterprise",
        "24/7 system availability"
      ]
    },
    {
      id: "it-support", 
      icon: <Headphones className="h-12 w-12" />,
      title: "IT Support",
      description: "Professional field technicians providing comprehensive onsite and remote IT support across Australia.",
      features: [
        "Onsite Support - Qualified technicians at your location",
        "Remote Assistance - Quick resolution via secure remote access",
        "System Maintenance - Proactive monitoring and updates",
        "Hardware Installation - Server setup, network configuration",
        "Emergency Response - 24/7 critical issue resolution",
        "Preventive Maintenance - Scheduled system health checks"
      ],
      benefits: [
        "Minimize system downtime",
        "Predictable IT costs",
        "Expert technical knowledge", 
        "Australia-wide coverage"
      ],
      externalLink: {
        url: "https://techoncallaustralia.com.au",
        text: "Visit Tech On Call Australia"
      }
    },
    {
      id: "social-media",
      icon: <Share2 className="h-12 w-12" />,
      title: "Social Media Marketing",
      description: "Strategic social media marketing services designed specifically for small businesses to boost online presence.",
      features: [
        "Content Strategy - Tailored content plans for your audience",
        "Social Media Management - Daily posting and engagement",
        "Performance Analytics - Detailed reporting and insights",
        "Brand Building - Consistent brand voice across platforms",
        "Paid Advertising - Targeted Facebook and Instagram ads",
        "Community Management - Active audience engagement"
      ],
      benefits: [
        "Increase brand awareness by 200%",
        "Generate qualified leads",
        "Build customer loyalty",
        "Measurable ROI tracking"
      ]
    },
    {
      id: "web-mobile",
      icon: <Smartphone className="h-12 w-12" />,
      title: "Website & Mobile Development", 
      description: "Modern, responsive websites and mobile applications that deliver exceptional user experiences.",
      features: [
        "Responsive Web Design - Beautiful sites that work on all devices",
        "Mobile Apps - Native iOS and Android applications",
        "E-commerce Solutions - Online stores with payment processing",
        "Performance Optimization - Fast loading, SEO-optimized sites",
        "Content Management - Easy-to-use admin interfaces",
        "Progressive Web Apps - App-like web experiences"
      ],
      benefits: [
        "Improve conversion rates by 150%",
        "Mobile-first design approach",
        "Search engine optimization",
        "Secure and reliable hosting"
      ]
    },
    {
      id: "automation-ai",
      icon: <Bot className="h-12 w-12" />,
      title: "Process Automation & AI",
      description: "Intelligent automation solutions and AI agents that streamline operations and reduce manual workload.",
      features: [
        "Workflow Automation - Streamline repetitive business processes",
        "AI Chatbots - Intelligent customer service automation",
        "Data Processing - Automated data entry and analysis",
        "Smart Analytics - AI-powered business insights",
        "Document Automation - Automated report generation",
        "Integration Solutions - Connect disparate systems seamlessly"
      ],
      benefits: [
        "Save 20+ hours per week",
        "Reduce human errors by 90%",
        "24/7 automated operations",
        "Intelligent decision making"
      ]
    },
    {
      id: "digital-solutions",
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "Digital Solutions",
      description: "Comprehensive digital transformation services including cloud migration and system integration.",
      features: [
        "Cloud Migration - Move your systems to secure cloud platforms",
        "System Integration - Connect all your business tools",
        "Digital Strategy - Roadmap for digital transformation",
        "Technology Consulting - Expert advice on tech decisions",
        "Data Migration - Safe transfer of critical business data",
        "Legacy System Modernization - Update outdated systems"
      ],
      benefits: [
        "Reduce IT costs by 30%",
        "Improve system reliability",
        "Enable remote work",
        "Future-proof your business"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and streamline your operations. From custom software to AI automation.
            </p>
            <EnquireDialog
              trigger={
                <Button variant="hero" size="lg">
                  Get Started Today
                </Button>
              }
            />
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 pb-8">
                      <div className="flex items-start gap-6">
                        <div className="text-primary">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                          {service.externalLink && (
                            <div className="mt-4">
                              <Button variant="outline" asChild>
                                <a 
                                  href={service.externalLink.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2"
                                >
                                  {service.externalLink.text}
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4">What's Included</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => {
                              const [title, description] = feature.split(' - ');
                              return (
                                <li key={featureIndex} className="flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <span className="font-medium">{title}</span>
                                    {description && (
                                      <span className="text-muted-foreground"> - {description}</span>
                                    )}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6">
                            <EnquireDialog
                              trigger={
                                <Button variant="hero" className="w-full">
                                  Get Quote for {service.title}
                                </Button>
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that fits your business needs perfectly.
            </p>
            <EnquireDialog
              trigger={
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
              }
            />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Services;