import React from 'react';
import { cn } from '@/lib/utils';

const PartnershipSection = () => {
  const partners = [
    {
      name: 'Alacrity Solutions',
      logoUrl: '/Alacrity-Website-Header-Logo-1 (1)-converted-from-svg.png',
    },
    {
      name: 'CRS',
      logoUrl: '/CRS-blk-and-Red-Door.png',
    },
    {
      name: 'Sedgwick',
      logoUrl: '/sedgwick-logo.png',
      customClass: 'scale-150',
    },
    {
      name: 'ale solutions',
      logoUrl: '/ale_solutions_padded.png',
    },
    {
      name: 'National Corporate Housing',
      logoUrl: '/nationalcorporatehousing_logo.png',
    }
  ];

  // Create a very long list by repeating the partners array 5 times.
  const extendedPartners = Array(5).fill(partners).flat();

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="text-primary">Partnership</span> with
          </h2>
        </div>
      </div>
      
      <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="flex flex-nowrap animate-long-scroll">
          {extendedPartners.map((partner, index) => (
            <div 
              key={index} 
              className={cn(
                "flex-shrink-0 flex justify-center items-center",
                {
                  'w-40': partner.name === 'Sedgwick',
                  'w-48': partner.name === 'CRS',
                  'w-64': partner.name !== 'Sedgwick' && partner.name !== 'CRS'
                }
              )}
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className={cn('h-12 object-contain', partner.customClass)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;