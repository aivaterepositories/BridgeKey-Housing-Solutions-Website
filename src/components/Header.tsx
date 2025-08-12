import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here
    setIsMobileMenuOpen(false); // Close menu on nav item click
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobileMenuOpen) {
        // If the mobile menu is open, we want the header to stay visible.
        setIsHeaderVisible(true);
        return;
      }

      if (currentScrollY > 100) {
        // Hide header on scroll down, show on scroll up
        setIsHeaderVisible(currentScrollY < lastScrollY);
      } else {
        // Always show header when near the top of the page
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <header className={cn(
      "bg-primary text-white py-4 z-50",
      "fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out",
      isHeaderVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="max-w-5xl mx-auto flex items-center justify-between md:justify-center md:gap-12 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/bkhs-logo-white.png" alt="BKHS Logo" className="h-10" />
          <img src="/bkhs-text-white.png" alt="BridgeKey Housing Solutions" className="h-8" />
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => handleNavClick('about')}
            className="text-sm text-white hover:text-hero-accent transition-smooth cursor-pointer whitespace-nowrap"
          >
            Who We Are
          </button>
          <button 
            onClick={() => handleNavClick('services')}
            className="text-sm text-white hover:text-hero-accent transition-smooth cursor-pointer whitespace-nowrap"
          >
            What We Do
          </button>
          <Button 
            asChild
            variant="outline"
            className="text-sm text-white border-white hover:bg-primary hover:border-primary bg-transparent"
          >
            <a href="mailto:sales@aivate.net">Contact Us</a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-hero-accent transition-smooth"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-primary shadow-lg transition-all duration-300 ease-in-out",
        isMobileMenuOpen 
          ? "opacity-100 visible translate-y-0" 
          : "opacity-0 invisible -translate-y-4 pointer-events-none"
      )}>
        <nav className="flex flex-col items-center space-y-6 py-8">
          <button 
            onClick={() => handleNavClick('about')}
            className="text-lg text-white hover:text-hero-accent transition-smooth cursor-pointer"
          >
            Who We Are
          </button>
          <button 
            onClick={() => handleNavClick('services')}
            className="text-lg text-white hover:text-hero-accent transition-smooth cursor-pointer"
          >
            What We Do
          </button>
          <Button 
            asChild
            variant="outline"
            className="text-lg text-white border-white hover:bg-primary hover:border-primary bg-transparent px-6 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a href="mailto:sales@aivate.net">Contact Us</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;