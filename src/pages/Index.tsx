import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ReferralRoute from '@/components/ReferralRoute';
import PropertySection from '@/components/PropertySection';
import PartnershipSection from '@/components/PartnershipSection';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import RequestModal from '@/components/RequestModal';

const Index = () => {
  const [isBgImageVisible, setIsBgImageVisible] = useState(false);
  const [shouldRenderImage, setShouldRenderImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the hero section is NOT in the viewport, show the image.
        setIsBgImageVisible(!entry.isIntersecting);
      },
      {
        // This ensures the image appears only after the hero section is mostly scrolled out of view.
        rootMargin: "0px 0px -90% 0px",
        threshold: 0
      }
    );

    const currentRef = heroSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isBgImageVisible) {
      setShouldRenderImage(true);
    }
    // The fade-out is handled by the onAnimationEnd event
  }, [isBgImageVisible]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {shouldRenderImage && (
        <div 
          className={cn(
            "fixed top-1/2 right-8 w-96 -translate-y-1/2 pointer-events-none z-0",
            isBgImageVisible ? "animate-fade-in" : "animate-fade-out"
          )}
          onAnimationEnd={() => {
            if (!isBgImageVisible) {
              setShouldRenderImage(false);
            }
          }}
        >
          <img 
            src="/fixed-background-icon.png" 
            alt="fixed background icon" 
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="relative z-10">
        <Header />
        <main className="pt-[72px]">
          <div ref={heroSectionRef}>
            <HeroSection onCreateRequest={() => setIsModalOpen(true)} />
          </div>
          <ReferralRoute />
          <PropertySection />
          <PartnershipSection />
        </main>
        <Footer />
      </div>

      <RequestModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;