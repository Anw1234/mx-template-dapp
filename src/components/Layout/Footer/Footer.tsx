import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-20 bg-gray-800">
      <div className="container px-6 mx-auto text-gray-400">
        {/* Navigation & Logo */}
        <div className="flex flex-col items-center space-y-4">
          <Link className="mb-4" href="/">
            <Image src="/Logo.svg" alt="TeachFi" width={150} height={40} />
          </Link>
          <ul className="flex flex-wrap justify-center space-x-10 text-gray-400">
            <li><a href="#" className="transition hover:text-white">Home</a></li>
            <li><a href="#" className="transition hover:text-white">Vision</a></li>
            <li><a href="#" className="transition hover:text-white">Statistics</a></li>
            <li><a href="#" className="transition hover:text-white">Partners</a></li>
            <li><a href="#" className="transition hover:text-white">Team</a></li>
            <li><a href="#" className="transition hover:text-white">About</a></li>
            <li><a href="#" className="transition hover:text-white">Applications</a></li>
          </ul>
        </div>

        {/* Horizontal Line */}
        <hr className="mx-auto my-12 border-gray-700 w-4/4" />

        {/* Subscription Form & Copyright */}
        <div className="flex items-center justify-between mx-auto w-4/4">
          <form className="flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-white bg-white rounded-lg focus:outline-none w-72"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white transition rounded-lg bg-primary hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500">&copy; 2024 TeachFi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;