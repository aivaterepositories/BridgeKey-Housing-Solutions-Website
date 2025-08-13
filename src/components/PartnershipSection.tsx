import React from 'react';

const PartnershipSection = () => {
  const partners = [
    {
      name: 'Alacrity Solutions',
      logoUrl: '/Alacrity-Website-Header-Logo-1 (1)-converted-from-svg.png',
      offsetY: 5,
      isLast: false,
    },
    {
      name: 'CRS',
      logoUrl: '/CRS-blk-and-Red-Door.png',
      offsetY: 0,
      isLast: false,
    },
    {
      name: 'Sedgwick',
      logoUrl: '/sedgwick-logo.png',
      offsetY: 0,
      isLast: false,
    },
    {
      name: 'ale solutions',
      logoUrl: '/ale_solutions_padded.png',
      offsetY: -15,
      isLast: true,
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="text-primary">Partnership</span> with
          </h2>
        </div>
        
        <div className="flex flex-nowrap justify-center items-center gap-20 overflow-x-auto no-scrollbar">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex justify-center items-center flex-shrink-0 ${
                partner.isLast ? 'w-80 h-80' : 'w-72 h-72'
              }`}
              style={{
                transform: `translateY(${partner.offsetY}px)`
              }}
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className={`max-w-full max-h-full object-contain ${
                  partner.isLast ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;