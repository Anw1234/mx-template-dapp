import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="container flex flex-col items-center px-6 py-16 mx-auto md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-primary">
            Decentralized Education
            <br /> for a Better Tomorrow
          </h1>
          <p className="mt-4 text-gray-600">
            Empowering schools, teachers, and students with blockchain technology to build a transparent, sustainable, and innovative education system for generations to come.
          </p>
          <button className="px-6 py-3 mt-6 transition bg-white border-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-white">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z"
                />
              </svg>
              Play Video
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-8 md:w-1/2 md:mt-0">
          <img
            src="/hero-image.png"
            alt="Hero Illustration"
            width={500}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
