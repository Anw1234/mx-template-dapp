import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800">
      <div className="container px-6 mx-auto text-gray-400">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">TEACHFI</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="transition hover:text-white">Home</a></li>
              <li><a href="#" className="transition hover:text-white">Vision</a></li>
              <li><a href="#" className="transition hover:text-white">Statistics</a></li>
              <li><a href="#" className="transition hover:text-white">Partners</a></li>
              <li><a href="#" className="transition hover:text-white">Team</a></li>
              <li><a href="#" className="transition hover:text-white">About</a></li>
              <li><a href="#" className="transition hover:text-white">Applications</a></li>
            </ul>
          </div>
          <div>
            <form>
              <h3 className="mb-4 font-semibold text-white">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-l-md focus:outline-none md:w-auto"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white transition bg-primary rounded-r-md hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 text-sm text-center text-gray-500">
          <p>&copy; 2024 TeachFi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
