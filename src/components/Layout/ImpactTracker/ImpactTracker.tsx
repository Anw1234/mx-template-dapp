import React from 'react';
import Image from 'next/image';

const ImpactTracker = () => {
  const stats = [
    { label: 'Franchises', value: '25+' },
    { label: 'Students', value: '1,250' },
    { label: 'Employees', value: '548' },
  ];

  const partners = [
    { src: '/partners/Staking-Agency-White.png', alt: 'Scoala Romano Britanica' },
    { src: '/partners/Staking-Agency-White.png', alt: 'Staking Agency' },
    { src: '/partners/multiversx.png', alt: 'MultiversX' },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary">Impact Tracker</h2>
        <p className="mb-12 text-gray-600">
          In a world where creativity meets technology, we provide the tools to craft stunning interfaces and exceptional products.
        </p>
        <div className="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">{stat.value}</span>
              <span className="mt-2 text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-8 bg-gray-100">
        <div className="container px-6 mx-auto text-center">
          <h3 className="mb-6 text-xl font-bold text-gray-700">Partners</h3>
          <div className="flex items-center justify-center space-x-8">
            {partners.map((partner, index) => (
              <div key={index} className="relative w-32 h-16">
                <img src={partner.src} alt={partner.alt}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTracker;
