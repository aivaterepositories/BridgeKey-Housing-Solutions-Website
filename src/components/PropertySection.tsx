import React from 'react';
import { Building2, Clock } from 'lucide-react';

const PropertySection = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Browse All</span> Property
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore available listings while creating your request
          </p>
        </div>
        
        {/* Coming Soon Message */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <Building2 className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-center">
            Properties Coming Soon
          </h3>
          
          <p className="text-muted-foreground text-center max-w-md mb-8">
            We're currently curating an amazing selection of properties for you. 
            In the meantime, feel free to create a request and we'll find the perfect match!
          </p>
          
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <span className="ml-2">Loading new properties...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;