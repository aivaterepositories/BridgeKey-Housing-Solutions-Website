import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface HeroSectionProps {
  onCreateRequest: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCreateRequest }) => {
  return (
    <section className="relative bg-transparent text-foreground min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-60 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/resource-uploads/d0852ee6-fdb9-4eeb-9470-1d91e0d3662e.png)' }}
      ></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-primary">Let the funnel guide</span>
          <br />
          <span className="text-black">
            your hustle to thrive.
          </span>
        </h1>
        
        {/* 7 lines of spacing */}
        <div className="my-16"></div>
        <div className="my-16"></div>
        <div className="my-16"></div>
        <div className="my-16"></div>
        <div className="my-16"></div>
        <div className="my-16"></div>
        <div className="my-16"></div>
        
        <div className="mb-12">
          <Button 
            variant="hero"
            size="lg"
            onClick={onCreateRequest}
            className="px-12 py-6 text-2xl bg-teal-700 hover:bg-teal-800 text-white border-none transition-transform duration-500 ease-in-out transform hover:scale-105 active:scale-95"
          >
            <Plus className="w-7 h-7 mr-3" />
            CREATE REQUEST
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;