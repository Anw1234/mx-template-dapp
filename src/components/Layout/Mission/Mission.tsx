import React from 'react';
import Image from 'next/image';

const Mission = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container flex flex-col items-center px-6 mx-auto md:flex-row">
        <div className="w-full md:w-1/3">
          <img
            src="/mission-image.png"
            alt="Our Mission"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full mt-8 md:w-1/2 md:mt-0 md:pl-10">
          <h2 className="text-3xl font-bold text-primary">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600">
            At TeachFi, our mission is to reshape the way education is funded and managed. By leveraging blockchain technology, we empower schools to expand, reward educators fairly, and provide students with better opportunities to succeed.
          </p>
          <p className="mt-4 text-gray-600">
            We aim to build a global ecosystem where education thrives, resources are optimized, and every child&apos;s potential is unlocked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
