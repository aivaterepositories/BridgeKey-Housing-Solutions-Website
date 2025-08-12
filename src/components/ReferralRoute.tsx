import React from 'react';

const desktopSteps = [
  {
    icon: '/referral-steps/get-in-touch.png',
    title: 'Create Request',
    description: 'Submit a request to us so we can check for available properties.',
    desktopClass: 'md:col-start-1',
  },
  {
    icon: '/referral-steps/wait-for-approval.png',
    title: "We'll Wait for Approval",
    description: "We'll wait for approval until your adjuster gives the green light.",
    desktopClass: 'md:col-start-3',
  },
  {
    icon: '/referral-steps/share-the-details.png',
    title: "We'll Share the Details",
    description: "We'll provide all the property information you'll need.",
    desktopClass: 'md:col-start-5',
  },
  {
    icon: '/referral-steps/submit-properties.png',
    title: 'Receive Properties',
    description: "We'll send available properties for your review.",
    desktopClass: 'md:col-start-2 md:row-start-2 md:mt-16',
  },
  {
    icon: '/referral-steps/approval-secured.png',
    title: 'Approval Secured',
    description: "Your adjuster confirms the chosen property, then we'll proceed to the next step.",
    desktopClass: 'md:col-start-4 md:row-start-2 md:mt-16',
  },
  {
    icon: '/referral-steps/confirm-booking.png',
    title: 'Confirm Booking',
    description: "You'll confirm the booking and then we'll handle the rest.",
    desktopClass: 'md:col-start-6 md:row-start-2 md:mt-16',
  },
];

const mobileStepData = [
  {
    icon: '/referral-steps/get-in-touch.png',
    title: 'Create Request',
    description: 'Submit a request to us so we can check for available properties.',
  },
  {
    icon: '/referral-steps/submit-properties.png',
    title: 'Receive Properties',
    description: "We'll send available properties for your review.",
  },
  {
    icon: '/referral-steps/wait-for-approval.png',
    title: "We'll Wait for Approval",
    description: "We'll wait for approval until your adjuster gives the green light.",
  },
  {
    icon: '/referral-steps/approval-secured.png',
    title: 'Approval Secured',
    description: "Your adjuster confirms the chosen property, then we'll proceed to the next step.",
  },
  {
    icon: '/referral-steps/share-the-details.png',
    title: "We'll Share the Details",
    description: "We'll provide all the property information you'll need.",
  },
  {
    icon: '/referral-steps/confirm-booking.png',
    title: 'Confirm Booking',
    description: "You'll confirm the booking and then we'll handle the rest.",
  },
];

const Step = ({ icon, title, description, desktopClass = '' }: { icon: string; title: string; description: string; desktopClass?: string; }) => (
  <div className={`flex flex-col items-center text-center ${desktopClass}`}>
    <img 
      src={icon} 
      alt={title} 
      className="w-28 h-28 mb-4 transition-transform duration-500 ease-in-out hover:scale-110"
    />
    <h3 className="text-lg font-semibold whitespace-nowrap">{title}</h3>
    <div className="w-16 h-0.5 bg-foreground my-3"></div>
    <p className="text-sm text-foreground max-w-sm min-h-10">{description}</p>
  </div>
);

const ReferralRoute = () => {
  return (
    <section className="pt-8 pb-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            The <span className="text-primary">Referral Route</span>
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="max-w-4xl mx-auto hidden md:grid md:grid-cols-6 md:gap-x-8 md:gap-y-16 relative">
          {desktopSteps.map((step) => (
            <Step key={step.title} {...step} />
          ))}

          {/* Arrow from Get in Touch to Wait for Approval */}
          <div className="absolute top-[12.5%] left-[16.5%] w-20 h-20 flex justify-center items-center pointer-events-none">
            <img 
              src="/referral-steps/arrow-1.png" 
              alt="arrow pointing from Get in Touch to Wait for Approval" 
              className="w-full h-auto"
            />
          </div>

          {/* Arrow from Submit Properties to Approval Secured, moved slightly right */}
          <div className="absolute top-[12.5%] left-[52%] w-20 h-20 flex justify-center items-center pointer-events-none">
            <img 
              src="/referral-steps/arrow-1.png" 
              alt="arrow pointing from Submit Properties to Approval Secured" 
              className="w-full h-auto"
            />
          </div>

          {/* Arrow beside Share the Details */}
          <div className="absolute top-[12.5%] left-[85.5%] w-20 h-20 flex justify-center items-center pointer-events-none">
            <img
              src="/referral-steps/arrow-1.png"
              alt="arrow beside Share the Details icon"
              className="w-full h-auto"
            />
          </div>

          {/* Arrow below Submit Properties, moved slightly left for better alignment */}
          <div className="absolute top-[52%] left-[34%] w-20 h-20 flex justify-center items-center pointer-events-none">
            <img
              src="/Arrow 2.png"
              alt="arrow below Submit Properties moved slightly left"
              className="w-full h-auto"
            />
          </div>

          {/* Arrow below Share the Details */}
          <div className="absolute top-[52%] left-[69%] w-20 h-20 flex justify-center items-center pointer-events-none">
            <img
              src="/Arrow 2.png"
              alt="arrow below Share the Details"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-12 relative">
          {mobileStepData.map((step, index) => (
            <React.Fragment key={step.title}>
              <Step {...step} />
              {index < mobileStepData.length - 1 && (
                <div className="flex justify-center">
                  <img 
                    src="/arrow down (1).png" 
                    alt="arrow down" 
                    className="w-6 h-6"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralRoute;