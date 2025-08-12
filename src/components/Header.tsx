import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here
    setIsMobileMenuOpen(false); // Close menu on nav item click
  };

  return (
    <header className="bg-hero-bg text-white py-4 relative z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between md:justify-center md:gap-12 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/bkhs-logo-red.png" alt="BKHS Logo" className="h-10" />
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
            className="text-sm text-white border-white hover:bg-white hover:text-hero-bg bg-transparent"
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
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-hero-bg shadow-lg">
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
              className="text-lg text-white border-white hover:bg-white hover:text-hero-bg bg-transparent px-6 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="mailto:sales@aivate.net">Contact Us</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;