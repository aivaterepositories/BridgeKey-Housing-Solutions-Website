import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}`);
    // Add social media links here
  };

  return (
    <footer className="bg-hero-bg text-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo and Social Media Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <img src="/bkhs-logo-white.png" alt="BKHS Logo" className="h-10" />
              <img src="/bkhs-text-white.png" alt="BridgeKey Housing Solutions" className="h-8" />
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <a 
                href="https://linkedin.com/company/bridgekeyhousingsolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact and Copyright Group */}
          <div className="text-center text-hero-accent space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2 text-sm">
              <a href="tel:+639123456789" className="hover:text-white transition-smooth">
                +639123456789
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:sales@aivate.net" className="hover:text-white transition-smooth">
                sales@aivate.net
              </a>
            </div>
            <p className="text-xs">&copy; 2024 Bridgekey Housing Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;