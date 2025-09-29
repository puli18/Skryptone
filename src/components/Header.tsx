import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import EnquireDialog from "@/components/EnquireDialog";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      scrollToSection(sectionId);
    } else {
      // If on another page, navigate to home first, then scroll
      navigate('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">Skryptone</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Home', action: null, link: '/' },
              { name: 'About', action: () => navigateToSection('about') },
              { name: 'Services', action: null, link: '/services' },
              { name: 'Contact', action: () => navigateToSection('contact') },
              { name: 'Blog', action: null, link: '/blog' }
            ].map((item) => (
              item.link ? (
                <Link
                  key={item.name}
                  to={item.link}
                  className="relative text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="relative text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </button>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <EnquireDialog
              trigger={
                <Button variant="hero" size="sm" className="shadow-medium">
                  Enquire Now
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-border/50 pt-4">
            {[
              { name: 'Home', action: null, link: '/' },
              { name: 'About', action: () => navigateToSection('about') },
              { name: 'Services', action: null, link: '/services' },
              { name: 'Contact', action: () => navigateToSection('contact') },
              { name: 'Blog', action: null, link: '/blog' }
            ].map((item) => (
              item.link ? (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-accent/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action?.();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-accent/50"
                >
                  {item.name}
                </button>
              )
            ))}
            <div className="pt-4 border-t border-border/50">
              <EnquireDialog
                trigger={
                  <Button variant="hero" className="w-full">
                    Enquire Now
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;