import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Clock, 
  Target, 
  HeartHandshake,
  Award,
  Sparkles
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to create solutions that give you a competitive edge in your industry."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Deployment",
      description: "Our streamlined processes ensure rapid implementation and deployment, getting your solutions live fast."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Tailored for SMBs",
      description: "Specifically designed solutions for small and medium businesses, understanding your unique challenges and goals."
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Reliable Support",
      description: "24/7 support and maintenance services ensure your systems run smoothly and efficiently at all times."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Experience",
      description: "Years of experience in SaaS development and IT services with a track record of successful implementations."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Growth-Focused",
      description: "Our solutions are designed to scale with your business, supporting your growth every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Skryptone?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions 
            that truly make a difference for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Join the growing number of businesses that trust Skryptone for their technology needs. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm text-muted-foreground">
                <strong>Get in touch:</strong> admin@skryptone.com.au | +61 421 140 353
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;