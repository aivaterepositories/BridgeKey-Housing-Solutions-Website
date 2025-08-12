import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}`);
    // Add social media links here
  };

  const handleContactClick = () => {
    console.log('Opening contact');
    // Add contact logic here
  };

  return (
    <footer className="bg-hero-bg text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 order-1">
            <img src="/bkhs-logo-red.png" alt="BKHS Logo" className="h-10" />
            <img src="/bkhs-text-white.png" alt="BridgeKey Housing Solutions" className="h-8" />
          </div>
          
          {/* Middle section for contact and copyright */}
          <div className="text-center text-hero-accent order-3 md:order-2">
            <button 
              onClick={handleContactClick}
              className="hover:text-white transition-smooth cursor-pointer text-sm"
            >
              +639123456789 | help@bkhs.net
            </button>
            <p className="text-xs mt-1">&copy; 2024 BKHS. All rights reserved.</p>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4 order-2 md:order-3">
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
            <button 
              onClick={() => handleSocialClick('LinkedIn')}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;