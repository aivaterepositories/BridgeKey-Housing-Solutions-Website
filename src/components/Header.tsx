import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here
  };

  return (
    <header className="bg-hero-bg text-white py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/bkhs-logo-red.png" alt="BKHS Logo" className="h-10" />
          <img src="/bkhs-text-white.png" alt="BridgeKey Housing Solutions" className="h-8" />
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('about')}
            className="text-sm text-white hover:text-hero-accent transition-smooth cursor-pointer"
          >
            Who We Are
          </button>
          <button 
            onClick={() => handleNavClick('services')}
            className="text-sm text-white hover:text-hero-accent transition-smooth cursor-pointer"
          >
            What We Do
          </button>
          <Button 
            asChild
            variant="outline"
            className="text-sm text-white border-white hover:bg-white hover:text-hero-bg bg-transparent"
          >
            <a href="mailto:contactus@bkhs.net">Contact Us</a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white hover:text-hero-accent transition-smooth">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;