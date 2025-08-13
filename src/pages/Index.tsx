import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ReferralRoute from '@/components/ReferralRoute';
import PropertySection from '@/components/PropertySection';
import PartnershipSection from '@/components/PartnershipSection';
import Footer from '@/components/Footer';
import RequestModal from '@/components/RequestModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="relative z-10">
        <Header />
        <main className="pt-[72px]">
          <div>
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