import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Users, MapPin, ClipboardList } from 'lucide-react';
import RequestModal from './RequestModal';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  period: string;
  beds: number;
  baths: number;
  sqft: string;
  description: string;
  imageUrl?: string;
  isFeatured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  period,
  beds,
  baths,
  sqft,
  description,
  imageUrl = "/placeholder-image.jpg",
  isFeatured = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestBooking = () => {
    setIsModalOpen(true);
  };

  const handlePropertyClick = () => {
    console.log(`Viewing property details for ${id}`);
    // Add property details view logic here
  };

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-lg transition-smooth cursor-pointer group flex flex-col">
        {/* Property Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
          {/* Property image background */}
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-smooth"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={handlePropertyClick}
          />
          
          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4">
              <Button variant="featured" size="sm" className="pointer-events-none">
                Featured
              </Button>
            </div>
          )}
        </div>
        
        {/* Property Details */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
              <div className="mb-4" onClick={handlePropertyClick}>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {title}
              </h3>
              <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{location}</span>
              </div>
              </div>
              
              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-b border-gray-100">
              <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                  <Bed className="w-4 h-4 text-primary mr-1" />
                  <span className="font-semibold">{beds}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Beds</span>
              </div>
              <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                  <Bath className="w-4 h-4 text-primary mr-1" />
                  <span className="font-semibold">{baths}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Baths</span>
              </div>
              <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                  <Users className="w-4 h-4 text-primary mr-1" />
                  <span className="font-semibold">{sqft}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Guests</span>
              </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {description}
              </p>
          </div>
          
          {/* Price and Premium */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-primary">{price}</span>
              <span className="text-muted-foreground ml-1">/{period}</span>
            </div>
            <Button 
              variant="default"
              size="sm"
              className="rounded-full"
            >
              ⭐ Premium
            </Button>
          </div>
          
          {/* Request Booking Button */}
          <Button 
            onClick={handleRequestBooking}
            className="w-full"
          >
            <ClipboardList className="w-4 h-4 mr-2" />
            Request Booking
          </Button>
        </div>
      </div>
      <RequestModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={title}
        submitButtonText="Request Booking"
        submitButtonIcon={<ClipboardList className="w-5 h-5 mr-2" />}
      />
    </>
  );
};

export default PropertyCard;