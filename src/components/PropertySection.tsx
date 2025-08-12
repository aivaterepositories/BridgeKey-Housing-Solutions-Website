import React from 'react';
import PropertyCard from './PropertyCard';

const PropertySection = () => {
  const properties = [
    {
      id: '1',
      title: 'Pinoy Big Brother House',
      location: 'Mother Ignacia Ave, Quezon City',
      price: '$22,001',
      period: 'month',
      beds: 5,
      baths: 5,
      sqft: '10',
      description: 'The reality series house is famous for its array and blue facade designed to look trendy enough for social media but basic enough to feel like an ordinary family home. Due to AI popularity, it has become part...',
      isFeatured: true,
      imageUrl: '/property-pinoy-big-brother-house.png',
    },
    {
      id: '2',
      title: 'Aguinaldo Shrine',
      location: 'Kawit, Cavite',
      price: '$85,001',
      period: 'month',
      beds: 5,
      baths: 2,
      sqft: '20',
      description: 'Found in Kawit Cavite Aguinaldo\'s mansion is one of the Philippines\' most significant historical landmarks. This is where Emilio Aguinaldo declared the Philippine independence from the Spanish Look...',
      isFeatured: true,
      imageUrl: '/property-aguinaldo-shrine.png',
    },
    {
      id: '3',
      title: 'Jollie House with Jollie Friends',
      location: 'Jolliitown, Quezon City',
      price: '$10,001',
      period: 'month',
      beds: 3,
      baths: 2,
      sqft: '30',
      description: 'Step into this one-of-a-kind two-story character house, painted in both signature red and yellow. This cheerful house inspired by fast food, sun, and family...',
      isFeatured: true,
      imageUrl: '/property-jollie-house.png',
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Browse All</span> Property
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore available listings while creating your request
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;