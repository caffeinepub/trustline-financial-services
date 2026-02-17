import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'admin';
  onNavigate: (page: 'home' | 'admin') => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavigation = (page: 'home' | 'admin') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img
            src="/assets/generated/trustline-logo.dim_512x256.png"
            alt="Trustline Financial Services"
            className="h-8 w-auto cursor-pointer"
            onClick={() => handleNavigation('home')}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('job-requirements')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Careers
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleNavigation('admin')}
            className="text-sm"
          >
            Admin
          </Button>
          <Button onClick={() => scrollToSection('contact')} size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('job-requirements')}
              className="text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation('admin')}
              className="justify-start"
            >
              Admin
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
