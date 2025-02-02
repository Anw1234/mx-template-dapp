import React from 'react';
import Image from 'next/image';

const Problems = () => {
  const problemsLeft = [
    {
      title: 'Inefficient Resource Allocation',
      description: 'Traditional education systems struggle with bureaucracy, delaying funds where they’re needed most. TeachFi ensures that financial resources reach schools and programs directly, improving their impact.',
      icon: '/problems/wallet.png',
    },
    {
      title: 'Teacher Undercompensation',
      description: 'Educators often face delayed or insufficient payments. With our automated systems, teachers receive timely and fair compensation, motivating them to excel in their roles.',
      icon:  '/problems/glasses.png',
    },
  ];

  const problemsRight = [
    {
      title: 'Limited Access to Quality Funding',
      description: 'Many schools lack the tools to attract and manage necessary funds. Through tokenized ecosystems, TeachFi enables schools to raise capital effectively for growth and development.',
      icon:  '/problems/microchip.png',
    },
    {
      title: 'Unverifiable Student Credentials',
      description: 'Paper-based certificates and transcripts are prone to loss or forgery. TeachFi digitizes student achievements on a secure platform, ensuring they can be accessed and trusted throughout their lives.',
      icon:  '/problems/lock.png',
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold text-primary">
          Problems We Solve
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col space-y-6 md:w-1/3">
            {problemsLeft.map((problem, index) => (
              <div
                key={index}
                className="flex items-start p-6 space-x-4 bg-gray-100 rounded-lg shadow-md"
              >
                <div>
                  <img src={problem.icon} alt={problem.title} width={64} height={64} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mx-8">
            <img
              src="/problems-image.png"
              alt="Problems Illustration"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-6 md:w-1/3">
            {problemsRight.map((problem, index) => (
              <div
                key={index}
                className="flex items-start p-6 space-x-4 bg-gray-100 rounded-lg shadow-md"
              >
                <div>
                  <img src={problem.icon} alt={problem.title} width={64} height={64} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
