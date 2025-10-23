import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Skryptone Logo_Black.svg" 
                alt="Skryptone" 
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Skryptone Pty Ltd is Perth's leading SaaS development company and IT support provider, 
              delivering innovative custom web applications and business automation software that help 
              Australian businesses work smarter and grow faster.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong>{" "}
                <a 
                  href="mailto:admin@skryptone.com.au" 
                  className="hover:text-primary transition-colors"
                >
                  admin@skryptone.com.au
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a 
                  href="tel:+61421140353" 
                  className="hover:text-primary transition-colors"
                >
                  +61 421 140 353
                </a>
              </p>
              <p>
                <strong>Location:</strong> Perth, Western Australia
              </p>
              <p>
                <strong>Business Hours:</strong> Mon-Fri 9AM-6PM AEST
              </p>
              <p>
                <strong>Find Us:</strong>{" "}
                <a 
                  href="https://maps.app.goo.gl/mjtVNsWgMqZs9X996" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors text-left block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors text-left block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1D51v3ZJnJ/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors opacity-50 cursor-not-allowed"
                aria-label="X (formerly Twitter)"
                title="X account coming soon"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/skryptone/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/skryptone?igsh=bGhqcnVvcGo5OHVp" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80">
            © 2025 Skryptone Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;