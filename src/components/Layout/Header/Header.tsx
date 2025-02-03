const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="container flex flex-col items-center px-6 py-16 mx-auto md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
        
          {/* Desktop Text */}
          <h1 className="hidden text-4xl font-medium leading-tight md:block md:text-6xl text-primary">
            <span className="bg-gradient-to-r from-[#20B3A7] to-[#055370] bg-clip-text text-transparent">
              Decentralized Education
            </span>
            <div className="text-gray-800">for a Better Tomorrow</div>
          </h1>

          {/* Mobile Text */}
          <h1 className="block text-4xl font-medium leading-tight md:hidden text-primary">
            <span className="text-black">Empowering </span>
            <span className="bg-gradient-to-r from-[#20B3A7] to-[#055370] bg-clip-text text-transparent">
              Innovation
            </span>
            <span className="text-black"> for the Future.</span>
          </h1>

          {/* Desktop Text */}
          <p className="max-w-md mt-6 text-lg leading-relaxed text-gray-600 md:max-w-lg">
            <span className="hidden md:block">
              Empowering schools, teachers, and students with blockchain technology to build a transparent, sustainable, and innovative education system for generations to come.
            </span>
          </p>

          {/* Mobile Text */}
          <p className="max-w-md mt-6 text-lg leading-relaxed text-gray-600 md:max-w-lg">
            <span className="block md:hidden">
              Driving collaboration and discovery through a decentralized, transparent, and community-powered approach to science and education.
            </span>
          </p>

          <button className="flex items-center justify-center w-full px-8 py-4 mt-8 text-lg text-gray-700 transition border border-gray-300 rounded-xl hover:bg-gray-100 md:w-auto md:px-6 md:py-3">
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